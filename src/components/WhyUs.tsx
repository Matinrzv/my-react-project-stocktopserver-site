import React from 'react';
import { Zap, Shield, Headphones, BarChart3 } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: Zap,
      title: 'سرعت بالا',
      description: 'سرورهای پرسرعت با SSD و شبکه اختصاصی برای بهترین عملکرد'
    },
    {
      icon: Shield,
      title: 'امنیت تضمینی',
      description: 'حفاظت چندلایه و پشتیبان‌گیری مداوم از اطلاعات شما'
    },
    {
      icon: Headphones,
      title: 'پشتیبانی ۲۴/۷',
      description: 'تیم متخصص آماده کمک در هر ساعت از شبانه‌روز'
    },
    {
      icon: BarChart3,
      title: 'قابلیت ارتقا',
      description: 'امکان ارتقا آسان منابع بر اساس رشد کسب‌وکار شما'
    }
  ];

  return (
    <section id= "about" className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">چرا ما را انتخاب کنید؟</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            مزایای منحصر به فرد که ما را از رقبا متمایز می‌کند
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-blue-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                <feature.icon className="h-10 w-10 text-blue-200 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-blue-200 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;