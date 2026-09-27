import React, { useState } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import type { IProduct } from "../../types";
import Modal from "../../components/Modal/Modal";
import styles from "./CatalogPage.module.css";

interface CatalogPageProps {
    products: IProduct[];
    onBuy: (product: IProduct) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
    products,
    onBuy,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const headphones = products.filter((p) => p.category === "Наушники");
    const wirelessHeadphones = products.filter(
        (p) => p.category === "Беспроводные наушники",
    );

    return (
        <main className={styles.page}>
            {/* Секция: Наушники */}
            {headphones.length > 0 && (
                <section className={styles.categorySection}>
                    <div className="container">
                        <h2 className={styles.categoryTitle}>Наушники</h2>
                        <div className={styles.grid}>
                            {headphones.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onBuy={onBuy}
                                    onCardClick={() => setIsModalOpen(true)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Секция: Беспроводные наушники */}
            {wirelessHeadphones.length > 0 && (
                <section className={styles.categorySection}>
                    <div className="container">
                        <h2 className={styles.categoryTitle}>
                            Беспроводные наушники
                        </h2>
                        <div className={styles.grid}>
                            {wirelessHeadphones.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onBuy={onBuy}
                                    onCardClick={() => setIsModalOpen(true)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
};
