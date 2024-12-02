import React from 'react';
import { articles } from '../data/mockData';
import { Clock, User } from 'lucide-react';

export function Knowledge() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">孕育知识库</h1>
          <p className="mt-4 text-xl text-gray-600">专业的孕育知识，助您轻松孕育</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={article.imageUrl} alt={article.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-rose-500">{article.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{article.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{article.content}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{article.author}</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <span>{article.date}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}