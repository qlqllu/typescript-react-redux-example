class IntlManager{
  static instance: IntlManager;

  loadLocaleChunk(module: string, locale: string): Promise<any>{
    const chunks = {
      root: new Promise((resolve, reject) => {
        (require as any).ensure([], () => {
          try{
            resolve(require(`${module}/nls/strings.js`));
          }catch(e){
            reject(e);
          }          
        }, 'nls.root');
      }),

      'zh-cn': new Promise((resolve, reject) => {
        (require as any).ensure([], () => {
          try{
            resolve(require(`${module}/nls/zh-cn/strings.js`));
          }catch(e){
            reject(e);
          }          
        }, 'nls.zh-cn');
      })
    };
    
    return chunks[locale];
  }

  /**
   * module: the module path (relative to the src folder), module should have a nls folder and a nls/strings.js file
   */
  loadModuleIntlStrings(module: string, locale: string, chunkName: string): Promise<any>{
    locale = locale.toLocaleLowerCase();
    
    return this.loadLocaleChunk(module, 'root').then(rootContent => {
      if(/^en/.test(locale)){
        return rootContent.root;
      }

      let localeContent;
      if(rootContent[locale]){//have locale strings
        return this.loadLocaleChunk(module, locale).then(localeContent => {
          localeContent = Object.assign(rootContent.root, localeContent);
          return localeContent;
        });
      }else if(rootContent[locale.split('-')[0]]){//have language strings
        return this.loadLocaleChunk(module, locale.split('-')[0]).then(localeContent => {
          localeContent = Object.assign(rootContent.root, localeContent);
          return localeContent;
        });
      }else{
        return rootContent.root;
      }

    });

  }

  static getInstance(){
    if(!IntlManager.instance){
      IntlManager.instance = new IntlManager();
    }
    return IntlManager.instance;
  }
}


export default IntlManager.getInstance();