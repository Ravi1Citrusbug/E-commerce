import './App.css';
import { Route,Routes,useNavigate,createSearchParams } from 'react-router-dom';
import Products from './pages/products/products';
import Product from './pages/products/product/product';
import PageNotFound from './pages/page-not-found/page-not-found';
import { Cart } from './pages/cart/cart';
import Navbar from './components/navbar/navbar';
import { useCart } from './context/cart';
import Footer from './components/footer/footer';
import Buynow from './components/buynow/buynow';




function App() {
  const navigate = useNavigate();
  const onSearch = (searchQuery)=>{
    navigate(`/?${createSearchParams({q: searchQuery})}`)
  }
  const { cartItemCount }  = useCart()
  return (
    <div className="App">
      <Navbar onSearch={onSearch} cartItemCount={cartItemCount()}></Navbar>
      <Routes>
        <Route path ="/" element = { <Products></Products> }></Route>
        <Route path ="/product/:productId" element = { <Product></Product>}></Route>
        <Route path ="/cart" element = { <Cart></Cart>}></Route>
        <Route path ="/buynow" element = { <Buynow></Buynow>}></Route>
        <Route path ="*" element = { <PageNotFound></PageNotFound>}></Route>       
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
