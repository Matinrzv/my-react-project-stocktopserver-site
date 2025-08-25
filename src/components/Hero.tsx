import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.6)), url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            قدرت سرورهای پرسرعت
            <br />
            <span className="text-blue-300">در دستان شما</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            بهترین خدمات میزبانی وب و سرورهای اختصاصی با پشتیبانی ۲۴/۷
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#pricing">            
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                خرید سرور
              </button>
            </a>
            <a href="#contact">            
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                تماس با ما
              </button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;