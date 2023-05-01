import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AcaoAventuraPage from "./pages/AcaoAventuraPage";
import EsportePage from "./pages/EsportePage";
import LutaPage from "./pages/LutaPage";
import FPSPage from "./pages/FPSPage";
import RPGPage from "./pages/RPGPage";
import SimulacaoPage from "./pages/SimulacaoPage";
import TerrorPage from "./pages/TerrorPage";
import CorridaPage from "./pages/CorridaPage";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/acao-aventura" element={<AcaoAventuraPage />} />
          <Route path="/esporte" element={<EsportePage />} />
          <Route path="/luta" element={<LutaPage />} />
          <Route path="/fps" element={<FPSPage />} />
          <Route path="/rpg" element={<RPGPage />} />
          <Route path="/corrida" element={<CorridaPage />} />
          <Route path="/simulacao" element={<SimulacaoPage />} />
          <Route path="/terror" element={<TerrorPage />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};