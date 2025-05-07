
import MainContentSidebar from './contentSidebar';
import ContentProfile from './contentProfile';
import ContentSection from './contentSection';
const MainContent = ({ setSidebarOpen, activeTab, setActiveTab }: any) => {
    return (
        <div className="flex bg-gray-900 text-white sm:h-[60vh] lg:h-[70vh] overflow-y-auto h-[calc(100vh-100px)]" >
            {/* Sidebar */}

            <MainContentSidebar setActiveTab={setActiveTab} activeTab={activeTab} setSidebarOpen={setSidebarOpen} />

            {/* Main Content */}
            <div className="flex-1 flex lg:w-4xl xl:w-6xl 2xl:w-7xl md:w-[720px] w-[calc(100vw-100px)] mx-auto">
                {/* Profile Section */}

                {activeTab !== 'works' && activeTab !== 'contact' && <ContentProfile />}
                {/* Content Section */}
                <ContentSection activeTab={activeTab} className="w-full h-full" />
            </div>

        </div>
    )
}
export default MainContent;