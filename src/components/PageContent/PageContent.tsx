"use client";

import { useState, useMemo } from 'react';
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
  rating?: number;
  category?: string;
}

interface PageContentProps {
  products: Product[];
}

export default function PageContent({ products }: PageContentProps) {
  const [showFilter, setShowFilter] = useState(true);
  const [sortBy, setSortBy] = useState('recommended');
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

  // Apply filters and sorting
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Apply filters
    if (Object.keys(activeFilters).length > 0) {
      result = result.filter(product => {
        // Check if product matches any active filter
        for (const [category, selectedItems] of Object.entries(activeFilters)) {
          if (selectedItems.length > 0 && !selectedItems.includes('All')) {
            // Simple filtering logic - in real app, this would be more sophisticated
            // For demo, we'll use category matching or description matching
            const productLower = product.name.toLowerCase() + ' ' + product.description.toLowerCase();
            const matchesFilter = selectedItems.some(item => 
              productLower.includes(item.toLowerCase())
            );
            if (!matchesFilter) return false;
          }
        }
        return true;
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        result.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return priceB - priceA;
        });
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        // Sort by ID descending (assuming higher IDs are newer)
        result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case 'recommended':
      default:
        // Keep original order
        break;
    }

    return result;
  }, [products, sortBy, activeFilters]);

  const handleFilterChange = (category: string, selectedItems: string[]) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: selectedItems
    }));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className={`${styles.container} ${!showFilter ? styles.containerFull : ''}`}>
      {showFilter && <Filter onFilterChange={handleFilterChange} />}
      
      <section className={styles.productsSection}>
        <div className={styles.productsHeader}>
          <div className={styles.productsInfo}>
            <span className={styles.itemCount}>{filteredAndSortedProducts.length} ITEMS</span>
            <button 
              className={styles.filterToggle}
              onClick={() => setShowFilter(!showFilter)}
            >
              {showFilter ? '< HIDE FILTER' : '< SHOW FILTER'}
            </button>
          </div>
          <div className={styles.sortSelector}>
            <select 
              className={styles.sortSelect} 
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="recommended">RECOMMENDED</option>
              <option value="newest">NEWEST FIRST</option>
              <option value="popular">POPULAR</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="rating">RATING</option>
            </select>
          </div>
        </div>

        <ProductList products={filteredAndSortedProducts} />
      </section>
    </div>
  );
}