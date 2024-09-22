// Modal.tsx
import React from 'react';
import { options } from '../docs/optionsData'; // Import options

interface ModalProps {
  optionIndex: number; // Indeks opsi yang dipilih
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ optionIndex, onClose }) => {
  const option = options[optionIndex]; // Ambil opsi berdasarkan indeks

  return (
    <div className="absolute inset-0 bg-black/60 z-20 flex items-end justify-end">
      <div className="bg-white w-full max-w-6xl h-[450px] rounded-t-xl overflow-hidden relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex">
          <img src={option.image} alt={option.title} className="w-1/3 h-auto" />
          <div className="p-4 w-2/3">
            <h2 className="text-3xl font-bold">{option.title}</h2>
            <p className="mt-2">{option.description}</p>
            <p className="mt-5">{option.information}</p>

            <h3 className="text-2xl font-semibold mt-6">Kasus</h3>
            <div className="flex flex-rows gap-2 mt-4">
              {option.caseImages.map((caseImage, index) => (
                <img key={index} src={caseImage} alt={`Kasus ${index + 1}`} className="w-1/5 h-auto rounded" />
              ))}
            </div>
            <div className="flex items-center justify-end mt-9 space-x-2">
              <button className="text-black font-semibold opacity-50 hover:opacity-100">
                Selanjutnya
              </button>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.73341 6.64864L6.08044 7L5.7334 7.35136L0.70277 12.4447L1.53617 13.2885L7.32613 7.42635C7.32615 7.42633 7.32616 7.42632 7.32618 7.4263C7.43678 7.31426 7.5 7.16104 7.5 7C7.5 6.83896 7.43678 6.68574 7.32618 6.5737C7.32616 6.57368 7.32615 6.57367 7.32613 6.57365L1.53617 0.711526L0.70277 1.55531L5.73341 6.64864Z"
                  fill="#909090"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
