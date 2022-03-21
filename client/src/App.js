import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Products from './components/products/Products';
import Product from './components/products/Product';
import { Header } from './components/ui/Header';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('http://localhost:5000/api/products');

      setProducts(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="/">
            <Products isLoading={isLoading} products={products} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
