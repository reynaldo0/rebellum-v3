import ChatBot from "./chat-bot";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Data from "./pages/Data";
import Dokumentasi from "./pages/Dokumentasi";
import Home from "./pages/Home";
import Kasus from "./pages/Kasus";
import Konsultasi from "./pages/Konsultasi";
import Pengaruh from "./pages/Pengaruh";

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
      <ChatBot/>

      <Footer />
    </>
  );
}

export default App;
