
import MainContentSidebar from './contentSidebar';
import ContentProfile from './contentProfile';
import ContentSection from './contentSection';
import { useState } from 'react';
const MainContent = () => {

    const [activeTab, setActiveTab] = useState('aboutMe');
    // aboutMe, works, stats, contact, guestBook, resume

    return (
        <div className="flex bg-gray-900 text-white max-h-[70vh] overflow-y-auto">
            {/* Sidebar */}

            <MainContentSidebar setActiveTab={setActiveTab} activeTab={activeTab}/>

            {/* Main Content */}
            <div className="flex-1 flex">
                {/* Profile Section */}

                <ContentProfile />

                {/* Content Section */}
                <ContentSection activeTab={activeTab} className="w-[678px] h-[567px]"/>

            </div>

        </div>
    )
}
export default MainContent;