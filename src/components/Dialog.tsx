import { useState, useEffect, useRef } from "react";

const Dialog = () => {
  const dialogs = [
    {
      text: "Halo Selamat datang di website Rebellum",
      audio: "/audio/datang.mp3",
      mascot: "/audio/datang.mp4",
    },
    {
      text: "Jelajahi 6 kategori kenakalan remaja beserta dengan solusinya",
      audio: "/audio/silahkan.mp3",
      mascot: "/audio/silahkan.mp4", // Image mascot
    },
  ];

  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
  const [isDialogVisible, setIsDialogVisible] = useState(true);
  const mediaRef = useRef<HTMLMediaElement | HTMLImageElement>(null);

  useEffect(() => {
    if (isDialogVisible) {
      const audio = new Audio(dialogs[currentDialogIndex].audio);
      audio.play();
      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [currentDialogIndex, isDialogVisible]);

  const handleNext = () => {
    if (currentDialogIndex < dialogs.length - 1) {
      setCurrentDialogIndex(currentDialogIndex + 1);
    } else {
      setIsDialogVisible(false);
    }
  };

  const handleSkip = () => {
    setIsDialogVisible(false);
  };

  const handleVideoEnd = () => {
    // Optional: Handle any logic when video ends, e.g., automatically move to next dialog
  };

  const currentMedia = dialogs[currentDialogIndex].mascot;
  const isVideo = currentMedia.endsWith(".mp4"); // Check if it's a video file

  return (
    isDialogVisible && (
      <div className="absolute inset-0 bg-black/60 z-[99999] backdrop-blur-md w-full flex items-center">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
            {isVideo ? (
              <video
                src={currentMedia}
                className="w-[150px] md:w-[300px] h-auto"
                autoPlay
                muted
                onEnded={handleVideoEnd} // Trigger when video ends
                ref={mediaRef as React.RefObject<HTMLVideoElement>}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={currentMedia}
                alt="mascot"
                className="w-[150px] md:w-[300px] h-auto"
                ref={mediaRef as React.RefObject<HTMLImageElement>}
              />
            )}

            <div className="flex flex-col w-full gap-4">
              <div className="bg-white w-full md:w-[90%] max-w-[800px] min-h-[125px] rounded-md p-4 text-base font-semibold">
                {dialogs[currentDialogIndex].text}
              </div>
              <div className="flex justify-end md:justify-start gap-4">
                <button
                  onClick={handleSkip}
                  className="text-white bg-yellow/50 hover:bg-yellow/90 font-medium rounded-lg text-sm px-8 py-2 text-center"
                >
                  Lewati
                </button>
                <button
                  onClick={handleNext}
                  className="text-white bg-yellow hover:bg-yellow/90 font-medium rounded-lg text-sm px-8 py-2 text-center"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Dialog;
