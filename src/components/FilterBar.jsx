import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function FilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  searchTerm,
  onSearchChange,
  maxPriceFilter,
  onPriceChange,
  showPrices,
  onTogglePrices
}) {
  return (
    <div className="filter-bar">
      <div className="filter-toolbar">
        <div className="search-box">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            placeholder="Search species or common name..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="price-toggle-btn"
          onClick={onTogglePrices}
          role="switch"
          aria-checked={showPrices}
          title={showPrices ? "Hide prices" : "Show prices"}
        >
          <span className="price-toggle-name">Price</span>
          <span className={`price-toggle-switch ${showPrices ? 'on' : ''}`}>
            <span className="price-toggle-thumb" />
          </span>
        </button>
      </div>

      <div className="category-scroll">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="price-filter-box">
        <SlidersHorizontal size={16} />
        <label htmlFor="priceRange">Max Price: <strong>{maxPriceFilter} AED</strong></label>
        <input
          id="priceRange"
          type="range"
          min="20"
          max="1000"
          step="10"
          value={maxPriceFilter}
          onChange={(e) => onPriceChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}