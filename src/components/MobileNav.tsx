import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, BookOpen, Video, Brain, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/knowledge', icon: BookOpen, text: '孕育知识' },
    { path: '/consultation', icon: Video, text: '在线咨询' },
    { path: '/mental-health', icon: Brain, text: '心理健康' },
    { path: '/shop', icon: ShoppingBag, text: '母婴商城' },
    { path: '/ai-companion', icon: Heart, text: 'AI心理陪伴' },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-600 hover:text-gray-900"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 bg-white z-50"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <Heart className="h-8 w-8 text-rose-500" />
                  <span className="ml-2 text-xl font-semibold text-gray-900">妈咪宝贝</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center px-6 py-4 text-gray-600 hover:bg-rose-50 hover:text-rose-500"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5 mr-4" />
                    <span className="text-lg">{item.text}</span>
                  </Link>
                ))}
              </nav>

              <div className="p-4 border-t">
                <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors">
                  登录/注册
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}