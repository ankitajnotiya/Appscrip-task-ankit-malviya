"use client";

import { useState } from "react";
import styles from "./ProductCard.module.css";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  outOfStock?: boolean;
}

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isOutOfStock?: boolean;
}

export default function ProductCard({ id, name, description, price, image, isOutOfStock }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {image.startsWith('http') || image.startsWith('/') ? (
          <img
            src={image}
            alt={name}
            className={styles.image}
            loading="lazy"
          />
        ) : (
          <div className={styles.emojiPlaceholder}>{image}</div>
        )}
        {isOutOfStock && (
          <div className={styles.outOfStock}>OUT OF STOCK</div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.description}>
          <a href="#" className={styles.signInLink}>
            Sign in
          </a>
          {" or Create an account to see pricing"}
        </div>
        <div className={styles.footer}>
          <span className={styles.price}>{price}</span>
          <button
            className={`${styles.heart} ${liked ? styles.liked : ""}`}
            onClick={toggleLike}
            aria-label="Add to favorites"
          >
            {liked ? "❤️" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}