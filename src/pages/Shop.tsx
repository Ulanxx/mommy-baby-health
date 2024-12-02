import React from 'react';
import { products } from '../data/mockData';
import { Star, ShoppingCart } from 'lucide-react';

export function Shop() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">母婴商城</h1>
          <p className="mt-4 text-xl text-gray-600">精选优质母婴用品</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img className="h-64 w-full object-cover" src={product.imageUrl} alt={product.name} />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rose-100 text-rose-800">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <div className="mt-4 flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-2 text-gray-600">{product.rating}</span>
                  <span className="ml-4 text-sm text-gray-500">库存: {product.stock}</span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">¥{product.price}</span>
                  <button className="flex items-center bg-rose-500 text-white px-6 py-2 rounded-md hover:bg-rose-600 transition-colors">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    加入购物车
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