export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  views: number;
  createdAt: string;
  creator: {
    id: string;
    name: string;
    avatarUrl: string;
    subscribers: number;
  };
}

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  likes: number;
  replies: number;
}