import React from 'react';
import { Server, Cloud, HardDrive } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'سرور اختصاصی',
      description: 'سرورهای قدرتمند با منابع اختصاصی و کنترل کامل برای کسب‌وکارهای بزرگ',
      features: ['CPU اختصاصی', 'رم بالا', 'پشتیبانی ۲۴/۷', 'SSD سریع']
    },
    {
      icon: Cloud,
      title: 'سرور مجازی',
      description: 'راه‌حل مقرون‌به‌صرفه با قابلیت ارتقا آسان برای پروژه‌های متوسط',
      features: ['منابع قابل تنظیم', 'راه‌اندازی سریع', 'قیمت مناسب', 'مدیریت آسان']
    },
    {
      icon: HardDrive,
      title: 'هاست ابری',
      description: 'میزبانی مقیاس‌پذیر در ابر با امنیت بالا و عملکرد بهینه',
      features: ['مقیاس‌پذیری', 'پردازش ابری', 'امنیت بالا', 'دسترسی جهانی']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">خدمات ما</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            طیف گسترده‌ای از خدمات میزبانی برای تمام نیازهای شما
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                اطلاعات بیشتر
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;