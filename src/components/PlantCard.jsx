import React from 'react';
import { Sun, Tag, ShoppingBag } from 'lucide-react';
import PlantCarousel from './PlantCarousel';

export default function PlantCard({ plant, onCardClick, showPrices }) {
  return (
    <article className="plant-card" onClick={() => onCardClick(plant)}>
      <div className="card-media" onClick={(e) => {
        e.stopPropagation();
        onCardClick(plant);
      }}>
        <PlantCarousel
          images={plant.images}
          title={plant.commonName}
          onImageClick={() => onCardClick(plant)}
        />
        <div className="card-topline">
          <span className="category-badge">{plant.category}</span>
          <span className="premium-tag">Sun-smart</span>
        </div>
      </div>

      <div className="card-content">
        <div className="card-header-row">
          <div>
            <h3 className="common-name">{plant.commonName}</h3>
            <p className="scientific-name">{plant.scientificName}</p>
          </div>
          {showPrices && (
            <span className="mini-price-badge">{plant.minPrice} AED+</span>
          )}
        </div>

        <p className="plant-description">{plant.description}</p>

        <div className="info-row">
          <Sun size={16} className="info-icon" />
          <span>{plant.lightSpec}</span>
        </div>

        <div className={`sizes-preview ${showPrices ? 'price-visible' : 'price-hidden'}`}>
          <h4>Available Sizes</h4>
          <ul>
            {plant.sizes.map((s, idx) => (
              <li key={idx}>
                <span className="size-label">{s.size}</span>
                {showPrices && (
                  <span className="size-price visible">
                    {s.priceAED} AED
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-footer">
          {showPrices ? (
            <div className="price-tag visible">
              <Tag size={16} />
              <span>From {plant.minPrice} AED</span>
            </div>
          ) : (
            <div className="price-tag-hidden">
              <Tag size={16} />
              <span>Price on request</span>
            </div>
          )}
          <button className="view-details-btn" onClick={(e) => {
            e.stopPropagation();
            onCardClick(plant);
          }}>
            <ShoppingBag size={14} />
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}