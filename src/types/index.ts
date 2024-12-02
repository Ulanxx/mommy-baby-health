export interface Article {
  id: string;
  title: string;
  category: string;
  content: string;
  imageUrl: string;
  date: string;
}

export interface ConsultationSlot {
  id: string;
  doctorId: string;
  date: string;
  time: string;
  available: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  experience: number;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
}

export interface PostpartumCenter {
  id: string;
  name: string;
  location: string;
  rating: number;
  price: number;
  imageUrl: string;
  features: string[];
  rooms: number;
  reviews: Review[];
  services: string[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  content: string;
  date: string;
}

export interface CommunityPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  images?: string[];
  likes: number;
  comments: Comment[];
  tags: string[];
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  createdAt: string;
}