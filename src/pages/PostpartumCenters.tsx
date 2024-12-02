import React from 'react';
import { Star, MapPin, Users, Check } from 'lucide-react';
import { postpartumCenters } from '../data/mockData';
import { format } from 'date-fns';

export function PostpartumCenters() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">月子中心</h1>
          <p className="mt-4 text-xl text-gray-600">专业的产后护理服务，让您安心养育</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {postpartumCenters.map((center) => (
            <div key={center.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={center.imageUrl} 
                alt={center.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">{center.name}</h2>
                    <p className="mt-1 flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2" />
                      {center.location}
                    </p>
                  </div>
                  <div className="flex items-center bg-rose-50 px-3 py-1 rounded-full">
                    <Star className="h-5 w-5 text-rose-500 mr-1" />
                    <span className="text-rose-600 font-medium">{center.rating}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">特色服务</h3>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {center.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{center.rooms}间房间</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">起价</p>
                    <p className="text-2xl font-bold text-rose-500">¥{center.price}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors">
                    预约参观
                  </button>
                </div>

                {center.reviews.length > 0 && (
                  <div className="mt-6 border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">用户评价</h3>
                    {center.reviews.map((review) => (
                      <div key={review.id} className="flex items-start space-x-4">
                        <img
                          src={review.userAvatar}
                          alt={review.userName}
                          className="h-10 w-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center">
                            <h4 className="font-medium text-gray-900">{review.userName}</h4>
                            <div className="ml-2 flex items-center">
                              <Star className="h-4 w-4 text-yellow-400" />
                              <span className="ml-1 text-sm text-gray-600">{review.rating}</span>
                            </div>
                          </div>
                          <p className="mt-1 text-gray-600">{review.content}</p>
                          <p className="mt-1 text-sm text-gray-500">
                            {format(new Date(review.date), 'yyyy年MM月dd日')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}