import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Destinations } from './components/Destinations';
import { FeaturedPackages } from './components/FeaturedPackages';
import { Testimonials } from './components/Testimonials';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactForm } from './components/ContactForm';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import './App.css';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <FeaturedPackages />
        <Testimonials />
        <WhyChooseUs />
        <CallToAction />
        <ContactForm />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
