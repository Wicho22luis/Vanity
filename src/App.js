import './App.css';
import { Routes, Route, Outlet } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Header from './Components/Home/Header';
import HomeLayout from './Components/Home/HomeLayout'
import Footer from './Components/Home/Footer'
import ProductLayout from './Components/ProductDetail/ProductInfo'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />} />
          <Route path='product' element={<ProductLayout />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
