import {
  Home,
  Compass,
  Clock,
  ThumbsUp,
  PlaySquare,
  History,
  ListVideo,
  Settings,
  HelpCircle,
} from 'lucide-react';

const primaryLinks = [
  { icon: Home, text: 'Home' },
  { icon: Compass, text: 'Explore' },
  { icon: Clock, text: 'Shorts' },
  { icon: ListVideo, text: 'Subscriptions' },
];

const secondaryLinks = [
  { icon: PlaySquare, text: 'Library' },
  { icon: History, text: 'History' },
  { icon: ThumbsUp, text: 'Liked Videos' },
];

const footerLinks = [
  { icon: Settings, text: 'Settings' },
  { icon: HelpCircle, text: 'Help' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r bg-white px-2 py-4">
      <div className="space-y-6">
        <div className="space-y-2">
          {primaryLinks.map((link) => (
            <button
              key={link.text}
              className="flex w-full items-center gap-4 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <link.icon className="h-5 w-5" />
              <span>{link.text}</span>
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <div className="px-4 text-sm font-semibold text-gray-500">Library</div>
          {secondaryLinks.map((link) => (
            <button
              key={link.text}
              className="flex w-full items-center gap-4 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <link.icon className="h-5 w-5" />
              <span>{link.text}</span>
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {footerLinks.map((link) => (
            <button
              key={link.text}
              className="flex w-full items-center gap-4 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <link.icon className="h-5 w-5" />
              <span>{link.text}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}