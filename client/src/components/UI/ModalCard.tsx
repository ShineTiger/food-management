import React from 'react';

interface ModalProps {
  id: string;
  children: React.ReactNode;
}

const ModalCard = ({ id, children }: ModalProps) => {
  return (
    <>
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor={''}>
          {children}
        </label>
      </label>
    </>
  );
};

export default ModalCard;
