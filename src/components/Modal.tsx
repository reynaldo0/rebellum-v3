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
  const caseImages = [
    'kasus.png', // Ganti dengan URL gambar yang sesuai
    'kasus.png',
    'kasus.png',
    'kasus.png',
    'kasus.png',
  ];

  return (
    <div className="absolute inset-0 bg-black/60 z-20 flex items-end justify-end">
      <div className="bg-white w-full max-w-6xl h-[450px] rounded-lg overflow-hidden relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex">
          <img src={image} alt={title} className="w-1/3 h-auto" />
          <div className="p-4 w-2/3">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="mt-2">{description}</p>
            <p className="mt-5">{information}</p>
            <button
              className="learn-more relative inline-block h-auto w-48 cursor-pointer border-none bg-transparent align-middle font-radioCasnada text-inherit outline-none scale-75 -left-6"
              onClick={() => (window.location.href = "#temuanUmum")}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text translate-x-2">Selengkapnya</span>
            </button>
            <h3 className="text-2xl font-semibold mt-6">Kasus</h3>
            <div className="flex flex-rows gap-2 mt-4">
              {caseImages.map((caseImage, index) => (
                <img key={index} src={caseImage} alt={`Kasus ${index + 1}`} className="w-1/5 h-auto rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
