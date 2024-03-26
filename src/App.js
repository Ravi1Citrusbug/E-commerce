import './App.css';
import { Route,Routes } from 'react-router-dom';
import Products from './pages/products/products';
import Product from './pages/product/product';
import PageNotFound from './pages/page-not-found/page-not-found';
import Cart from './pages/cart/cart';
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path ="/" element = { <Products></Products>}></Route>
        <Route path ="/product/:productId" element = { <Product></Product>}></Route>
        <Route path ="/cart" element = { <Cart></Cart>}></Route>
        <Route path ="*" element = { <PageNotFound></PageNotFound>}></Route>
   </Routes>
    </div>
  );
}

export default App;
