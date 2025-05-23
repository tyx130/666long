import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Coffee, Utensils, Wifi, Car, Search } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import lb1 from '../images/2-1.jpg';
import lb2 from '../images/2-2.jpg';
import lb3 from '../images/2-3.jpg';
import img4 from '../images/4.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';
import img10 from '../images/10.jpg';


const Home: React.FC = () => {
  const heroSwiperRef = useRef(null);

  useEffect(() => {
    document.title = '锡龙酒店 - 尊享奢华体验，品味精致生活';
  }, []);

  const featuresData = [
    {
      icon: <Coffee className="w-10 h-10 text-primary-600" />,
      title: '精致餐饮',
      description: '提供多种风味的精致餐饮，满足您的味蕾需求。'
    },
    {
      icon: <Wifi className="w-10 h-10 text-primary-600" />,
      title: '高速网络',
      description: '覆盖全酒店的高速WiFi网络，随时保持与世界的连接。'
    },
    {
      icon: <Users className="w-10 h-10 text-primary-600" />,
      title: '会议服务',
      description: '专业的会议设施与服务，满足您的商务需求。'
    },
    {
      icon: <Car className="w-10 h-10 text-primary-600" />,
      title: '叫车服务',
      description: '免费为您预约网约车，省心便捷。'
    }
  ];

  const roomsData = [
    {
      image: img7,
      title: '豪华套房',
      price: '¥1,899',
      description: '宽敞明亮的豪华套房，配备高档设施，让您尽享舒适与私密。'
    },
    {
      image: img8,
      title: '豪华大床房',
      price: '¥389',
      description: '为商务旅客精心设计的行政客房，配备办公设施，满足您的工作需求。'
    },
    {
      image: img9,
      title: '豪华亲子房',
      price: '¥399',
      description: '温馨宽敞的家庭套房，适合带孩子的家庭入住，提供温馨舒适的住宿体验。'
    },
    {
      image: img10,
      title: '豪华双床房',
      price: '¥359',
      description: '独立不孤单，共享更温馨。为结伴出行的您，提供双倍舒适与便利。'
    }
  ];

  const testimonialsData = [
    {
      content: '锡龙酒店的服务实在太棒了，员工们都非常热情友好，房间干净整洁，设施齐全。我一定会再次入住！',
      author: '张女士',
      position: '商务旅客'
    },
    {
      content: '这是我住过的最好的酒店之一，地理位置优越，交通便利，周围有很多景点和购物中心，非常方便。',
      author: '李先生',
      position: '度假旅客'
    },
    {
      content: '酒店的餐饮服务一流，早餐非常丰盛，中餐厅的菜品也很地道，尤其是他们的特色菜，非常美味。',
      author: '王先生',
      position: '美食爱好者'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Swiper
          ref={heroSwiperRef}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >
          <SwiperSlide>
            <div 
              className="h-full bg-cover bg-center relative flex items-center"
              style={{ backgroundImage: `url(${lb1})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="container-custom relative z-10 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">尊享奢华体验</h1>
                  <p className="text-xl md:text-2xl mb-8 text-neutral-200">锡龙酒店，为您开启华礼体验</p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary" to="/about" icon={<ArrowRight size={18} />} iconPosition="right">
                      了解更多
                    </Button>
                    <Button variant="outline" to="/contact" className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-900">
                      立即预订
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div 
              className="h-full bg-cover bg-center relative flex items-center"
              style={{ backgroundImage: `url(${lb2})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="container-custom relative z-10 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">品味精致生活</h1>
                  <p className="text-xl md:text-2xl mb-8 text-neutral-200">锡龙酒店，为您提供最舒适的体验</p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary" to="/about" icon={<ArrowRight size={18} />} iconPosition="right">
                      了解更多
                    </Button>
                    <Button variant="outline" to="/contact" className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-900">
                      立即预订
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div 
              className="h-full bg-cover bg-center relative flex items-center"
              style={{ backgroundImage: `url(${lb3})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="container-custom relative z-10 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">商务休闲之选</h1>
                  <p className="text-xl md:text-2xl mb-8 text-neutral-200">锡龙酒店，您的完美商务伙伴</p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary" to="/about" icon={<ArrowRight size={18} />} iconPosition="right">
                      了解更多
                    </Button>
                    <Button variant="outline" to="/contact" className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-900">
                      立即预订
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        
        {/* Search Box */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2">
          <div className="container-custom">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="check-in" className="block text-sm font-medium text-neutral-700 mb-1">入住日期</label>
                  <input 
                    type="date" 
                    id="check-in" 
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="check-out" className="block text-sm font-medium text-neutral-700 mb-1">退房日期</label>
                  <input 
                    type="date" 
                    id="check-out" 
                    className="form-input"
                  />
                </div>
                <div className="flex items-end">
                  <button className="btn-primary w-full flex justify-center items-center gap-2">
                    <Search size={18} />
                    立即查询
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding mt-24 md:mt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src={img4} 
                  alt="锡龙酒店外观" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-neutral-800 font-semibold">4.9/5.0</span>
                  </div>
                  <p className="text-sm text-neutral-600 mt-1">基于超过2000条评价</p>
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
                subtitle="关于我们"
                title="尊贵的入住体验"
                description="锡龙大厦客房为您打造了一个温馨舒适的私人空间。房间布置典雅，家具精致，宽敞明亮，每一处细节都体现着高品质的生活态度。柔软的床铺让您尽享舒适睡眠，纯棉的床品为您带来亲肤的触感。"
              />
              
              <p className="paragraph mb-6">
                拥有超过90间豪华客房和套房，48平方米的超大客房面积，满足您的舒适度和尊荣感。此外，我们还提供24小时管家服务，随时满足您的需求。入住锡龙大厦，您将体验到无与伦比的舒适和便捷。
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-neutral-700">四星级设施</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-neutral-700">高端商务会议</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-neutral-700">优质餐饮服务</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-neutral-700">专业管家团队</span>
                </div>
              </div>
              
              <Button variant="primary" to="/about" icon={<ArrowRight size={18} />} iconPosition="right">
                探索更多
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="酒店特色"
            title="专属四星级服务"
            description="我们提供一系列精选服务，满足您在旅途中的各种需求，让您的住宿体验更加舒适便捷。"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center hover:translate-y-[-10px]"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-800">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Rooms Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="豪华客房"
            title="精选套房与客房"
            description="我们提供各种类型的豪华客房和套房，满足不同宾客的需求，让您在旅途中享受宾至如归的舒适体验。"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomsData.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.title} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    每晚 {room.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-neutral-800">{room.title}</h3>
                  <p className="text-neutral-600 mb-4">{room.description}</p>
                  <Button 
                    variant="outline" 
                    to="/contact" 
                    className="w-full"
                  >
                    立即预订
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="primary" to="/about" icon={<ArrowRight size={18} />} iconPosition="right">
              查看全部房型
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-medium uppercase tracking-wider mb-2 text-primary-300"
            >
              特别优惠
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              享受我们的夏季特惠套餐
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-8 text-neutral-300"
            >
              现在预订可享受7折优惠，还有免费早餐、免费洗衣服务。优惠有限，立即行动！
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button variant="primary" to="/contact">
                立即预订
              </Button>
              <Button 
                variant="outline" 
                to="/about"
                className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-900"
              >
                了解更多
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="宾客评价"
            title="客户真实反馈"
            description="听听我们尊贵的客户对锡龙酒店的评价，了解他们的真实住宿体验。"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-neutral-800">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block text-sm font-medium uppercase tracking-wider mb-2 text-primary-200"
              >
                订阅我们
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                获取最新优惠和活动信息
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg mb-8 text-primary-100"
              >
                订阅我们的电子邮件，第一时间获取锡龙酒店的最新优惠、活动和新闻。
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="请输入您的姓名" 
                    className="form-input"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="form-label">邮箱地址</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="请输入您的邮箱地址" 
                    className="form-input"
                  />
                </div>
                <Button 
                  variant="primary" 
                  type="submit"
                  className="w-full"
                >
                  立即订阅
                </Button>
                <p className="text-xs text-neutral-500 mt-4 text-center">
                  订阅即表示您同意接收我们的邮件。您可以随时取消订阅。
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;