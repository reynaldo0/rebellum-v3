import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Option3d from "./pages/Options";
import Landing from "./pages/Landing";
import HomeLayout from "./layout/HomeLayout";
import Team from "./pages/Team";

const Router = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true   }}>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/options" element={<Option3d onBack={() => window.history.back()} />} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/" element={<HomeLayout/>} />
        <Route path="/team" element={<Team/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
