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


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<GraphicRes/>} path='/graphicres' />
          <Route element={<DataEntry/>} path='/dataentry' />
          <Route element={<AboutUs/>} path='/aboutus' />
          <Route element={<ContactUs/>} path='/contactus' />
          <Route element={<Qna/>} path='/qna' />
          <Route element={<SchoolLogin/>} path='/schoollogin' />

        </Routes>
    </Router>
  );
}

export default App;
