import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">

            <div className="flex items-center space-x-2 mb-4">
              <img
                src={Logo}
                alt="StockTopServer Logo"
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-2xl font-bold">StockTopServer</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              ارائه‌دهنده برتر خدمات میزبانی وب و سرورهای اختصاصی با کیفیت بالا و پشتیبانی تخصصی در ایران.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/stocktop.kalla/" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">صفحه اصلی</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">خدمات</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">تعرفه‌ها</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">درباره ما</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">تماس با ما</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">خدمات</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">سرور اختصاصی</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">سرور مجازی</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">هاست ابری</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">پشتیبانی فنی</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">مشاوره رایگان</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © ۲۰۲۵ StockTopServer. تمامی حقوق محفوظ است.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">حریم خصوصی</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">قوانین و مقررات</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">سوالات متداول</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;