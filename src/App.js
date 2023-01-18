import Navbar from './components/Navbar'
import Home from './Pages/Home'
// import Home2 from './Pages/Home2'
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Daftar from './Pages/Daftar';
import Sidebar from './components/Sidebar';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/daftar' element={<Daftar />}></Route>
        <Route path='/sideBar' element={<Sidebar />}></Route>
      </Routes>
    </>
  );
}

export default App;
