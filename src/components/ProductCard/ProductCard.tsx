"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isOutOfStock?: boolean;
  rating?: number;
}

export default function ProductCard({ id, name, description, price, image, isOutOfStock, rating }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  // Determine image dimensions based on whether it's a local or remote image
  const isLocalImage = image.startsWith('/');
  const imageSrc = isLocalImage ? image : image;
  const imageWidth = 300;
  const imageHeight = 300;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {isLocalImage ? (
          <Image
            src={imageSrc}
            alt={name}
            width={imageWidth}
            height={imageHeight}
            className={styles.image}
            loading="lazy"
          />
        ) : (
          <img
            src={imageSrc}
            alt={name}
            className={styles.image}
            loading="lazy"
            width={imageWidth}
            height={imageHeight}
          />
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