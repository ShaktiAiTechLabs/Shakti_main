import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { InstantQuoteEngine } from './components/home/InstantQuoteEngine';
import { DfmCapabilities } from './components/home/DfmCapabilities';
import { ProductBento } from './components/home/ProductBento';
import { ClientProof } from './components/home/ClientProof';
import { CounterStats } from './components/home/CounterStats';
import { IndustrySectors } from './components/home/IndustrySectors';
import { Testimonials } from './components/home/Testimonials';

import { AboutPage } from './components/pages/AboutPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { EquipmentPage } from './components/pages/EquipmentPage';
import { EventsPage } from './components/pages/EventsPage';
import { CareerPage } from './components/pages/CareerPage';
import { BlogPage } from './components/pages/BlogPage';
import { ContactPage } from './components/pages/ContactPage';

import { RfqModal } from './components/ui/RfqModal';
import { JobModal } from './components/ui/JobModal';

import { productsData } from './data/products';
import { equipmentData } from './data/equipment';
import { timelineData } from './data/timeline';
import { clientsData, certificationsData, jobsData, blogsData } from './data/clients';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>(undefined);
  const [rfqModalOpen, setRfqModalOpen] = useState<boolean>(false);
  const [presetRfqProduct, setPresetRfqProduct] = useState<string | undefined>(undefined);
  const [jobModalOpen, setJobModalOpen] = useState<boolean>(false);
  const [presetJobTitle, setPresetJobTitle] = useState<string | undefined>(undefined);

  const handleNavigate = (tab: string, productId?: string) => {
    setCurrentTab(tab);
    if (productId) {
      setSelectedProductId(productId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRfq = (productName?: string) => {
    setPresetRfqProduct(productName);
    setRfqModalOpen(true);
  };

  const handleOpenJobApply = (jobTitle?: string) => {
    setPresetJobTitle(jobTitle);
    setJobModalOpen(true);
  };

  const scrollToDfmSpecs = () => {
    if (currentTab !== 'home') {
      setCurrentTab('home');
      setTimeout(() => {
        const el = document.getElementById('dfm-capabilities');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('dfm-capabilities');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-substrate-950 text-slate-100 selection:bg-circuit-gold selection:text-white">
      {/* Global Navigation Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        products={productsData}
        onOpenRfq={() => handleOpenRfq()}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <HeroSection
              onOpenRfq={() => handleOpenRfq()}
              onExploreSpecs={scrollToDfmSpecs}
            />
            <CounterStats />
            <InstantQuoteEngine onOpenDetailedRfq={handleOpenRfq} />
            <ProductBento
              products={productsData}
              onSelectProduct={(id) => handleNavigate('products', id)}
            />
            <DfmCapabilities onOpenRfq={() => handleOpenRfq()} />
            <IndustrySectors />
            <ClientProof
              clients={clientsData}
              certifications={certificationsData}
            />
            <Testimonials />
          </>
        )}

        {currentTab === 'about' && (
          <AboutPage
            timeline={timelineData}
            onOpenRfq={() => handleOpenRfq()}
          />
        )}

        {currentTab === 'products' && (
          <ProductsPage
            products={productsData}
            selectedId={selectedProductId}
            onOpenRfq={handleOpenRfq}
          />
        )}

        {currentTab === 'equipment' && (
          <EquipmentPage
            equipment={equipmentData}
            onOpenRfq={() => handleOpenRfq()}
          />
        )}

        {currentTab === 'journey' && (
          <AboutPage
            timeline={timelineData}
            onOpenRfq={() => handleOpenRfq()}
          />
        )}

        {currentTab === 'events' && (
          <EventsPage />
        )}

        {currentTab === 'career' && (
          <CareerPage
            jobs={jobsData}
            onOpenJobApply={handleOpenJobApply}
          />
        )}

        {currentTab === 'blogs' && (
          <BlogPage
            blogs={blogsData}
            onOpenRfq={() => handleOpenRfq()}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        products={productsData}
      />

      {/* Global Modals */}
      <RfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        presetProduct={presetRfqProduct}
      />

      <JobModal
        isOpen={jobModalOpen}
        onClose={() => setJobModalOpen(false)}
        jobTitle={presetJobTitle}
      />
    </div>
  );
}

export default App;
