import React from 'react';

type ButtonProps = React.ComponentProps<'button'>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="p-4 px-8 text-white font-bold bg-red-600 rounded block w-[200px] overflow-hidden whitespace-nowrap overflow-ellipsis text-center"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
