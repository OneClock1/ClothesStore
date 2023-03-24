import { useState } from 'react';
import './App.css';
import Header from './components/shared/Header';
import Productlist from './components/Productlist/Productlist';
import './Background.scss';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct'

function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 982},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 763},
    {id: 5, title: 'Product 5', price: 389}
  ]);
  

  const deleteProduct = (productId) => {
    const newProduct = products.filter(product => product.id !== productId);
    setProducts(newProduct);
  }

  return (
    
    <div className="App">
      <div className= "background">
        <Header/>
       
       <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path='/about' element={<About/>}></Route>   
        <Route path='/shop' element={<Shop/>}></Route>  
        <Route path='/add' element={<AddProduct/>}></Route>  
        <Route path='/edit/:id' element={<EditProduct/>}></Route> 
        <Route path='/products' element={<Productlist/>}></Route>     
       </Routes>
        {/* <Productlist products={products} deleteProduct={ deleteProduct } /> */}
         
      
    </div>
    </div>
   
  );
}

export default App;
