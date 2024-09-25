import ChatBot from "./chat-bot";
import ChatBox from "./components/ChatBox";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
// import ToUp from "./components/ToUp";
import About from "./pages/About";
import Data from "./pages/Data";
import Dokumentasi from "./pages/Dokumentasi";
import Home from "./pages/Home";
import Kasus from "./pages/Kasus";
import Konsultasi from "./pages/Konsultasi";
import Pengaruh from "./pages/Pengaruh";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Navbar />
      <ChatBot/>
      <Home />
      <About />
      <Kasus />
      <Pengaruh />
      <Data />
      <Konsultasi />
      <Dokumentasi />
      <ChatBox/>
      <Team />

      <Footer />
    </>
  );
}

export default App;
