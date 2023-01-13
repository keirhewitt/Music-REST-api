import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import MainPage from "pages/mainPage";
import RegisterPage from "pages/registerPage";
import LoginPage from "pages/loginPage";
import Navbar from "pages/nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
