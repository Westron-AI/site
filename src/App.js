import './App.css';
import './index.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Contato from './components/Contato';
import SubBanner2 from './components/SubBanner2';
import Cards from './components/Cards';
import Footer from './components/Footer';
import TradutorLivre from './components/TradutorLive';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Solucoes from './components/Solucoes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainBanner />
                  <Cards />
                  <SubBanner2 />
                </>
              }
            />
            <Route path="/contato" element={<Contato />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/tradutor-livre" element={<TradutorLivre />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
