import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={Logo} 
              alt="StockTopServer Logo" 
              className="h-10 w-10 rounded-lg" 
            />
            <span className="text-2xl font-bold text-blue-900">StockTopServer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">صفحه اصلی</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">خدمات</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">تعرفه‌ها</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">درباره ما</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">تماس با ما</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">صفحه اصلی</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">خدمات</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">تعرفه‌ها</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">درباره ما</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">تماس با ما</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;