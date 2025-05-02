import SidebarIcon from "../components/SidebarIcon";
import { Eye, Send, User, BookOpen, PanelLeft, BarChart2 } from 'lucide-react';
const MainContentSidebar = ({setActiveTab, activeTab, setSidebarOpen}: any) => {
    return (
        <div className="w-[74px] bg-gray-800 flex flex-col items-center py-4 border-r border-gray-700">
            <button className="p-3 hover:bg-gray-700 rounded-lg mb-8 cursor-pointer" onClick={() => setSidebarOpen(true)}>
                <PanelLeft size={20} />
            </button>
            <div className="flex-1 flex flex-col gap-2">
                <SidebarIcon icon={<BookOpen size={20} />} label="resume" active={activeTab} onClick={setActiveTab}/>
                <SidebarIcon icon={<User size={20} />} label="aboutMe" active={activeTab}  onClick={setActiveTab}/>
                <SidebarIcon icon={<Eye size={20} />} label="works" active={activeTab}  onClick={setActiveTab}/>
                <SidebarIcon icon={<BarChart2 size={20} />} label="stats" active={activeTab}  onClick={setActiveTab}/>
                <SidebarIcon icon={<Send size={20} />} label="contact" active={activeTab}  onClick={setActiveTab}/>
                <SidebarIcon icon={<BookOpen size={20} />} label="guestBook" active={activeTab}  onClick={setActiveTab}/>
            </div>
        </div>
    )
}
export default MainContentSidebar;