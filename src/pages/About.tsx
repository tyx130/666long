import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Clock, Award, Heart, Star, MapPin, Coffee, 
  Utensils, Wifi, Tv, Car, Wind 
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import img1 from '../images/13-1.jpg';
import img2 from '../images/13-2.jpg';
import img3 from '../images/13-3.jpg';
import img4 from '../images/16.jpg';

const About: React.FC = () => {
  useEffect(() => {
    document.title = '酒店介绍 - 锡龙酒店';
  }, []);

  const stats = [
    {
      value: '200+',
      label: '豪华客房',
      icon: <Clock className="w-6 h-6 text-primary-600" />
    },
    {
      value: '4',
      label: '特色餐厅',
      icon: <Utensils className="w-6 h-6 text-primary-600" />
    },
    {
      value: '1000+',
      label: '满意顾客',
      icon: <Users className="w-6 h-6 text-primary-600" />
    },
    {
      value: '50+',
      label: '荣誉奖项',
      icon: <Award className="w-6 h-6 text-primary-600" />
    }
  ];

  const facilities = [
    // {
    //   icon: <Coffee className="w-8 h-8 text-primary-600" />,
    //   title: '咖啡厅',
    //   description: '24小时营业的咖啡厅，提供各种饮品和小食。'
    // },
    {
      icon: <Utensils className="w-8 h-8 text-primary-600" />,
      title: '餐厅',
      description: '提供桌餐、自助餐及各类宴席，满足您的不同需求'
    },
    {
      icon: <Wifi className="w-8 h-8 text-primary-600" />,
      title: '高速WiFi',
      description: '覆盖全酒店的高速无线网络，随时保持连接。'
    },
    {
      icon: <Tv className="w-8 h-8 text-primary-600" />,
      title: '智能客房',
      description: '配备智能控制系统的现代化客房，提供便捷体验。'
    },
    {
      icon: <Car className="w-8 h-8 text-primary-600" />,
      title: '叫车服务',
      description: '免费为您预约网约车及代驾，省心便捷。'
    },
    {
      icon: <Wind className="w-8 h-8 text-primary-600" />,
      title: '空气净化',
      description: '全酒店配备高效空气净化系统，提供健康环境。'
    }
  ];

  const milestones = [
    {
      year: '1992',
      title: '锡龙酒店开业',
      description: '以中国龙文化为背景，秉承"卖大馍馍，赚小钱"的经营理念，让老百姓吃上可口的饭菜。'
    },
    {
      year: '2017-2018',
      title: '锡龙济邹店、太白店开业',
      description: '"家有喜事，圆满锡龙"，在婚宴市场打出了自己的品牌，同时锡龙太白店也是一家可以承接住宿、会议、宴会的综合性酒店。'
    },
    {
      year: '2022',
      title: '锡龙凤凰里店开业',
      description: '"二次创业，再出发"，经历过"新冠疫情"，尽管前路漫漫亦灿灿，锡龙定会拨开云雾见天日，守得云开见月明。'
    },
    {
      year: '2023',
      title: '锡龙唐口店、运河湾店开业',
      description: '"创锡龙品牌、树锡龙新风"，内抓服务，外塑品牌，真正做到把满意加惊喜带给所有人。'
    },
    {
      year: '2025',
      title: '锡龙维也纳店、华礼宴店开业',
      description: '"承锡龙传统，做同行先锋"，时至今日，三十三年的风雨历程，锡龙人一直在路上······'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              酒店介绍
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-200 mb-10 max-w-2xl"
            >
              了解锡龙酒店的故事、设施和服务，感受我们对卓越品质的不懈追求。
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                subtitle="我们的故事"
                title="关于锡龙酒店"
                description="锡龙大厦坐落于这座城市的西南角，是集餐饮、住宿、商旅和休闲于一体的一家综合性文化主题酒店。"
              />
              
              <p className="paragraph mb-6">
                据史料记载，大厦现所在的位置，正是康熙年间南下路经下榻的好地方。大厦择址于古运河之畔，与运河水仅几步之遥。是您在选择住宿或餐饮时，闹中取静的黄金地段和理想之选。大厦超大面积的地下停车场和48平方米的超大客房面积，即保障了您的出行无忧，又满足您的舒适度和尊荣感。特别是锡龙有着30多年的本土婚宴品牌，在当地有较强的知名度和影响力，是济宁名副其实的头部企业，更是老百姓心中首选的喜宴专家。
锡龙大厦距离小北湖旅游区12公里；距离曲阜60公里、邹城58公里、微山158公里、兖州飞机场44公里、………
              </p>
              
              <p className="paragraph mb-8">
                锡龙大厦地理位置优越，交通十分便利。子曰："有朋自远方来，不亦乐乎？"热情好客的锡龙大厦人欢迎您的光临！
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" to="/culture">
                  了解文化理念
                </Button>
                <Button variant="outline" to="/contact">
                  联系我们
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="relative h-full">
                <img 
                  src={img1} 
                  alt="锡龙酒店" 
                  className="rounded-lg shadow-lg h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="relative">
                  <img 
                    src={img2} 
                    alt="锡龙酒店" 
                    className="rounded-lg shadow-lg h-full object-cover"
                  />
                </div>
                <div className="relative">
                  <img 
                    src={img3}
                    alt="锡龙酒店" 
                    className="rounded-lg shadow-lg h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-primary-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Facilities Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="酒店设施"
            title="我们的设施与服务"
            description="锡龙酒店提供全方位的设施和服务，满足您在住宿期间的各种需求，让您的体验更加舒适便捷。"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 flex items-start gap-4 hover:shadow-xl transition-shadow"
              >
                <div className="shrink-0">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-neutral-800">{facility.title}</h3>
                  <p className="text-neutral-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                subtitle="地理位置"
                title="便捷的中心位置"
                description="锡龙酒店位于城市商业中心地带，交通便利，周围有众多景点、购物中心和商务区。"
              />
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-neutral-800">酒店地址</h4>
                    <p className="text-neutral-600">山东省济宁市任城区太白西路与济安桥路交叉口向西188米路北</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-neutral-800">距离主要地标</h4>
                    <p className="text-neutral-600">距离火车站3.5公里，汽车站4公里，高铁站13公里</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-neutral-800">周边景点</h4>
                    <p className="text-neutral-600">"三孔"是全国重点文物保护单位，国家5A级旅游景区;</p>
                    <p className="text-neutral-600">水泊梁山——是忠义文化的发祥地，国家4A级旅游景区；</p>
                    <p className="text-neutral-600">邹城峄山——是具有"小泰山"之称的国家著名4A级旅游景点；</p>
                    <p className="text-neutral-600">微山湖——是有着红色基因的革命精神传承地，也是全市乃至全国重要的红色教育基地之一；</p>
                    <p className="text-neutral-600">汶上宝相寺——被誉为"北方最著名的道场"，因灵踪塔内出土了佛牙、舍利子等而被誉为佛教的"第二法门寺"</p>
                  </div>
                </li>
              </ul>
              
              <Button variant="primary" to="/contact">
                获取导航指引
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src={img4}
                alt="酒店位置地图" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white">
                <MapPin className="w-10 h-10 text-primary-600 animate-bounce" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* History Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="发展历程"
            title="我们的成长与里程碑"
            description="自成立以来，锡龙酒店经历了多个重要的发展阶段，不断提升服务质量和扩展业务范围。"
            center
          />
          
          <div className="relative mt-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-100"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative grid grid-cols-1 md:grid-cols-5 mb-12 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                  <div className={`card p-6 ${index % 2 === 0 ? 'ml-auto mr-0' : 'ml-0 mr-auto'} max-w-md`}>
                    <span className="text-sm font-medium text-primary-600 mb-2 block">{milestone.year}</span>
                    <h3 className="text-xl font-bold mb-3 text-neutral-800">{milestone.title}</h3>
                    <p className="text-neutral-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="md:col-span-1 relative flex justify-center md:order-2">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-600 border-4 border-white z-10"></div>
                </div>
                
                <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/7545960/pexels-photo-7545960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <div className="absolute inset-0 bg-primary-900 bg-opacity-90"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              体验锡龙酒店的卓越服务
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg mb-8 text-neutral-300"
            >
              预订您的住宿，享受我们精心打造的豪华体验和贴心服务。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                variant="primary" 
                to="/contact"
                className="bg-white text-primary-900 hover:bg-neutral-100"
              >
                立即预订
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;