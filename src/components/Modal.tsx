import React from "react";
import { options } from "../docs/optionsData"; // Import options
import { Link } from "react-router-dom";
import { LinkPreview } from "../components/ui/link-preview"; // Import LinkPreview
import { Canvas } from "@react-three/fiber"; // Import Canvas dari react-three-fiber
import { Environment, OrbitControls } from "@react-three/drei"; // Import useGLTF untuk memuat model 3D

interface ModalProps {
  optionIndex: number; // Indeks opsi yang dipilih
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ optionIndex, onClose }) => {
  const option = options[optionIndex]; // Ambil opsi berdasarkan indeks

  return (
    <div className="absolute inset-0 bg-black/60 z-[9999] flex items-end justify-center">
      <div
        className="w-full max-w-6xl h-[450px] rounded-xl overflow-hidden relative mb-20"
        style={{ backgroundColor: option.backgroundColor }} // Gunakan warna latar belakang dari opsi
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-white/20">
          <svg
            width="40"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex text-white">
          {/* Render model 3D */}
          <div className="md:w-1/3 h-auto hidden md:block z-[9999999]">
            <Canvas>
              <OrbitControls
                enableZoom={false} // Menonaktifkan zoom
                maxPolarAngle={Math.PI / 2} // Batasi rotasi di sumbu X (maksimum 90 derajat)
                minPolarAngle={0} // Batasi rotasi di sumbu X (minimum 0 derajat)
                enablePan={false} // Menonaktifkan pan
              />

              <directionalLight position={[-10, -30, 20]} intensity={5} />
              <directionalLight position={[-5, 12, -40]} intensity={5} />
              <ambientLight intensity={0.5} />
              <Environment preset="sunset" />

              {option.model}
            </Canvas>
          </div>
          <div className="p-4 md:w-2/3 md:px-10 pt-5">
            <h2 className="text-2xl md:text-3xl font-bold">{option.title}</h2>

            {/* Gunakan LinkPreview untuk bidang informasi */}
            <p className="mt-5 md:pr-10">
              <LinkPreview
                url={String(option.informationLink)}
                className="font-normal text-sm text-white">
                {option.information}
              </LinkPreview>
            </p>

            <h3 className="text-2xl font-semibold mt-6">Kasus</h3>
            <div className="flex flex-rows gap-2 mt-4">
              {option.caseImages.map((caseImage, index) => (
                <img
                  key={index}
                  src={caseImage}
                  alt={`Kasus ${index + 1}`}
                  className="w-1/5 h-auto rounded"
                />
              ))}
            </div>
            <div className="flex absolute items-center justify-end bottom-2 md:bottom-5 right-5 space-x-2 hover:opacity-80">
              <Link
                to="/home"
                className="text-white font-semibold opacity-100 hover:opacity-50">
                Selanjutnya
              </Link>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.73341 6.64864L6.08044 7L5.7334 7.35136L0.70277 12.4447L1.53617 13.2885L7.32613 7.42635C7.32615 7.42633 7.32616 7.42632 7.32618 7.4263C7.43678 7.31426 7.5 7.16104 7.5 7C7.5 6.83896 7.43678 6.68574 7.32618 6.5737C7.32616 6.57368 7.32615 6.57367 7.32613 6.57365L1.53617 0.711526L0.70277 1.55531L5.73341 6.64864Z"
                  stroke="white"
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
