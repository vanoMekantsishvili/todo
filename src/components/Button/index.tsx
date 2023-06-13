import React, { FC } from 'react';
import classnames from 'classnames'
import { ButtonProps } from './props'
import './styles.scss'

const Button: FC<ButtonProps> = ({ children, className, ...restProps }) => {
  return (
    <button 
        className={classnames('button', className)}
        {...restProps}>
        {children}
    </button>
  );
};

export default Button;