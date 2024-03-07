import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HomePageComponent from './components/pages/HomePageComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondPageComponent from './components/pages/SecondPageComponent';
import NavbarComponent from './components/NavbarComponent';
import ThirdPageComponent from './components/pages/ThirdPageComponent';
import FourPageComponent from './components/pages/FourPageComponent';
import FifthPageComponent from './components/pages/FifthPageComponent';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomePageComponent/>}/>
        <Route path='/second' element={<SecondPageComponent/>}/>
        <Route path='/third' element={<ThirdPageComponent/>}/>
        <Route path='/fourth' element={<FourPageComponent/>}/>
        <Route path='/fifth' element={<FifthPageComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
