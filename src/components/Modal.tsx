// Modal.tsx
import React from 'react';

interface ModalProps {
  title: string;
  information: string;
  description: string;
  image: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, information, description, image, onClose }) => {
  return (
    <div className="absolute inset-0 bg-black/60 z-20 flex items-end justify-end p-4">
      <div className="bg-white w-full max-w-5xl h-[450px] rounded-lg overflow-hidden relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex">
          <img src={image} alt={title} className="w-1/3 h-auto" />
          <div className="p-4 w-2/3">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="mt-2">{description}</p>
            <p className="mt-5">{information}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
