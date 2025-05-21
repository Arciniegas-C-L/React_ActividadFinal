import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Animales from './pages/Animales';
import Header from './components/Header';
import Medicamentos from './pages/Medicamentos';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animales" element={<Animales />} />
        <Route path="/medicamentos" element={<Medicamentos />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
