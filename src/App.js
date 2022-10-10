import './App.css';
import Hero from './components/Hero/Hero';
import Servicios from './assets/Servicios/Servicios';
import Planes from './components/Planes/Planes';
import Utilidades from './components/Utilidades/Utilidades';
import Planesale from './components/Plansale/Plansale';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Clientes from './components/Clientes/Clientes';
function App() {
  return (
    <div className="App">
      <Hero />
      <Servicios />
      <Planes />
      <Utilidades />
      <Planesale />
      <Join />
      <Clientes />
      <Footer />
    </div>
  );
}

export default App;
