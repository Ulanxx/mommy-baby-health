import React from 'react';
import { Baby, Heart, BookOpen } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">关爱每一位妈妈</span>
            <span className="block text-rose-500">守护每一个宝贝</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            专业的孕育知识，贴心的咨询服务，全方位守护母婴健康
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#consultation" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-500 hover:bg-rose-600 md:py-4 md:text-lg md:px-10">
                立即咨询
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#knowledge" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-rose-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                了解更多
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}