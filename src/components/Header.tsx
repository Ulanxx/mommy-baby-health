import React from 'react';
import { Heart, Brain, Home, Users, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { MobileNav } from './MobileNav';
import { useAuth } from '../context/AuthContext';

export function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="bg-rose-50 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-xl font-semibold text-gray-900">妈咪宝贝健康家园</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/knowledge" className="text-gray-700 hover:text-rose-500 px-3 py-2 rounded-md text-sm font-medium">
              孕育知识
            </Link>
            <Link to="/consultation" className="text-gray-700 hover:text-rose-500 px-3 py-2 rounded-md text-sm font-medium">
              在线咨询
            </Link>
            <Link to="/mental-health" className="text-gray-700 hover:text-rose-500 px-3 py-2 rounded-md text-sm font-medium">
              心理健康
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-rose-500 px-3 py-2 rounded-md text-sm font-medium">
              母婴商城
            </Link>
            <Link to="/postpartum-centers" className="text-gray-700 hover:text-rose-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <Home className="h-4 w-4 mr-1" />
              月子中心
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-rose-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <Users className="h-4 w-4 mr-1" />
              社区
            </Link>
            <Link to="/ai-companion" className="flex items-center text-rose-600 hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium">
              <Brain className="h-4 w-4 mr-1" />
              AI心理陪伴
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <img
                  src={user?.avatar}
                  alt={user?.username}
                  className="h-8 w-8 rounded-full"
                />
                <button
                  onClick={handleAuthClick}
                  className="flex items-center text-gray-700 hover:text-rose-500"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleAuthClick}
                className="hidden md:block bg-rose-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-600"
              >
                登录/注册
              </button>
            )}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}