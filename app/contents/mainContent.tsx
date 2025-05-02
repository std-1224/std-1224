
import MainContentSidebar from './contentSidebar';
import ContentProfile from './contentProfile';
import ContentSection from './contentSection';
const MainContent = ({ setSidebarOpen, activeTab, setActiveTab }: any) => {
    return (
        <div className="flex bg-gray-900 text-white lg:h-[70vh] overflow-y-auto" >
            {/* Sidebar */}

            <MainContentSidebar setActiveTab={setActiveTab} activeTab={activeTab} setSidebarOpen={setSidebarOpen} />

            {/* Main Content */}
            <div className="flex-1 flex lg:w-4xl xl:w-6xl 2xl:w-7xl">
                {/* Profile Section */}

                {activeTab !== 'works' && <ContentProfile />}
                {/* Content Section */}
                <ContentSection activeTab={activeTab} className="w-full h-full" />
            </div>

        </div>
    )
}
export default MainContent;