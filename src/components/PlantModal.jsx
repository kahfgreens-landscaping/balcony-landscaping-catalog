import React from 'react';
import { X, Sun, ShieldCheck, Leaf, WalletCards } from 'lucide-react';
import PlantCarousel from './PlantCarousel';

export default function PlantModal({ plant, onClose, showPrices = true }) {
  if (!plant) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close plant details">
          <X size={22} />
        </button>

        <div className="modal-body">
          <div className="modal-gallery">
            <PlantCarousel images={plant.images} title={plant.commonName} />
          </div>

          <div className="modal-details">
            <div className="modal-header-row">
              <span className="modal-kicker">{plant.category}</span>
              {showPrices ? (
                <div className="modal-price-pill">
                  {plant.minPrice === plant.maxPrice
                    ? `AED ${plant.minPrice}`
                    : `AED ${plant.minPrice} – ${plant.maxPrice}`}
                </div>
              ) : (
                <div className="modal-price-pill">Pricing on request</div>
              )}
            </div>

            <h2>{plant.commonName}</h2>
            <h4 className="scientific-title">{plant.scientificName}</h4>

            <p className="description-text">{plant.description}</p>

            <div className="spec-grid">
              <div className="detail-box">
                <Sun size={18} className="box-icon" />
                <div>
                  <strong>Sunlight</strong>
                  <p>{plant.lightSpec}</p>
                </div>
              </div>

              <div className="detail-box">
                <Leaf size={18} className="box-icon" />
                <div>
                  <strong>Ideal use</strong>
                  <p>Balcony privacy, feature planting and vertical layering.</p>
                </div>
              </div>

              <div className="detail-box">
                <WalletCards size={18} className="box-icon" />
                <div>
                  <strong>Budget range</strong>
                  <p>
                    {showPrices
                      ? plant.minPrice === plant.maxPrice
                        ? `${plant.minPrice} AED`
                        : `${plant.minPrice} – ${plant.maxPrice} AED`
                      : 'Available on request'}
                  </p>
                </div>
              </div>

              <div className="detail-box">
                <ShieldCheck size={18} className="box-icon" />
                <div>
                  <strong>Installation</strong>
                  <p>Nursery-grade soil mix and potting setup included.</p>
                </div>
              </div>
            </div>

            <div className="sizes-pricing-table">
              <h3>{showPrices ? 'Size & pricing' : 'Available sizes'}</h3>
              <table>
                <thead>
                  <tr>
                    <th>Specification / Size</th>
                    {showPrices && <th>Price Range</th>}
                  </tr>
                </thead>
                <tbody>
                  {plant.sizes.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.size}</td>
                      {showPrices && <td><strong>{item.priceAED} AED</strong></td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="modal-footer-note">
              <ShieldCheck size={18} />
              <span>Designed for UAE climate resilience, heat tolerance, and elevated premium balcony styling.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}