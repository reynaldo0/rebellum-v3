import { useState } from 'react';
import { useStateContext } from '../context/stateContext';
import Hero from '../pages/Hero';
import Option3d from '../pages/Options';

const HomeLayout = () => {
  const { open, setOpen } = useStateContext();
  const [transition, setTransition] = useState('fade-in');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleBackToHome = () => {
    setTransition('fade-out');
    setTimeout(() => {
      setOpen(false);
      setTransition('fade-in');
    }, 500); 
  };

  

  return (
    <>
      {open ? (
        <div className={`${transition} ${showWelcome ? 'blur' : ''}`}>
          <Option3d onBack={handleBackToHome} />
        </div>
      ) : (
        <div className={transition}>
          <Hero />
        </div>
      )}

    </>
  );
};

export default HomeLayout;
