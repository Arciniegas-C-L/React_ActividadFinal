import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
