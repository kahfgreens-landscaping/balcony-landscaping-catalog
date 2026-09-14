import React, { useState, useMemo } from 'react';
import './App.css';
import { plantsData, categories } from './data/plantsData';
import FilterBar from './components/FilterBar';
import PlantCard from './components/PlantCard';
import PlantModal from './components/PlantModal';
import MasterCatalog from './components/MasterCatalog';
import { Sparkles, SunMedium, ShieldCheck, LayoutGrid, BookOpen } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('interactive');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPriceFilter, setMaxPriceFilter] = useState(1000);
  const [showPrices, setShowPrices] = useState(true);
  const [activeModalPlant, setActiveModalPlant] = useState(null);

  const filteredPlants = useMemo(() => {
    return plantsData.filter((plant) => {
      const matchesCategory =
        selectedCategory === 'All' || plant.category === selectedCategory;
      const matchesSearch =
        plant.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = showPrices ? plant.minPrice <= maxPriceFilter : true;

      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategory, searchTerm, maxPriceFilter, showPrices]);

  return (
    <div className={`app-shell ${activeTab === 'master' ? 'master-active' : ''}`}>
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="header">
        <div className="company-topbar">
          <img src="/images/logo.png" alt="Al Kahf Al Akhdar Logo" className="company-logo" />
          <div className="company-info">
            <span className="company-title">Al Kahf Al Akhdar Landscaping and Gardening Works LLC</span>
            <span className="company-subtitle">Professional Landscape Architecture & Green Living Solutions • UAE</span>
          </div>
        </div>

        <div className="header-main-row">
          <div className="header-brand">
            <div>
              <p className="eyebrow">UAE urban planting studio</p>
              <h1>Balcony Landscaping Master Catalog</h1>
            </div>
          </div>

          <div className="header-insights">
            <div className="metric-card">
              <span className="metric-value">{plantsData.length}</span>
              <span className="metric-label">Curated species</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">4x</span>
              <span className="metric-label">Design density</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">100%</span>
              <span className="metric-label">Sun-smart</span>
            </div>
          </div>
        </div>

        <div className="catalog-nav-tabs-wrapper">
          <nav className="catalog-nav-tabs" aria-label="Catalog Navigation">
            <button
              type="button"
              className={`catalog-nav-tab ${activeTab === 'interactive' ? 'active' : ''}`}
              onClick={() => setActiveTab('interactive')}
            >
              <LayoutGrid size={18} />
              <span>Interactive Catalog</span>
              <span className="nav-tab-badge">{plantsData.length}</span>
            </button>

            <button
              type="button"
              className={`catalog-nav-tab ${activeTab === 'master' ? 'active' : ''}`}
              onClick={() => setActiveTab('master')}
            >
              <BookOpen size={18} />
              <span>Master Catalog</span>
              <span className="nav-tab-badge master">HD Print</span>
            </button>
          </nav>
        </div>
      </header>

      {activeTab === 'master' ? (
        <main className="master-main-content">
          <MasterCatalog />
        </main>
      ) : (
        <main className="main-content">
          <section className="intro-panel">
            <div>
              <p className="panel-label">Climate-smart balcony design</p>
              <h2>Specifically curated for hot, bright, and wind-exposed balconies across Dubai and the UAE.</h2>
            </div>
            <div className="panel-pills">
              <span><Sparkles size={15} /> Low-water luxury</span>
              <span><SunMedium size={15} /> Heat resilient</span>
              <span><ShieldCheck size={15} /> Premium finishes</span>
            </div>
          </section>

          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            maxPriceFilter={maxPriceFilter}
            onPriceChange={setMaxPriceFilter}
            showPrices={showPrices}
            onTogglePrices={() => setShowPrices((value) => !value)}
          />

          <div className="results-count">
            Showing <strong>{filteredPlants.length}</strong> climate-smart plant options
          </div>

          <div className="plant-grid">
            {filteredPlants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                onCardClick={setActiveModalPlant}
                showPrices={showPrices}
              />
            ))}
          </div>

          {filteredPlants.length === 0 && (
            <div className="no-results">
              <p>No plants match your criteria. Try adjusting the filter or search query.</p>
            </div>
          )}
        </main>
      )}

      {activeModalPlant && (
        <PlantModal
          plant={activeModalPlant}
          showPrices={showPrices}
          onClose={() => setActiveModalPlant(null)}
        />
      )}
    </div>
  );
}