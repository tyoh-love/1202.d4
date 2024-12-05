import { Play } from 'lucide-react';
import { Video } from '../types';
import { formatViews, formatTimeAgo } from '../utils/format';

interface VideoCardProps {
  video: Video;
  featured?: boolean;
}

export function VideoCard({ video, featured = false }: VideoCardProps) {
  return (
    <div className={`group relative ${featured ? 'col-span-2 row-span-2' : ''}`}>
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-1 text-xs text-white">
          {video.duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
          <Play className="h-12 w-12 text-white opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
      
      <div className="mt-3 flex gap-3">
        <img
          src={video.creator.avatarUrl}
          alt={video.creator.name}
          className="h-9 w-9 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-900 line-clamp-2">
            {video.title}
          </h3>
          <div className="mt-1 text-sm text-gray-500">
            <p>{video.creator.name}</p>
            <p>
              {formatViews(video.views)} views • {formatTimeAgo(video.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}