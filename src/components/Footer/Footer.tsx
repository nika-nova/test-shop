import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import styles from './Footer.module.css';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.flexRow}>
            <Link to="/" className={styles.logo}>QPICK</Link>

        {/* Два столбца ссылок */}
        <div className={styles.columns}>
          {/* Столбец 1 */}
          <div className={styles.column}>
            <button
              type="button"
              className={styles.link}
              onClick={openModal}
            >
              Избранное
            </button>
            <Link to="/cart" className={styles.link}>
              Корзина
            </Link>
            <button
              type="button"
              className={styles.link}
              onClick={openModal}
            >
              Контакты
            </button>
          </div>

          {/* Столбец 2 */}
          <div className={styles.column}>
            <button
              type="button"
              className={styles.link}
              onClick={openModal}
            >
              Условия сервиса
            </button>

            {/* Блок языка */}
            <div className={styles.langBlock}>
              <svg className={`${styles.icon} ${styles.langIcon}`}>
                <use href="#lang" />
              </svg>
              <div className={styles.langs}>
                <button
                  type="button"
                  className={styles.langBtn}
                  onClick={openModal}
                >
                  Каз
                </button>
                <button
                  type="button"
                  className={`${styles.langBtn} ${styles.langActive}`}
                >
                  Рус
                </button>
                <button
                  type="button"
                  className={styles.langBtn}
                  onClick={openModal}
                >
                  Eng
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Соцсети справа */}
        <div className={styles.social}>
          <a
            href="https://vk.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="VK"
          >
            <svg className={`${styles.icon} ${styles.socialIcon} ${styles.vkIcon}`}>
              <use href="#vk" />
            </svg>
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Telegram"
          >
            <svg className={`${styles.icon} ${styles.socialIcon}`}>
              <use href="#telegram" />
            </svg>
          </a>
          <a
            href="https://web.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="WhatsApp"
          >
            <svg className={`${styles.icon} ${styles.socialIcon}`}>
              <use href="#whatsapp" />
            </svg>
          </a>
        </div>
          </div>
        </div>
        
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer;
