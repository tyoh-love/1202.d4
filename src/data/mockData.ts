import { Video, Comment } from '../types';

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Building a Full-Stack Application from Scratch',
    description: 'Learn how to build a complete web application using React, Node.js, and PostgreSQL.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1280&q=80',
    duration: '15:24',
    views: 142503,
    createdAt: '2024-03-10T10:00:00Z',
    creator: {
      id: '1',
      name: 'TechMaster Pro',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80',
      subscribers: 524000,
    },
  },
  {
    id: '2',
    title: 'Modern Web Development Techniques',
    description: 'Explore the latest trends and best practices in web development.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1280&q=80',
    duration: '12:51',
    views: 98720,
    createdAt: '2024-03-09T15:30:00Z',
    creator: {
      id: '2',
      name: 'WebDev Journey',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
      subscribers: 312000,
    },
  },
  {
    id: '3',
    title: 'Mastering TypeScript in 2024',
    description: 'A comprehensive guide to TypeScript features and best practices.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1280&q=80',
    duration: '28:15',
    views: 75302,
    createdAt: '2024-03-08T09:15:00Z',
    creator: {
      id: '3',
      name: 'Code Academy',
      avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&q=80',
      subscribers: 891000,
    },
  },
];

export const mockComments: Comment[] = [
  {
    id: '1',
    content: 'This was incredibly helpful! Looking forward to more content like this.',
    createdAt: '2024-03-10T12:00:00Z',
    user: {
      id: '1',
      name: 'Sarah Johnson',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
    },
    likes: 243,
    replies: 12,
  },
  {
    id: '2',
    content: 'Great explanation of complex concepts. Could you make a follow-up video on advanced patterns?',
    createdAt: '2024-03-10T13:30:00Z',
    user: {
      id: '2',
      name: 'Mike Chen',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
    },
    likes: 156,
    replies: 8,
  },
];