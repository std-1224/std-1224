"use client";
import { useState } from 'react';
import StarsCanvas from './components/StarsCanvas';
import { BsList } from 'react-icons/bs';
import Sidebar from './components/Sidebar';
import MainContent from './contents/mainContent';

export default function Home() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('aboutMe');
  // aboutMe, works, stats, contact, guestBook, resume

  return (
    <div className={ `grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen ${sidebarOpen && 'bg-[rgba(0, 0, 0, 48)] z-50'}` }>
      {/* open sidebar icon */}
      <button className='fixed z-40 flex items-center justify-center text-white rounded-full top-6 right-6 w-8 h-8 bg-orange-300 lg:hidden' onClick={() => setSidebarOpen(true)}>
        <BsList size={20} />
      </button>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start sm:px-6">
        <MainContent setSidebarOpen={setSidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>

      {/* Background Stars */}
      <StarsCanvas />

      {/* Sidebar */}
      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />

    </div>
  );
}





