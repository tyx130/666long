import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo color={isScrolled ? 'text-primary-600' : 'text-white'} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'nav-link-active' : ''} ${isScrolled ? 'text-neutral-800' : 'text-white'}`
            }
          >
            首页
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'nav-link-active' : ''} ${isScrolled ? 'text-neutral-800' : 'text-white'}`
            }
          >
            酒店介绍
          </NavLink>
          <NavLink 
            to="/culture" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'nav-link-active' : ''} ${isScrolled ? 'text-neutral-800' : 'text-white'}`
            }
          >
            主题文化
          </NavLink>
          <NavLink 
            to="/careers" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'nav-link-active' : ''} ${isScrolled ? 'text-neutral-800' : 'text-white'}`
            }
          >
            人才招聘
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'nav-link-active' : ''} ${isScrolled ? 'text-neutral-800' : 'text-white'}`
            }
          >
            联系我们
          </NavLink>
        </nav>
        
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:0537-2512666" 
            className={`flex items-center gap-2 text-sm font-medium ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`}
          >
            <Phone size={16} />
            <span>0537-2512666</span>
          </a>
          <Link 
            to="/contact" 
            className={`btn-primary ${
              isScrolled 
                ? 'bg-primary-600 text-white' 
                : 'bg-white text-primary-800'
            }`}
          >
            立即预订
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-2xl p-2"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
        >
          {mobileMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-neutral-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-neutral-800' : 'text-white'} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <nav className="container-custom py-6 flex flex-col gap-4">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `py-2 px-4 text-lg ${isActive ? 'text-primary-600 font-medium' : 'text-neutral-800'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                首页
              </NavLink>
              <NavLink 
                to="/about" 
                className={({isActive}) => 
                  `py-2 px-4 text-lg ${isActive ? 'text-primary-600 font-medium' : 'text-neutral-800'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                酒店介绍
              </NavLink>
              <NavLink 
                to="/culture" 
                className={({isActive}) => 
                  `py-2 px-4 text-lg ${isActive ? 'text-primary-600 font-medium' : 'text-neutral-800'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                主题文化
              </NavLink>
              <NavLink 
                to="/careers" 
                className={({isActive}) => 
                  `py-2 px-4 text-lg ${isActive ? 'text-primary-600 font-medium' : 'text-neutral-800'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                人才招聘
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({isActive}) => 
                  `py-2 px-4 text-lg ${isActive ? 'text-primary-600 font-medium' : 'text-neutral-800'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                联系我们
              </NavLink>
              <div className="mt-4 border-t border-neutral-200 pt-4 flex flex-col gap-4">
                <a 
                  href="tel:0537-2512666" 
                  className="flex items-center gap-2 text-primary-600 py-2 px-4"
                >
                  <Phone size={18} />
                  <span>0537-2512666</span>
                </a>
                <Link 
                  to="/contact" 
                  className="btn-primary mx-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  立即预订
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;