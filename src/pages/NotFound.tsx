import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = '页面未找到 - 锡龙酒店';
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">页面未找到</h2>
          <p className="text-neutral-600 mb-8">
            很抱歉，您访问的页面不存在或已被移除。请返回首页或尝试其他页面。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              to="/"
              icon={<Home size={18} />}
            >
              返回首页
            </Button>
            <Button 
              variant="outline" 
              to="/contact"
              icon={<ArrowLeft size={18} />}
            >
              联系我们
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;