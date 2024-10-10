import { useState } from 'react';
import { useStateContext } from '../context/stateContext';
import Option3d from '../pages/Options';
import Landing from '../pages/Landing';

const HomeLayout = () => {
  const { open, setOpen } = useStateContext();
  const [transition, setTransition] = useState('fade-in');
  const [showWelcome] = useState(false);

  const handleBackToHome = () => {
    setTransition('fade-out');
    setTimeout(() => {
      setOpen(false);
      setTransition('fade-in');
    });
  };



  return (
    <>
      {open ? (
        <div className={`${transition} ${showWelcome ? 'blur' : ''}`}>
          <Option3d onBack={handleBackToHome} />
        </div>
      ) : (
        <div className={transition}>
          <Landing  />
        </div>
      )}

    </>
  );
};

export default HomeLayout;
