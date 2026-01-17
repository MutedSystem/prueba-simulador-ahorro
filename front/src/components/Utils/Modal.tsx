import React from 'react';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center w-full h-full' onClick={onClose}>
      <div className='bg-white p-4 rounded-md w-1/2 h-1/2 relative' onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className='absolute top-2 right-2 text-black'>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;