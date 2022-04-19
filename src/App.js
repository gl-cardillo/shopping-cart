import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog'

function App() {
  return (
    <BrowserRouter>        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;