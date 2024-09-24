
import './App.css';
import './index.css';
import Header from './components/Header'
import MainBanner  from './components/MainBanner';
import Contato from './components/Contato';
import SubBanner  from './components/SubBanner';
import SubBanner2 from './components/SubBanner2';
import Cards from './components/Cards'
import Footer from './components/Footer'
import Comunidades from './components/Comunidades'
import TradutorLivre from './components/TradutorLive'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Individuos from './components/Individuos';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={
          <>
            <MainBanner/>
            <SubBanner/>
            <Cards/>
            <SubBanner2/>
          </>
          } />
        <Route path="/contato" element={<Contato />}/>
        <Route path="/comunidades" element={<Comunidades/>}/>
        <Route path="/individuos" element={<Individuos/>}></Route>
        <Route path='/tradutor-livre' element={<TradutorLivre/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
