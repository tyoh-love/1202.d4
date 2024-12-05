import { Search, Upload, Bell, Menu, User, Play } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b bg-white">
      <div className="flex h-full items-center px-4">
        <div className="flex items-center gap-4">
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <Menu className="h-5 w-5" />
          </button>
          <a href="/" className="flex items-center gap-1">
            <Play className="h-8 w-8 text-red-600" />
            <span className="text-xl font-semibold">VideoHub</span>
          </a>
        </div>

        <div className="mx-auto max-w-2xl flex-1 px-4">
          <div className="flex">
            <div className="flex flex-1 items-center rounded-l-full border border-r-0 bg-gray-50 px-4">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent px-3 py-2 outline-none"
              />
            </div>
            <button className="flex items-center rounded-r-full border bg-gray-100 px-6 hover:bg-gray-200">
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <Upload className="h-5 w-5" />
          </button>
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <Bell className="h-5 w-5" />
          </button>
          <button className="rounded-full p-1 hover:bg-gray-100">
            <User className="h-8 w-8" />
          </button>
        </div>
      </div>
    </header>
  );
}