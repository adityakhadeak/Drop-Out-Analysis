import './App.css';
import DataEntry from './Component/DataEntry';
import Header from './Component/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import GraphicRes from './Component/GraphicRes';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import Qna from './Component/Qna';
import SchoolLogin from './Component/SchoolLogin';
import SchoolRegister from './Component/SchoolRegister';
import StepContext from './Component/MultiStepForm/StepContext';


function App() {
  return (
    <Router>
      <StepContext>
      <Header/>
      <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<GraphicRes/>} path='/graphicres' />
          <Route element={<DataEntry/>} path='/dataentry' />
          <Route element={<AboutUs/>} path='/aboutus' />
          <Route element={<ContactUs/>} path='/contactus' />
          <Route element={<Qna/>} path='/qna' />
          <Route element={<SchoolLogin/>} path='/schoollogin' />
          <Route element={<SchoolRegister/>} path='/schoolregister' />

        </Routes>
        </StepContext>
    </Router>
  );
}

export default App;
