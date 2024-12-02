import React from 'react';
import { mentalHealthCourses } from '../data/mockData';
import { Clock, Star, PlayCircle } from 'lucide-react';

export function MentalHealth() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">心理健康</h1>
          <p className="mt-4 text-xl text-gray-600">专业的心理健康课程与咨询</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mentalHealthCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img className="h-48 w-full object-cover" src={course.imageUrl} alt={course.title} />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <PlayCircle className="h-12 w-12 text-white opacity-80 hover:opacity-100 cursor-pointer" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                    <p className="mt-1 text-rose-500">{course.instructor}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rose-100 text-rose-800">
                    {course.level}
                  </span>
                </div>
                <div className="mt-4 flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="mt-2 flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-2 text-gray-600">{course.rating}</span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">¥{course.price}</span>
                  <button className="bg-rose-500 text-white px-6 py-2 rounded-md hover:bg-rose-600 transition-colors">
                    立即学习
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