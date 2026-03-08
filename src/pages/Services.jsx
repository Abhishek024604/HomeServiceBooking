// pages/Services.jsx

import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import ProvidersSection from "../components/ProvidersSection";
import ServicesHero from "../components/ServicesHero";
import providersData from "../data/providers";



export default function Services() {
  const [providers, setProviders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [sortType, setSortType] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const providersPerPage = 6;

  const indexOfLast = currentPage * providersPerPage;
  const indexOfFirst = indexOfLast - providersPerPage;
  const currentProviders = providers.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(providers.length / providersPerPage);

  // API fetch
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProviders(providersData);
      setLoading(false);
    }, 800);
  }, []);

  // Debounced Search + Filtering
  useEffect(() => {
    const timeout = setTimeout(() => {
      let filtered = [...providersData];

      // Role Filter
      if (selectedRole) {
        filtered = filtered.filter(p =>
          p.role === selectedRole
        );
      }

      // Location Filter
      if (selectedLocation) {
        filtered = filtered.filter(p =>
          p.location === selectedLocation
        );
      }

      // Rating
      filtered = filtered.filter(p => p.rating >= minRating);

      // Price
      filtered = filtered.filter(p => p.price <= maxPrice);

      // Sorting
      if (sortType === "price") {
        filtered.sort((a, b) => a.price - b.price);
      }

      if (sortType === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
      }

      setProviders(filtered);
      setCurrentPage(1);
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchTerm, selectedRole, selectedLocation, minRating, maxPrice, sortType]);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <ServicesHero
        setSearchTerm={setSearchTerm}
        setMinRating={setMinRating}
        setMaxPrice={setMaxPrice}
        setSortType={setSortType}
        setSelectedRole={setSelectedRole}
        setSelectedLocation={setSelectedLocation}
      />

      <ProvidersSection
        providers={currentProviders}
        loading={loading}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      <Footer />
    </div>
  );
}