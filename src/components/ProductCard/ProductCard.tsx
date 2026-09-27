import React from 'react';
import { formatPrice } from '../../utils/formatPrice';
import type { IProduct } from '../../types';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: IProduct;
  onBuy: (product: IProduct) => void;
  onCardClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onBuy,
  onCardClick,
}) => {
  const hasDiscount = product.discount > 0;

  const finalPrice = hasDiscount
    ? product.price * (1 - product.discount / 100)
    : product.price;
  const oldPrice = hasDiscount ? product.price : null;

  return (
    <article
      className={styles.card}
      onClick={onCardClick}
    >
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.topRow}>
          <h3 className={styles.title}>{product.title}</h3>

          <div className={styles.priceBlock}>
            <span className={styles.price}>{formatPrice(finalPrice, { useSpaces: false })}</span>
            {hasDiscount && oldPrice && (
              <span className={styles.discountPrice}>
                {formatPrice(oldPrice, { useSpaces: false })}
              </span>
            )}
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.rating}>
            <span className={styles.star}>★</span>
            <span>{product.rating}</span>
          </div>

          <span
            className={styles.buyLink}
            onClick={(e) => {
              e.stopPropagation();
              onBuy(product);
            }}
            role="button"
            tabIndex={0}
          >
            Купить
          </span>
        </div>
      </div>
    </article>
  );
};
