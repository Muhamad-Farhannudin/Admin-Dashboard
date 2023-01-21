import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Daftar from './Pages/Daftar';
import JudulSeminar from './Pages/JudulSeminar';
import AplikasiSeminar from './Pages/AplikasiSeminar';
import Share from './Pages/Share';
import PembuatanSertifikat from './Pages/PembuatanSertifikat';
import index from './components/Modal';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/daftar' element={<Daftar />}></Route>
        <Route path='/judulSeminar' element={<JudulSeminar />}></Route>
        <Route path='/aplikasiSeminar' element={<AplikasiSeminar />}></Route>
        <Route path='/share' element={<Share />}></Route>
        <Route path='/pembuatanSertifikat' element={<PembuatanSertifikat />}></Route>
      </Routes>
    </>
  );
}

export default App;
