import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Modal from '../Modal/Modal';
import styles from './Header.module.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useContext(CartContext);
  const cartCount = cart?.totalItems ?? 0;

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.flexRow}>
            <Link to="/" className={styles.logo}>QPICK</Link>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Избранное"
              onClick={() => setIsModalOpen(true)}
            >
              <svg className={`${styles.icon} ${styles.likeIcon}`}>
                <use href="#like" />
              </svg>
            </button>

            <Link to="/cart" className={styles.iconBtn} aria-label="Корзина">
              <svg className={`${styles.icon} ${styles.cartIcon}`}>
                <use href="#cart" />
              </svg>
              {cartCount > 0 && (
                <span className={styles.cartBadge}>{cartCount}</span>
              )}
            </Link>
          </div>
          </div>
          
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
