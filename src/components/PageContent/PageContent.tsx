"use client";

import { useState } from 'react';
import Filter from '@/components/Filter/Filter';
import ProductList from '@/components/ProductList/ProductList';
import styles from './PageContent.module.css';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isOutOfStock?: boolean;
}

interface PageContentProps {
  products: Product[];
}

export default function PageContent({ products }: PageContentProps) {
  const [showFilter, setShowFilter] = useState(true);

  return (
    <div className={`${styles.container} ${!showFilter ? styles.containerFull : ''}`}>
      {showFilter && <Filter />}
      
      <section className={styles.productsSection}>
        <div className={styles.productsHeader}>
          <div className={styles.productsInfo}>
            <span className={styles.itemCount}>{products.length} ITEMS</span>
            <button 
              className={styles.filterToggle}
              onClick={() => setShowFilter(!showFilter)}
            >
              {showFilter ? '< HIDE FILTER' : '< SHOW FILTER'}
            </button>
          </div>
          <div className={styles.sortSelector}>
            <select className={styles.sortSelect} defaultValue="recommended">
              <option value="recommended">RECOMMENDED</option>
              <option value="newest">NEWEST FIRST</option>
              <option value="popular">POPULAR</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
            </select>
          </div>
        </div>

        <ProductList products={products} />
      </section>
    </div>
  );
}