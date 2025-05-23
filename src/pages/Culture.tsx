import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Shield, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import img1 from '../images/18.jpg' 

const Culture: React.FC = () => {
  useEffect(() => {
    document.title = '主题文化 - 锡龙酒店';
  }, []);

  const values = [
    {
      icon: <Heart className="w-10 h-10 text-primary-600" />,
      title: '管理',
      description: '为客人创造“满意加惊喜”，为伙伴创造“快乐加自豪”。'
    },
    {
      icon: <Target className="w-10 h-10 text-primary-600" />,
      title: '经营',
      description: '持续创造物超所值的客户价值。'
    },
    {
      icon: <Users className="w-10 h-10 text-primary-600" />,
      title: '人才',
      description: '知人善用，人尽其才。'
    },
    {
      icon: <Shield className="w-10 h-10 text-primary-600" />,
      title: '服务',
      description: '超越期望、创造惊喜。'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/13781312/pexels-photo-13781312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
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
              主题文化
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-200 mb-10 max-w-2xl"
            >
              了解锡龙酒店的文化理念、价值观和团队风貌，感受我们独特的服务文化和主题特色。
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src={img1} 
                  alt="锡龙酒店文化" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">传承与创新</h3>
                  <p className="text-neutral-200">融合中华文化精髓，创新服务理念</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                subtitle="我们的理念"
                title="愿景与使命"
                description="锡龙酒店秉持'超越期望、创造惊喜'的服务理念，致力于为每位宾客提供超越期望的尊贵体验。'以客为尊，追求卓越'的服务理念，致力于为每位宾客提供超越期望的尊贵体验。"
              />
              
              <div className="space-y-6 mb-8">
                <div className="card p-6 border-l-4 border-primary-600">
                  <h3 className="text-xl font-bold mb-2 text-neutral-800">我们的愿景</h3>
                  <p className="text-neutral-600">
                    把满意加惊喜带给所有人。
                  </p>
                </div>
                
                <div className="card p-6 border-l-4 border-secondary-600">
                  <h3 className="text-xl font-bold mb-2 text-neutral-800">我们的使命</h3>
                  <p className="text-neutral-600">
                    满意是基础，惊喜是目标。一个惊喜大于N个满意，把客户的满意度由满意提高到惊喜，向更高的服务水平递进
                  </p>
                </div>
              </div>
              
              <Button 
                variant="primary" 
                to="/about"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                了解更多
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="核心价值观"
            title="我们的价值理念"
            description="这些核心价值观指导着我们的日常运营和决策，是锡龙酒店文化的基石。"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-800">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      
      {/* Quote Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl font-serif mb-6">"</div>
              <p className="text-xl md:text-2xl italic mb-8">
                我们不仅仅是提供住宿，我们致力于创造难忘的体验，让每一位宾客都能感受到锡龙酒店独特的文化魅力和贴心服务。
              </p>
              <p className="font-medium">
                宋西龙--锡龙酒店董事长
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1769413/pexels-photo-1769413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <div className="absolute inset-0 bg-secondary-900 bg-opacity-80"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              体验锡龙酒店独特的文化魅力
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg mb-8 text-neutral-300"
            >
              预订您的住宿，感受传统与现代完美融合的独特体验。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button 
                variant="primary" 
                to="/contact"
                className="border-white text-secondary-900 hover:bg-neutral-100 "
              >
                立即预订
              </Button>
              <Button 
                variant="outline" 
                to="/about"
                className="border-white text-white hover:bg-white hover:text-secondary-900"
              >
                了解更多
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Culture;