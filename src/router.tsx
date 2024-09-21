import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Option3d from "./pages/Options";
import Landing from "./pages/Landing";
import HomeLayout from "./layout/HomeLayout";

const Router = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true   }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/options" element={<Option3d onBack={() => window.history.back()} />} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/home" element={<HomeLayout/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
