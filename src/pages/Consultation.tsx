import React from 'react';
import { doctors } from '../data/mockData';
import { Star, Calendar, Clock } from 'lucide-react';

export function Consultation() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">在线咨询</h1>
          <p className="mt-4 text-xl text-gray-600">专业医生一对一咨询服务</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <img className="h-16 w-16 rounded-full object-cover" src={doctor.imageUrl} alt={doctor.name} />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                    <p className="text-rose-500">{doctor.specialty}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{doctor.experience}年经验</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-2 text-gray-600">{doctor.rating}</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">可预约时间</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {doctor.availability.map((day) => (
                        <span key={day} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rose-100 text-rose-800">
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors">
                    立即预约 ¥{doctor.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}