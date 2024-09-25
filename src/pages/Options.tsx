import { useEffect, useRef, useState } from "react";
import ModelCanvas from "../components/ModelCanvas";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Dialog from "../components/Dialog";
import Modal from "../components/Modal";
import "swiper/css";
import Celurit from "../components/models/Celurit";
import { options } from "../docs/optionsData";
import { Link } from "react-router-dom";

const Options = ({ onBack }: { onBack: () => void }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [cloudOffset, setCloudOffset] = useState(0);
  const isMobile = window.innerWidth <= 768;
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    setTimeout(() => {
      setShowDialog(true);
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      const screenWidth = window.innerWidth;
      const mouseX = e.clientX;
      const offset = (mouseX / screenWidth - 0.5) * 100;
      setCloudOffset(offset);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cloud1Style: React.CSSProperties = {
    transform: `translateX(${cloudOffset * (isMobile ? 0.5 : 0.8)}px)`,
    position: 'absolute',
    top: isMobile ? '0' : '-58px',
    right: isMobile ? '-28px' : '-128px',
    zIndex: 1,
    transition: 'transform 0.5s ease-out',
  };

  const cloud2Style: React.CSSProperties = {
    transform: `translateX(${cloudOffset * (isMobile ? 0.8 : 1.2)}px)`,
    position: 'absolute',
    top: isMobile ? '0' : '-58px',
    left: isMobile ? '-28px' : '-208px',
    zIndex: 1,
    transition: 'transform 1s ease-out',
  };


  const handleModelCanvasClick = (index: number) => {
    setSelectedOptionIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOptionIndex(null);
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url(/background/golongan.png)] overflow-hidden page-container">
      {showDialog && <Dialog />}

      {/* Awan-awan */}
      <img
        src="/bg/awan-opsi-1.webp"
        alt="awan biruu"
        className="cloud cloud-slide-left"
        style={cloud1Style}
      />

      <img
        src="/bg/awan-opsi-2.webp"
        alt="awan biruu lagi"
        className="cloud cloud-slide-right"
        style={cloud2Style}
      />

      {showModal && selectedOptionIndex !== null && (
        <Modal
          optionIndex={selectedOptionIndex}
          onClose={closeModal}
        />
      )}

      <div className="relative z-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 bg-transparent">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/icon/logo-nav.png" className="h-auto w-40" alt="Logo" />
        </a>
      </div>

      <div className="relative z-10 text-center bg-transparent">
        <h1 className="text-4xl font-bold text-secondary mb-2 pt-10 md:py-0">
          Perilaku <span className="text-yellow">Buruk</span>
        </h1>
        <h2 className="text-xl text-primary">Silahkan Pilih Kasus Kenakalan Remaja</h2>
      </div>

      <div className="relative z-10 px-16 bg-transparent mx-auto max-w-screen-xl flex">
        <Swiper
          ref={swiperRef}
          effect="coverflow"
          spaceBetween={16}
          coverflowEffect={{ slideShadows: false, depth: 0, rotate: 0 }}
          slidesPerView={isMobile ? 1 : 3.3}
          centeredSlides={false}
          className="w-full flex items-end pt-10 pb-4 px-2 h-[65vh]"
        >
          {options.map((option, index) => (
            <SwiperSlide key={index} className="flex justify-center items-end">
              <ModelCanvas
                onClick={() => handleModelCanvasClick(index)}
                model={<Celurit isHovered />}
                title={option.title}
                description={option.description}
                backgroundColor={option.backgroundColor}
                width="289px"
                height={option.height}
                titleColor="#A3ECFF"
                descriptionColor="#FFF"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container">
        <div className="flex justify-between w-full pt-5 items-center">
          <div className="xl:px-14 left-0 transform gap-3 flex items-center">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.26659 6.64864L1.91956 7L2.2666 7.35136L7.29723 12.4447L6.46383 13.2885L0.673872 7.42635C0.673854 7.42633 0.673836 7.42632 0.673819 7.4263C0.563221 7.31426 0.5 7.16104 0.5 7C0.5 6.83896 0.563221 6.68574 0.673819 6.5737C0.673836 6.57368 0.673854 6.57367 0.673872 6.57365L6.46383 0.711526L7.29723 1.55531L2.26659 6.64864Z"
                fill="#909090"
                stroke="black"
              />
            </svg>

            <button
              onClick={onBack}
              className="text-black font-semibold opacity-50 hover:opacity-100">
              Kembali
            </button>
          </div>

          <div className="flex gap-3 xl:absolute  md:right-[590px] 2xl:right-[650px]">
            <button
              onClick={handlePrev}
              className="transform bg-transparent border-yellow border-2 text-white p-2 rounded-full button-animate-prev scale-90">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.5001 12.9999H7.91406L12.4141 17.4999L11.0001 18.9139L4.08606 11.9999L11.0001 5.08594L12.4141 6.49994L7.91406 10.9999H19.5001V12.9999Z"
                  fill="#FF9900"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="transform bg-transparent border-yellow border-2 text-white p-2 rounded-full button-animate-next scale-90">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.50001 12.9999H16.086L11.586 17.4999L13.0001 18.9139L19.9141 11.9999L13.0001 5.08594L11.586 6.49994L16.086 10.9999H4.50001V12.9999Z"
                  fill="#FF9900"
                />
              </svg>
            </button>
          </div>
          <div className="xl:px-14 left-0 transform gap-3 flex items-center">
            <Link
              to="/home"
              className="text-black font-semibold opacity-50 hover:opacity-100 flex items-center space-x-2">
              <span>Selengkapnya</span>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.73341 7.35136L6.08044 7L5.7334 6.64864L0.702771 1.55531L1.53617 0.711526L7.32613 6.57365C7.32615 6.57367 7.32617 6.57368 7.32618 6.5737C7.43678 6.68574 7.5 6.83896 7.5 7C7.5 7.16104 7.43678 7.31426 7.32618 7.4263C7.32617 7.42632 7.32615 7.42633 7.32613 7.42635L1.53617 13.2885L0.702771 12.4447L5.73341 7.35136Z"
                  fill="#909090"
                  stroke="black"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Options;
