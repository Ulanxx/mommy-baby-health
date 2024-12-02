import React from 'react';
import { BookOpen, Video, MessageCircle, ShoppingBag, Users, Heart } from 'lucide-react';

const features = [
  {
    name: '权威孕育知识',
    description: '专业医生和专家撰写的孕育知识文章',
    icon: BookOpen,
  },
  {
    name: '在线视频咨询',
    description: '便捷的一对一视频咨询服务',
    icon: Video,
  },
  {
    name: '心理健康服务',
    description: '专业的心理咨询和健康教育',
    icon: Heart,
  },
  {
    name: '母婴商城',
    description: '精选优质母婴健康护理用品',
    icon: ShoppingBag,
  },
  {
    name: '社区交流',
    description: '分享经验，获取情感支持',
    icon: Users,
  },
  {
    name: '即时倾诉',
    description: '匿名倾诉平台，随时分享感受',
    icon: MessageCircle,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            全方位的母婴健康服务
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            我们提供专业、贴心的服务，守护每个家庭的幸福
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-rose-100 text-rose-500">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}