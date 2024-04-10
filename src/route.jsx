import React from 'react'
import { Route,Routes} from 'react-router-dom';
import Products from './pages/products/products';
import Product from './pages/products/product/product';
import PageNotFound from './pages/page-not-found/page-not-found';
import { Cart } from './pages/cart/cart';
import Buynow from './components/buynow/buynow';

function AppRoute() {
  return (
    <Routes>
        <Route path ="/" element = { <Products></Products> }></Route>
        <Route path ="/product/:productId" element = { <Product></Product>}></Route>
        <Route path ="/cart" element = { <Cart></Cart>}></Route>
        <Route path ="/buynow" element = { <Buynow></Buynow>}></Route>
        <Route path ="*" element = { <PageNotFound></PageNotFound>}></Route>       
    </Routes>
)}

export default AppRoute;
