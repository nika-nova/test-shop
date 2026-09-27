import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import { formatPrice } from '../../utils/formatPrice';
import Modal from '../../components/Modal/Modal';
import styles from './CartPage.module.css';

export default function CartPage() {
  const { items, totalPrice } = useCartContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <h2 className={styles.emptyTitle}>Корзина пуста</h2>
        <p className={styles.emptyText}>Самое время что-нибудь купить!</p>
        <Link to="/" className={styles.backLink}>
          ← Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <div className={styles.itemsColumn}>
        <div className={styles.header}>
          <h1 className={styles.title}>Корзина</h1>
        </div>

        <ul className={styles.list}>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      </div>

      <div className={styles.summaryColumn}>
        <div className={styles.summary}>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>ИТОГО</span>
            <span className={styles.summaryTotal}>{formatPrice(totalPrice, { useSpaces: true, symbolFirst: true })}</span>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.checkoutBtn}
              onClick={() => setIsModalOpen(true)}
            >
              Перейти к оформлению
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
