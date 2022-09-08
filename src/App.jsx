import './App.css'
import Navbar from './Components/NavBar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Footer from './Components/Footer/Footer';
import CartContextProvider from './Components/Context';
import { Cart } from './Components/Cart';
import Checkout from './Components/checkout';


function App() {
  

  return (
    
<>

<Navbar/>
<CartContextProvider>
<BrowserRouter>
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
    <Route path="/details/:id" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout/>} />
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
<Footer/>

</>
  )
}

export default App
