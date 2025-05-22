import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Alimentos from './pages/Alimentos';
import Citas from './pages/Citas';
import Animales from './pages/Animales';
import Medicamentos from './pages/Medicamentos';
import Footer from './components/Footer'
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animales" element={<Animales />} />
        <Route path="/medicamentos" element={<Medicamentos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/citas" element={<Citas />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
