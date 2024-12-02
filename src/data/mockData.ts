export const articles = [
  {
    id: '1',
    title: '孕期营养全攻略',
    category: '营养指导',
    content: '怀孕期间的营养摄入对胎儿发育至关重要。本文将详细介绍孕期必需的营养素...',
    imageUrl: 'https://images.unsplash.com/photo-1493770348161-369560ae357d',
    date: '2024-03-15',
    author: '王医生',
    readTime: '10分钟'
  },
  {
    id: '2',
    title: '孕期运动指南',
    category: '运动健康',
    content: '适度运动有助于保持身体健康，为分娩做好准备...',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a',
    date: '2024-03-14',
    author: '李教练',
    readTime: '8分钟'
  },
  {
    id: '3',
    title: '新生儿护理要点',
    category: '育儿知识',
    content: '新生儿的护理需要格外注意，本文将为新手父母提供实用的护理技巧...',
    imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9',
    date: '2024-03-13',
    author: '张护士',
    readTime: '15分钟'
  }
];

export const doctors = [
  {
    id: '1',
    name: '李医生',
    specialty: '妇产科',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
    experience: 15,
    rating: 4.9,
    availability: ['周一', '周三', '周五'],
    price: 299
  },
  {
    id: '2',
    name: '王医生',
    specialty: '儿科',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
    experience: 10,
    rating: 4.8,
    availability: ['周二', '周四', '周六'],
    price: 259
  },
  {
    id: '3',
    name: '张医生',
    specialty: '心理咨询',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f',
    experience: 12,
    rating: 4.7,
    availability: ['周一', '周二', '周五'],
    price: 359
  }
];

export const mentalHealthCourses = [
  {
    id: '1',
    title: '产后抑郁预防与调节',
    instructor: '陈心理师',
    duration: '45分钟',
    level: '入门',
    imageUrl: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f',
    price: 99,
    rating: 4.8
  },
  {
    id: '2',
    title: '孕期情绪管理',
    instructor: '王心理师',
    duration: '60分钟',
    level: '进阶',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
    price: 129,
    rating: 4.9
  },
  {
    id: '3',
    title: '新手妈妈压力舒缓',
    instructor: '李心理师',
    duration: '30分钟',
    level: '入门',
    imageUrl: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17',
    price: 79,
    rating: 4.7
  }
];

export const products = [
  {
    id: '1',
    name: '有机孕妇维生素',
    description: '专为孕妇研发的天然有机维生素补充剂',
    price: 298,
    imageUrl: 'https://images.unsplash.com/photo-1584362917165-526a968579e8',
    category: '营养补充',
    rating: 4.8,
    stock: 100
  },
  {
    id: '2',
    name: '婴儿护肤套装',
    description: '温和无刺激的婴儿护肤产品套装',
    price: 199,
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f',
    category: '婴儿护理',
    rating: 4.9,
    stock: 50
  },
  {
    id: '3',
    name: '母乳储存袋',
    description: '安全卫生的母乳储存袋，双层密封',
    price: 59,
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    category: '母乳喂养',
    rating: 4.7,
    stock: 200
  }
];

export const postpartumCenters = [
  {
    id: '1',
    name: '阳光月子中心',
    location: '上海市浦东新区张杨路500号',
    rating: 4.8,
    price: 25800,
    imageUrl: 'https://images.unsplash.com/photo-1586105251261-72a756497a11',
    features: ['专业护理团队', '24小时医疗保障', '营养月子餐', '母婴SPA'],
    rooms: 30,
    reviews: [
      {
        id: '1',
        userId: 'user1',
        userName: '张女士',
        userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
        rating: 5,
        content: '环境很好，护理很专业，月子餐也很可口',
        date: '2024-03-15'
      }
    ],
    services: ['产后恢复', '新生儿护理', '母乳指导', '营养调理']
  },
  {
    id: '2',
    name: '馨月母婴中心',
    location: '北京市朝阳区建国路88号',
    rating: 4.9,
    price: 29800,
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
    features: ['五星级环境', '产后康复', '中医调理', '育婴指导'],
    rooms: 25,
    reviews: [
      {
        id: '2',
        userId: 'user2',
        userName: '李女士',
        userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        rating: 4.8,
        content: '设施很完善，服务很贴心，推荐给准妈妈们',
        date: '2024-03-14'
      }
    ],
    services: ['月子餐定制', '婴儿游泳', '推拿按摩', '产后瑜伽']
  }
];

export const communityPosts = [
  {
    id: '1',
    userId: 'user1',
    userName: '快乐妈咪',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: '今天宝宝满月啦！分享一下我的月子经验：1. 一定要保暖 2. 饮食要营养均衡 3. 适当运动很重要',
    images: ['https://images.unsplash.com/photo-1555252333-9f8e92e65df9'],
    likes: 156,
    comments: [
      {
        id: 'c1',
        userId: 'user2',
        userName: '温柔妈妈',
        userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        content: '恭喜恭喜！宝宝好可爱',
        createdAt: '2024-03-15T08:30:00Z'
      }
    ],
    tags: ['月子经验', '新生儿护理'],
    createdAt: '2024-03-15T08:00:00Z'
  }
];