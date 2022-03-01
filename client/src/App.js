import './App.css';
import Cars from './Components/Cars/Cars';
import Footer from './Container/Footer/Footer';
import Header from './Container/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
       <Cars/>
      <Footer/> 
    </div>
  );
}

export default App;
