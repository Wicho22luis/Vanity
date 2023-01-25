import './App.css';
import Header from './Components/Home/Header';
import Slider from './Components/Home/MainSlider';
import InfoCard from './Components/Home/InfoCard';
import Row from 'react-bootstrap/Row';
import TabLayout from './Components/Home/Tabs';
import ProductCards from './Components/Home/ProductCard'
import InfoBanner from './Components/Home/InfoBanner'
import Footer from './Components/Home/Footer'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Row className='notificationBar'>
        <p className='notificationText'>DISTRIBUCIÓN LOCAL DE JOYERÍA DE PLATA Y ORO POR ENCARGO</p>
      </Row>
      <InfoCard></InfoCard>
      <h2 className='text-center textPetrona'>Productos Recientes</h2>
      <TabLayout></TabLayout>
      <ProductCards></ProductCards>
      <InfoBanner></InfoBanner>
      <h2 className='text-center textPetrona'>Lo más comprado</h2>
      <ProductCards></ProductCards>
      <Footer></Footer>
    </div>
  );
}

export default App;
