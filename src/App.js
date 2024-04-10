import './App.css';
import { useNavigate,createSearchParams } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import { useCart } from './context/cart';
import Footer from './components/footer/footer';
import AppRoute from './route';


function App() {
  const navigate = useNavigate();
  const onSearch = (searchQuery)=>{
    navigate(`/?${createSearchParams({q: searchQuery})}`)
  }
  const { cartItemCount }  = useCart()
  return (
    <div className="App">
      <Navbar onSearch={onSearch} cartItemCount={cartItemCount()}></Navbar>
      <AppRoute></AppRoute>
      <Footer></Footer>
    </div>
  );
}

export default App;
