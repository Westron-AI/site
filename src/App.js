
import './App.css';
import Header from './components/Header'
import MainBanner  from './components/MainBanner';
import Cards from './components/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainBanner></MainBanner>
      <Cards></Cards>
    </div>
  );
}

export default App;
