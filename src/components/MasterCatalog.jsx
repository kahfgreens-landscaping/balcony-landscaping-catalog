import React, { useState } from 'react';
import { Download, ExternalLink, Maximize2, Minimize2, Printer, ChevronDown, Sparkles } from 'lucide-react';

const catalogPages = [
  {
    id: 1,
    pageNumber: 1,
    title: 'Master Catalog — Page 1',
    subtitle: 'Hanging Pots, Railing Troughs, Floor Troughs, and Specimen Plants',
    jpgSrc: '/images/master-catalog/1.jpg',
    pngSrc: '/images/master-catalog/1.png',
  },
  {
    id: 2,
    pageNumber: 2,
    title: 'Master Catalog — Page 2',
    subtitle: 'Feature Plants, Climbers, Living Wall Species, and Foliage Accents',
    jpgSrc: '/images/master-catalog/2.jpg',
    pngSrc: '/images/master-catalog/2.png',
  },
  {
    id: 3,
    pageNumber: 3,
    title: 'Master Catalog — Page 3',
    subtitle: 'Shrubs, Flowering Species, Herbs, Creepers, and Specimen Trees',
    jpgSrc: '/images/master-catalog/3.jpg',
    pngSrc: '/images/master-catalog/3.png',
  },
];

export default function MasterCatalog() {
  const [fullBleed, setFullBleed] = useState(true);

  const scrollToPage = (pageNum) => {
    const el = document.getElementById(`master-page-${pageNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`master-catalog-wrapper ${fullBleed ? 'full-screen-mode' : 'contained-mode'}`}>
      {/* Sticky Quick Nav Bar */}
      <div className="master-catalog-toolbar">
        <div className="toolbar-info">
          <span className="toolbar-badge">
            <Sparkles size={14} /> Master Print Edition
          </span>
          <span className="toolbar-title">Balcony Plants Catalog (3 Pages)</span>
        </div>

        <div className="page-quick-jumps">
          <span className="jump-label">Jump to:</span>
          {catalogPages.map((p) => (
            <button
              key={p.id}
              type="button"
              className="page-jump-btn"
              onClick={() => scrollToPage(p.pageNumber)}
            >
              Page {p.pageNumber}
            </button>
          ))}
        </div>

        <div className="toolbar-actions">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => setFullBleed(!fullBleed)}
            title={fullBleed ? "Switch to centered view" : "Switch to full screen width"}
          >
            {fullBleed ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            <span>{fullBleed ? 'Fit Screen' : 'Full Screen Width'}</span>
          </button>

          <button
            type="button"
            className="toolbar-btn"
            onClick={() => window.print()}
            title="Print catalog"
          >
            <Printer size={16} />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Catalog Pages rendered one by one */}
      <div className="master-catalog-stream">
        {catalogPages.map((page, index) => (
          <section
            key={page.id}
            id={`master-page-${page.pageNumber}`}
            className="master-page-section"
          >
            <div className="master-page-header">
              <div className="page-header-left">
                <span className="page-pill">Page {page.pageNumber} of {catalogPages.length}</span>
                <span className="page-header-subtitle">{page.subtitle}</span>
              </div>
              <div className="page-header-right">
                <a
                  href={page.pngSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="page-action-link"
                  title="Open original uncompressed image in new tab"
                >
                  <ExternalLink size={14} />
                  <span>Original (HD)</span>
                </a>
                <a
                  href={page.jpgSrc}
                  download={`Al-Kahf-Balcony-Catalog-Page-${page.pageNumber}.jpg`}
                  className="page-action-link"
                  title="Download this page"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>
              </div>
            </div>

            <div className="master-page-image-container">
              <picture>
                <source srcSet={page.jpgSrc} type="image/jpeg" />
                <img
                  src={page.pngSrc}
                  alt={page.title}
                  className="master-catalog-page-img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </picture>
            </div>

            {index < catalogPages.length - 1 && (
              <div className="page-next-indicator" onClick={() => scrollToPage(page.pageNumber + 1)}>
                <span>Scroll to Page {page.pageNumber + 1}</span>
                <ChevronDown size={18} />
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
