import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import { useCart } from './hooks/useCart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sprites from './components/Sprites';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import CartPage from './pages/CartPage/CartPage';
import styles from './App.module.css';
import { products } from './data/products';
import type { IProduct } from './types';

function App() {
  const cart = useCart();

  const handleBuy = (product: IProduct) => {
    cart.addToCart(product);
  };

  return (
    <CartContext.Provider value={cart}>
      <HashRouter>
        <div className={styles.app}>
          <Sprites />
          <Header />
          <main className={styles.main}>
            <Routes>
              <Route
                path="/"
                element={
                  <CatalogPage
                    products={products}
                    onBuy={handleBuy}
                  />
                }
              />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </CartContext.Provider>
  );
}

export default App;
