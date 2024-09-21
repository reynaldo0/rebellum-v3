import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Option3d from "./pages/Options";

const Router = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true   }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/options" element={<Option3d onBack={() => window.history.back()} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
