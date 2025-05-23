import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-950 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Logo color="text-white" />
            </div>
            <p className="text-neutral-300 mb-6">
              锡龙大厦坐落于这座城市的西南角，是集餐饮、住宿、商旅和休闲于一体的一家综合性文化主题酒店。据史料记载，大厦现所在的位置，正是康熙年间南下路经下榻的好地方。大厦择址于古运河之畔，与运河水仅几步之遥。是您在选择住宿或餐饮时，闹中取静的黄金地段和理想之选。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">导航链接</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">首页</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">酒店介绍</Link>
              </li>
              <li>
                <Link to="/culture" className="text-neutral-300 hover:text-primary-400 transition-colors">主题文化</Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-300 hover:text-primary-400 transition-colors">人才招聘</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">联系我们</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">联系信息</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 mt-1 shrink-0" />
                <span className="text-neutral-300">山东省济宁市任城区太白西路与济安桥路交叉口向西188米路北</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-400 shrink-0" />
                <div className="text-neutral-300">
                  <p>总台：0537-2512666</p>
                  <p>餐饮：0537-2371999</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-400 shrink-0" />
                <span className="text-neutral-300">773801529@qq.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-primary-400 mt-1 shrink-0" />
                <div className="text-neutral-300">
                  <p>周一至周日</p>
                  <p>全天24小时服务</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">订阅我们</h3>
            <p className="text-neutral-300 mb-4">
              订阅我们的电子邮件，获取最新的促销信息和特别优惠。
            </p>
            <form className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="您的电子邮箱" 
                  className="px-4 py-3 bg-secondary-900 border border-secondary-700 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-r-md"
                >
                  订阅
                </button>
              </div>
            </form>
            <div className="flex items-center gap-2 bg-secondary-900 p-3 rounded-md">
              <img 
                src="/images/qrcode.jpg" 
                alt="微信二维码" 
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="text-sm text-white font-medium">扫描二维码</p>
                <p className="text-xs text-neutral-400">关注我们的官方微信</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">© 2025 锡龙酒店 版权所有</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">隐私政策</a>
            <a href="#" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">条款与条件</a>
            <a href="#" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;