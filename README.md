[![Circle CI](https://circleci.com/gh/rangle/typescript-react-redux-starter.svg?style=svg)](https://circleci.com/gh/rangle/typescript-react-redux-starter)

# TypeScript/React/Redux Starter

This is the initial version of our starter project using React, TypeScript and Webpack to tie it all together.

## npm scripts

Set up
--------------------
```
$ npm install

$ cd client
$ npm install

$ cd ../server
$ npm install
```

Dev
--------------------
#### client
```
$ cd client
$ npm run server:dev
```
Open `http://localhost:8080` in your browser.

#### server
```
$ cd server
$ npm run server:dev
```
Open `http://localhost:3000` in your browser.


Tests
------------------
#### Client tests
###### Single Run
```bash
$ npm run test
```

###### Watch Files
```bash
$ npm run test:watch
```

###### Coverage
```bash
$ npm run cover
```

#### Server tests


Production
-----------------------
#### Run npm Scripts
```bash
npm install
npm start
```

This runs a production-ready express server that serves up a bundled and
minified version of the client.

Open `http://localhost:8080` in your browser.


License
-----------------------
Copyright (c) 2016 rangle.io

[MIT License][MIT]

[MIT]: ./LICENSE "Mit License"
