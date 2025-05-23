import React from 'react';
// import { Building2 } from 'lucide-react';
import logo from '../../images/1.png';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'text-primary-600' }) => {
  return (
    <div className="flex items-center gap-2">
      {/* <Building2 className={`${color} w-8 h-8`} /> */}
      <img src={logo} alt="" className={`${color} w-20 h-20`} />
      {/* <div className="flex flex-col">
        <span className={`${color} text-xl font-bold font-serif tracking-wide`}>
          锡龙酒店
        </span>
        <span className={`${color} text-xs tracking-wider opacity-80`}>
          XILONG LUXURY HOTEL
        </span>
      </div> */}
    </div>
  );
};

export default Logo;