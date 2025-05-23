import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Award, Users, GraduationCap, 
  Heart, Coffee, MapPin, Clock, ArrowRight 
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const Careers: React.FC = () => {
  useEffect(() => {
    document.title = '人才招聘 - 锡龙酒店';
  }, []);

  const benefits = [
    {
      icon: <Award className="w-10 h-10 text-primary-600" />,
      title: '有竞争力的薪资',
      description: '我们提供行业内具有竞争力的薪资待遇，让您的付出得到合理回报。'
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-primary-600" />,
      title: '培训发展',
      description: '提供全面的培训和职业发展计划，助您实现职业目标和个人成长。'
    },
    {
      icon: <Heart className="w-10 h-10 text-primary-600" />,
      title: '健康福利',
      description: '完善的医疗保险和健康计划，关爱员工身心健康。'
    },
    {
      icon: <Coffee className="w-10 h-10 text-primary-600" />,
      title: '员工活动',
      description: '丰富多彩的员工活动和团建，增强团队凝聚力，提高工作满意度。'
    }
  ];

  const jobOpenings = [
    {
      title: '前台接待员',
      department: '前厅部',
      location: '济宁',
      type: '全职',
      description: '负责客人接待、入住和退房服务，提供酒店信息咨询，确保客人满意度。',
      requirements: [
        '酒店管理或相关专业学历',
        '良好的沟通和服务意识',
        '熟练的英语听说能力',
        '形象气质佳，仪表端庄'
      ]
    },
    {
      title: '客房服务员',
      department: '客房部',
      location: '济宁',
      type: '全职',
      description: '负责客房清洁和维护，确保客房整洁，为客人提供高质量的住宿环境。',
      requirements: [
        '初中及以上学历',
        '有酒店客房工作经验优先',
        '工作认真负责，注重细节',
        '有团队合作精神'
      ]
    },
    {
      title: '餐厅服务员',
      department: '餐饮部',
      location: '济宁',
      type: '全职',
      description: '负责餐厅客人接待、点餐和服务，确保客人享受舒适的用餐体验。',
      requirements: [
        '高中及以上学历',
        '有餐厅服务经验优先',
        '具备良好的服务意识和团队精神',
        '形象气质佳，仪表端庄'
      ]
    },
    {
      title: '营销经理',
      department: '营销部',
      location: '济宁',
      type: '全职',
      description: '负责酒店市场推广、活动策划和执行，提升酒店品牌知名度和影响力。',
      requirements: [
        '市场营销或相关专业本科及以上学历',
        '有酒店或旅游行业市场经验优先',
        '良好的策划能力和沟通能力',
        '能够承受工作压力，富有创意'
      ]
    }
  ];

  const testimonials = [
    {
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: '陈明',
      position: '前厅经理',
      tenure: '5年',
      quote: '在锡龙酒店工作的这5年，我从一名普通的前台接待成长为前厅经理。这里提供了广阔的发展空间和丰富的培训资源，让我能够不断学习和提升。'
    },
    {
      avatar: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: '林小红',
      position: '客房主管',
      tenure: '3年',
      quote: '锡龙酒店重视每位员工的发展，提供了完善的培训和晋升机制。在这里，我不仅学到了专业技能，还结交了很多优秀的同事，感觉像一个大家庭。'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
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
              人才招聘
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-200 mb-10 max-w-2xl"
            >
              加入锡龙酒店，开启您的职业新篇章。我们提供良好的工作环境和发展空间，与您共同成长。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                variant="primary" 
                href="#openings"
                className="bg-primary-600 hover:bg-primary-700"
              >
                查看职位
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="为什么选择我们"
            title="加入锡龙酒店的理由"
            description="锡龙酒店为员工提供良好的工作环境和发展平台，让您在实现自我价值的同时，享受工作乐趣。"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-800">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Culture */}
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
                subtitle="企业文化"
                title="我们的工作文化"
                description="锡龙酒店倡导积极向上、团结协作的工作文化，尊重每一位员工，激发员工的创造力和潜能。"
              />
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">团队合作</h4>
                    <p className="text-neutral-600">
                      我们相信团队的力量，鼓励员工之间相互合作、相互支持，共同达成目标。
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">持续学习</h4>
                    <p className="text-neutral-600">
                      我们提供各种培训和学习机会，鼓励员工不断提升自己的专业能力和个人素质。
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">关爱员工</h4>
                    <p className="text-neutral-600">
                      我们关心员工的身心健康，提供良好的工作环境和各种福利，让员工感受到家的温暖。
                    </p>
                  </div>
                </li>
              </ul>
              
              <Button 
                variant="primary" 
                to="/contact"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                了解更多
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="团队合作" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden row-span-2">
                  <img 
                    src="https://images.pexels.com/photos/9474077/pexels-photo-9474077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="员工培训" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="员工活动" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Job Openings */}
      <section id="openings" className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="职位空缺"
            title="最新招聘职位"
            description="我们正在寻找热情、专业的人才加入我们的团队，一起为客人提供卓越的服务体验。"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 border border-neutral-200 hover:border-primary-300 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800">{job.title}</h3>
                    <p className="text-primary-600">{job.department}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                      {job.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>立即</span>
                  </div>
                </div>
                
                <p className="text-neutral-600 mb-4">{job.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-neutral-800 mb-2">要求：</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-neutral-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button variant="primary" to="/contact" className="w-full">
                  立即申请
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Employee Testimonials */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="员工心声"
            title="听听他们怎么说"
            description="来自我们员工的真实反馈，了解他们在锡龙酒店的工作体验。"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-neutral-800">{testimonial.name}</h3>
                    <p className="text-primary-600">{testimonial.position}</p>
                    <p className="text-sm text-neutral-500">在职 {testimonial.tenure}</p>
                  </div>
                </div>
                <p className="text-neutral-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="申请流程"
            title="如何加入我们"
            description="了解锡龙酒店的招聘流程，开启您的职业新征程。"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-primary-100"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mb-12"
              >
                <div className="flex items-center mb-4">
                  <div className="absolute left-1/2 -ml-4 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="bg-white w-1/2 pr-8 text-right">
                    <h3 className="text-xl font-bold text-neutral-800">提交申请</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="pr-8 text-right">
                    <p className="text-neutral-600">
                      浏览我们的职位列表，选择适合您的职位，提交在线申请表和简历。
                    </p>
                  </div>
                  <div></div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative mb-12"
              >
                <div className="flex items-center mb-4">
                  <div className="absolute left-1/2 -ml-4 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="bg-white w-1/2 pl-8">
                    <h3 className="text-xl font-bold text-neutral-800">简历筛选</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div></div>
                  <div className="pl-8">
                    <p className="text-neutral-600">
                      我们的招聘团队会仔细审核您的申请和简历，评估您是否符合职位要求。
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-12"
              >
                <div className="flex items-center mb-4">
                  <div className="absolute left-1/2 -ml-4 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="bg-white w-1/2 pr-8 text-right">
                    <h3 className="text-xl font-bold text-neutral-800">面试</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="pr-8 text-right">
                    <p className="text-neutral-600">
                      通过初步筛选的候选人将被邀请参加面试，可能包括电话面试和现场面试。
                    </p>
                  </div>
                  <div></div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="flex items-center mb-4">
                  <div className="absolute left-1/2 -ml-4 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="bg-white w-1/2 pl-8">
                    <h3 className="text-xl font-bold text-neutral-800">录用</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div></div>
                  <div className="pl-8">
                    <p className="text-neutral-600">
                      成功通过面试的候选人将收到录用通知，并开始入职流程和培训。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 bg-primary-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              准备好加入我们了吗？
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg mb-8 text-primary-100"
            >
              无论您是刚刚踏入职场的新人，还是经验丰富的专业人士，锡龙酒店都为您提供广阔的发展平台。立即申请，成为我们团队的一员！
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
                className="bg-white text-primary-700 hover:bg-neutral-100"
              >
                立即申请
              </Button>
              <Button 
                variant="outline" 
                to="/contact"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                联系我们
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;