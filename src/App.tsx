import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Knowledge } from './pages/Knowledge';
import { Consultation } from './pages/Consultation';
import { MentalHealth } from './pages/MentalHealth';
import { Shop } from './pages/Shop';
import { AICompanion } from './pages/AICompanion';
import { PostpartumCenters } from './pages/PostpartumCenters';
import { Community } from './pages/Community';
import { Auth } from './pages/Auth';
import { AuthProvider } from './context/AuthContext';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/mental-health" element={<MentalHealth />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/ai-companion" element={<AICompanion />} />
              <Route path="/postpartum-centers" element={<PostpartumCenters />} />
              <Route path="/community" element={<Community />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </main>
          <footer className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-base text-gray-500">
                © 2024 妈咪宝贝健康家园. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}