// Modal.tsx
import React from 'react';

interface ModalProps {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, image, onClose }) => {
  return (
    <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg max-w-md mx-auto">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
        <img src={image} alt={title} className="mt-4 w-full h-auto" />
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
