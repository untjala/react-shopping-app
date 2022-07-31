import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ProductList from './pages/ProductList';
import Product from './pages/Product'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  return (
    <Router> 
      <Routes>
        <Route
        path="/"
        element={<Home />}
        />
        <Route
        path="/products"
        element={<ProductList />}
        />
        <Route
        path="/product/:id"
        element={<Product />}
        />
        <Route
        path="/signup"
        element={<Signup />}
        />
        <Route
        path="/login"
        element={<Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
