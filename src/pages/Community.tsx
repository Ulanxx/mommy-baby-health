import React, { useState } from 'react';
import { Heart, MessageCircle, Image, Send } from 'lucide-react';
import { communityPosts } from '../data/mockData';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

export function Community() {
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if (!newPost.trim()) return;
    // 这里添加发帖逻辑
    setNewPost('');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">分享你的故事</h2>
          <div className="space-y-4">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="分享你的育儿经验和感悟..."
              className="w-full h-32 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <div className="flex justify-between items-center">
              <button className="flex items-center text-gray-600 hover:text-rose-500">
                <Image className="h-5 w-5 mr-2" />
                添加图片
              </button>
              <button
                onClick={handlePost}
                className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition-colors"
              >
                发布
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {communityPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <img
                    src={post.userAvatar}
                    alt={post.userName}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">{post.userName}</h3>
                    <p className="text-sm text-gray-500">
                      {format(new Date(post.createdAt), 'yyyy年MM月dd日 HH:mm')}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-600">{post.content}</p>

                {post.images && post.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {post.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Post image ${index + 1}`}
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center space-x-6">
                  <button className="flex items-center text-gray-600 hover:text-rose-500">
                    <Heart className="h-5 w-5 mr-1" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-rose-500">
                    <MessageCircle className="h-5 w-5 mr-1" />
                    <span>{post.comments.length}</span>
                  </button>
                </div>

                {post.comments.length > 0 && (
                  <div className="mt-4 space-y-4">
                    <div className="h-px bg-gray-200" />
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="flex items-start space-x-4">
                        <img
                          src={comment.userAvatar}
                          alt={comment.userName}
                          className="h-8 w-8 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-baseline">
                            <h4 className="font-medium text-gray-900">{comment.userName}</h4>
                            <span className="ml-2 text-sm text-gray-500">
                              {format(new Date(comment.createdAt), 'HH:mm')}
                            </span>
                          </div>
                          <p className="text-gray-600">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="写下你的评论..."
                    className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <button className="text-rose-500 hover:text-rose-600">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}