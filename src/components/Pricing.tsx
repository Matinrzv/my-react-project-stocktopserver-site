import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'پلن پایه',
      price: '',
      period: 'ماهانه',
      features: [
        '۲ هسته پردازنده',
        '۴ گیگابایت رم',
        '۵۰ گیگابایت حافظه SSD',
        'پهنای باند نامحدود',
        'پشتیبانی ایمیلی'
      ],
      popular: false
    },
    {
      name: 'پلن حرفه‌ای',
      price: '',
      period: 'ماهانه',
      features: [
        '۴ هسته پردازنده',
        '۸ گیگابایت رم',
        '۱۰۰ گیگابایت حافظه SSD',
        'پهنای باند نامحدود',
        'پشتیبانی ۲۴/۷',
        'پشتیبان‌گیری روزانه'
      ],
      popular: true
    },
    {
      name: 'پلن سازمانی',
      price: '',
      period: 'ماهانه',
      features: [
        '۸ هسته پردازنده',
        '۱۶ گیگابایت رم',
        '۲۵۰ گیگابایت حافظه SSD',
        'پهنای باند نامحدود',
        'پشتیبانی اولویت‌دار',
        'پشتیبان‌گیری روزانه',
        'مانیتورینگ پیشرفته'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">تعرفه‌های ما</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            قیمت‌گذاری شفاف و منصفانه برای تمام نیازها
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular 
                  ? 'ring-2 ring-blue-600 transform scale-105 shadow-2xl' 
                  : 'hover:shadow-xl'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    محبوب‌ترین
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 mr-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-900'
                }`}
              >
                انتخاب کنید
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;