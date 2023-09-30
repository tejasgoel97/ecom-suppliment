import React from 'react';

const Button = ({ className, children, ...restProps }) => {

  let buttonClass = `px-4 py-2 rounded focus:outline-none bg-primary cursor-pointer text-white block`;

    if(className){
         buttonClass = buttonClass+ ` ${className}`;

    }

  return (
    <button className={buttonClass} {...restProps}>
      {children}
    </button>
  );
};

export default Button;