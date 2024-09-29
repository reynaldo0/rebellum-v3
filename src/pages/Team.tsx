import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Github, Instagram, Linkedin } from 'lucide-react'; // Import icons from lucide-react
import Navbar from "../components/HomeNav";

const Team = () => {

  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url(/background/golongan.png)] page-container">
      <Navbar teamText="Kembali" teamLink="/"/>

      <div className="px-10 md:px-40 py-12">
        <h1 className="text-center text-3xl font-poppins font-bold mb-8 text-primary">TIM <span className="text-yellow">KAMI</span></h1>
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          spaceBetween={16}
          className="cursor-grab"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16, 
            },
          }}
        >
          {/* Salman */}
          <SwiperSlide>
            <div className="group transition-all bg-white p-4 rounded-xl shadow border border-gray-200 text-center ease-in-out hover:border-2 hover:border-yellow hover:bg-yellow hover:text-white flex flex-col items-center h-full">
              <img
                className="w-52 h-52 mx-auto rounded-full object-cover border-4 border-gray-200 ease-in-out group-hover:border-white"
                src="/team/salman.jpg"
                alt="Muhammad Salman Alfarisi"
              />
              <h3 className="text-xl font-semibold mt-4 ease-in-out group-hover:text-lg">Muhammad Salman Alfarisi</h3>
              <p className="text-gray-600 text-sm ease-in-out group-hover:text-white">Leader, Data Analyst</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/avlfarizi" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-salman-al-farisi-14a517324/" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Linkedin size={32} />
                </a>
                <a href="https://www.instagram.com/avlfarizi/" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Instagram size={32} />
                </a>
              </div>
            </div>
          </SwiperSlide>
          {/* Aldo */}
          <SwiperSlide>
            <div className="group transition-all bg-white p-4 rounded-xl shadow border border-gray-200 text-center ease-in-out hover:border-2 hover:border-yellow hover:bg-yellow hover:text-white flex flex-col items-center h-full">
              <img
                className="w-52 h-52 mx-auto rounded-full object-cover border-4 border-gray-200 ease-in-out group-hover:border-white"
                src="/team/aldo.jpg"
                alt="Reynaldo Yusellino"
              />
              <h3 className="text-xl font-semibold mt-4 ease-in-out group-hover:text-lg">Reynaldo Yusellino</h3>
              <p className="text-gray-600 text-sm ease-in-out group-hover:text-white">Programmer</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/reynaldo0" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/reynaldo-yusellino-564724270" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Linkedin size={32} />
                </a>
                <a href="https://www.instagram.com/rynldysllino/" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Instagram size={32} />
                </a>
              </div>
            </div>
          </SwiperSlide>
          {/* Nazla */}
          <SwiperSlide>
            <div className="group transition-all bg-white p-4 rounded-xl shadow border border-gray-200 text-center ease-in-out hover:border-2 hover:border-yellow hover:bg-yellow hover:text-white flex flex-col items-center h-full">
              <img
                className="w-52 h-52 mx-auto rounded-full object-cover border-4 border-gray-200 ease-in-out group-hover:border-white"
                src="/team/nazla.jpg"
                alt="Nazla Rahma"
              />
              <h3 className="text-xl font-semibold mt-4 ease-in-out group-hover:text-lg">Nazla Rahma</h3>
              <p className="text-gray-600 text-sm ease-in-out group-hover:text-white">UI/UX Desainer</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/zlaraa" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/nazla-rahma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Linkedin size={32} />
                </a>
                <a href="https://www.instagram.com/nazlarhm96/?hl=id" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Instagram size={32} />
                </a>
              </div>
            </div>
          </SwiperSlide>
          {/* Rama */}
          <SwiperSlide>
            <div className="group transition-all bg-white p-4 rounded-xl shadow border border-gray-200 text-center ease-in-out hover:border-2 hover:border-yellow hover:bg-yellow hover:text-white flex flex-col items-center h-full">
              <img
                className="w-52 h-52 mx-auto rounded-full object-cover border-4 border-gray-200 ease-in-out group-hover:border-white"
                src="/team/rama.jpg"
                alt="Ramadina Almusthazam"
              />
              <h3 className="text-xl font-semibold mt-4 ease-in-out group-hover:text-lg">Ramadina Almusthazam</h3>
              <p className="text-gray-600 text-sm ease-in-out group-hover:text-white">Programmer</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="http://github.com/ramarfx" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Github size={32} />
                </a>
                <a href="https://id.linkedin.com/in/ramadina-al-muzthazam-5028482a2" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Linkedin size={32} />
                </a>
                <a href="http://instagram.com/ramtxh" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Instagram size={32} />
                </a>
              </div>
            </div>
          </SwiperSlide>
          {/* Akmal */}
          <SwiperSlide>
            <div className="group transition-all bg-white p-4 rounded-xl shadow border border-gray-200 text-center ease-in-out hover:border-2 hover:border-yellow hover:bg-yellow hover:text-white flex flex-col items-center h-full">
              <img
                className="w-52 h-52 mx-auto rounded-full object-cover border-4 border-gray-200 ease-in-out group-hover:border-white"
                src="/team/alifian.png"
                alt="Alifian Abdiel Rafif"
              />
              <h3 className="text-xl font-semibold mt-4 ease-in-out group-hover:text-lg">Alifian Abdiel Rafif</h3>
              <p className="text-gray-600 text-sm ease-in-out group-hover:text-white">Programmer, 3D illustrator</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/feblcsack" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/alifian-abdiel-492386328/" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Linkedin size={32} />
                </a>
                <a href="https://instagram.com/Feblcsack" className="text-yellow ease-in-out group-hover:text-white text-4xl p-5">
                  <Instagram size={32} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
