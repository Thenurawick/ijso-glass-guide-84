
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-white">
            IJSO <span className="text-ijso-cool-cyan">Guide</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-ijso-cool-cyan transition-colors">About</a>
          <a href="#resources" className="text-white hover:text-ijso-cool-cyan transition-colors">Resources</a>
          <a href="#testimonials" className="text-white hover:text-ijso-cool-cyan transition-colors">Testimonials</a>
          <a href="#contact" className="text-white hover:text-ijso-cool-cyan transition-colors">Contact</a>
        </nav>
        
        <div className="hidden md:block">
          <Button className="btn-primary">Join Now</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-white hover:text-ijso-cool-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#resources" className="text-white hover:text-ijso-cool-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>Resources</a>
            <a href="#testimonials" className="text-white hover:text-ijso-cool-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-white hover:text-ijso-cool-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <Button className="btn-primary w-full">Join Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
