import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { VideoCard } from './components/VideoCard';
import { mockVideos } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      
      <main className="ml-64 pt-16">
        <div className="p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Recommended</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mockVideos.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );

}
export default App;
