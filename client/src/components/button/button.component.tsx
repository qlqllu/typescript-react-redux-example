import * as React from 'react';
import * as classNames from 'classnames';

const styles = require('./button.css');

interface IButtonProps extends React.Props<any> {
  onClick?: () => void;
  type?: string;
  className?: string;
  id?: string;
  testid?: string;
};

export default function Button({
  onClick = null,
  type = 'button',
  className = '',
  id = '',
  testid = '',
  children = null
}: IButtonProps) {
  const buttonClasses = classNames(styles.btn, className);

  return (
    <button
      data-testid={ testid }
      id={ id }
      type={ type }
      className={ buttonClasses }
      onClick={ onClick }>
      { children }
    </button>
  );
}
