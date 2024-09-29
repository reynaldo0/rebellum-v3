import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ teamText = "Team", teamLink = "/team" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation with fade-out effect
  const handleNavigation = () => {
    const container = document.querySelector('.page-container');
    container && container.classList.add('fade-out');
    setTimeout(() => {
      navigate(teamLink);
    }, 500);
  };

  // Determine logo based on current path
  const logoSrc = location.pathname === '/team' ? '/icon/logo-nav.png' : '/icon/logo-footer.png';

  return (
    <div className="relative z-10 w-full max-w-screen-xl flex flex-wrap items-center bg-none justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logoSrc} className="h-auto w-40" alt="Logo" />
      </a>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          onClick={handleNavigation}
          className="text-white bg-yellow/80 hover:bg-secondary/90 font-medium rounded-lg text-sm px-8 py-2 text-center"
        >
          {teamText}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
