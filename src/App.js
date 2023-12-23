import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Record from './pages/Record';
import SkinG from './pages/SkinGallery';
import Tactic from './pages/Tactic';
import LOLDB from './pages/LOLDB';
import Champion from './pages/Champion';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Record" element={<Record />} />
        <Route path="/SkinGallery" element={<SkinG />} />
        <Route path="/Champion" element={<Champion />} />
        <Route path="/Tactic" element={<Tactic />} />
        <Route path="/LOLDB" element={<LOLDB />} />
      </Route>
    </Routes>
  );
}

export default App;
