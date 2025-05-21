import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Alimentos from './pages/Alimentos';
import Citas from './pages/Citas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/citas" element={<Citas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
