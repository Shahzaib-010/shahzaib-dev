// src/Layout/PageLayout.jsx
import React from "react";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import PageTransition from "../components/animations/PageTransition";
import { Outlet } from "react-router-dom";
import PerspectiveGrid from "../components/animations/PerspectiveGrid";
import { ScrollProgress } from "../components/animations/ScrollProgress";
import FAQSection from "../components/Sections/faq/FAQSection";

const PageLayout = () => {
  return (
    <div className="bg-black">
      
      <div className="">

     
    
      
      {/* Static — not animated */}
      <ScrollProgress />
      <Navbar />
      {/* Animated — ONLY page content transitions */}
      <PageTransition>
      <PerspectiveGrid/>
        
        <Outlet />
      </PageTransition>

      {/* Static — not animated */}
      <FAQSection/>
      <Footer />

       </div>
    </div>
  );
};

export default PageLayout;
