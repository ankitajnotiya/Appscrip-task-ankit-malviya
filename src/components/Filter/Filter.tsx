"use client";

import { useState } from "react";
import styles from "./Filter.module.css";

interface FilterProps {
  onFilterChange?: (category: string, selectedItems: string[]) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>({});
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isRecommendedOpen, setIsRecommendedOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

  const filters = [
    { label: "IDEAL FOR", items: ["All", "Men", "Women", "Baby & Kids"] },
    { label: "OCCASION", items: ["All", "Casual", "Formal", "Party", "Wedding", "Sports"] },
    { label: "WORK", items: ["All", "Office", "Outdoor", "Travel", "Home"] },
    { label: "FABRIC", items: ["All", "Cotton", "Silk", "Wool", "Linen", "Polyester", "Denim"] },
    { label: "SEGMENT", items: ["All", "Premium", "Basic", "Luxury", "Economy"] },
    { label: "SUITABLE FOR", items: ["All", "Summer", "Winter", "Monsoon", "All Season"] },
    { label: "RAW MATERIALS", items: ["All", "Organic", "Synthetic", "Natural", "Recycled"] },
    { label: "PATTERN", items: ["All", "Solid", "Striped", "Checked", "Floral", "Geometric", "Printed"] },
  ];

  const sortOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  const toggleFilter = (label: string) => {
    setExpandedFilter(expandedFilter === label ? null : label);
    if (expandedFilter !== label && !selectedItems[label]) {
      const newSelection = { ...selectedItems, [label]: ["All"] };
      setSelectedItems(newSelection);
      onFilterChange?.(label, ["All"]);
    }
  };

  const handleItemSelection = (filterLabel: string, item: string) => {
    let newSelection: string[];
    
    if (item === "All") {
      newSelection = ["All"];
    } else {
      const currentSelection = selectedItems[filterLabel] || [];
      if (currentSelection.includes(item)) {
        // Remove item if already selected
        newSelection = currentSelection.filter(i => i !== item);
        // If no items left, select "All"
        if (newSelection.length === 0) {
          newSelection = ["All"];
        }
      } else {
        // Add item and remove "All" if it was selected
        newSelection = currentSelection.filter(i => i !== "All");
        newSelection.push(item);
      }
    }
    
    setSelectedItems(prev => ({ ...prev, [filterLabel]: newSelection }));
    onFilterChange?.(filterLabel, newSelection);
  };

  const handleUnselectAll = (filterLabel: string) => {
    const newSelection = ["All"];
    setSelectedItems(prev => ({ ...prev, [filterLabel]: newSelection }));
    onFilterChange?.(filterLabel, newSelection);
  };

  return (
    <>
      <div className={styles.mobileBar}>
        <button 
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className={styles.mobileFilterBtn}
        >
          {isMobileFilterOpen ? "HIDE FILTER" : "FILTER"}
        </button>

        <div className={styles.mobileDivider} />

        <div className={styles.sortContainer}>
          <button 
            onClick={() => setIsRecommendedOpen(!isRecommendedOpen)}
            className={styles.sortBtn}
          >
            <span>{selectedSort}</span>
            <span className={styles.sortArrow}>▼</span>
          </button>

          {isRecommendedOpen && (
            <div className={styles.dropdownMenu}>
              {sortOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelectedSort(option);
                    setIsRecommendedOpen(false);
                  }}
                  className={`${styles.dropdownItem} ${selectedSort === option ? styles.activeDropdownItem : ''}`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <aside className={`${styles.filter} ${isMobileFilterOpen ? styles.showMobileFilter : ''}`}>
        <div className={styles.filterHeader}>
          <input type="checkbox" className={styles.customizable} id="customizable" />
          <label htmlFor="customizable" className={styles.customizableLabel}>CUSTOMIZABLE</label>
        </div>

        <div className={styles.filterList}>
          {filters.map((filter) => (
            <div key={filter.label} className={styles.filterGroup}>
              <div
                className={styles.filterTitle}
                onClick={() => toggleFilter(filter.label)}
              >
                <span className={styles.filterLabel}>{filter.label}</span>
                <span className={`${styles.arrow} ${expandedFilter === filter.label ? styles.arrowRotated : ''}`}>▼</span>
              </div>
              
              {expandedFilter === filter.label && (
                <div className={styles.filterItems}>
                  {filter.items.map((item) => {
                    const isSelected = (selectedItems[filter.label] || []).includes(item);
                    return (
                      <div
                        key={item}
                        className={`${styles.filterItem} ${isSelected ? styles.selectedItem : ''}`}
                        onClick={() => handleItemSelection(filter.label, item)}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleItemSelection(filter.label, item)}
                          className={styles.checkbox}
                        />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                  <div className={styles.unselectAll} onClick={() => handleUnselectAll(filter.label)}>
                    Unselect all
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}