import React from 'react';

interface ButtonProps {
  label: string;
  id: string;
  leftIcon?: any;
  rightIcon?: any;
}

const ModalButton = ({ label, leftIcon, rightIcon, id }: ButtonProps) => {
  return (
    <>
      <label htmlFor={id} className="btn modal-button w-full">
        {leftIcon && leftIcon}
        {label}
        {rightIcon && rightIcon}
      </label>
      <input type="checkbox" id={id} className="modal-toggle" />
    </>
  );
};

export default ModalButton;
