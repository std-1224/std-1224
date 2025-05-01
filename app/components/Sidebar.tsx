import { useState } from "react";
import { Mail, Github, Linkedin, X, MessagesSquare, FileText, MessageCircle, Eye, Grid, Send, User, BookOpen, } from 'lucide-react';
import SocialIcon from "./SocialIcon";
import NavLink from "./NavLink";

const Sidebar = ({ setSidebarOpen, sidebarOpen }: any) => {
    const [activeLink, setActiveLink] = useState('about');

    const handleNavClick = (link: any) => {
        setActiveLink(link);
    };
    return (
        <div className={`fixed lg:hidden inset-y-0 left-0 z-50 w-full sm:w-80 bg-gray-900 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Close button */}
            <div className="flex justify-end p-4">
                <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white">
                    <X size={24} />
                </button>
            </div>

            {/* Profile section */}
            <div className="flex flex-col items-center px-6 pb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img src="./Anh Nguyen Ngoc Phuc.jpeg" alt="Anh" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-white text-xl font-medium mb-4">Anh Nguyen Ngoc Phuc</h2>

                {/* Social links */}
                <div className="flex justify-center gap-3 mb-6">
                    <SocialIcon icon={<Mail size={16} />} />
                    <SocialIcon icon={<Github size={16} />} />
                    <SocialIcon icon={<Linkedin size={16} />} />
                    <SocialIcon icon={<MessageCircle size={16} />} />
                    <SocialIcon icon={<MessagesSquare size={16} />} />
                    <SocialIcon icon={<Send size={16} />} />
                </div>
            </div>

            {/* Navigation links */}
            <nav className="flex-1">
                <NavLink
                    href="/about"
                    icon={<User size={18} />}
                    text="About"
                    isActive={activeLink === 'about'}
                    onClick={() => handleNavClick('about')}
                />
                <NavLink
                    href="/resume"
                    icon={<FileText size={18} />}
                    text="Resume"
                    isActive={activeLink === 'resume'}
                    onClick={() => handleNavClick('resume')}
                />
                <NavLink
                    href="/works"
                    icon={<Eye size={18} />}
                    text="Works"
                    isActive={activeLink === 'works'}
                    onClick={() => handleNavClick('works')}
                />
                <NavLink
                    href="/stats"
                    icon={<Grid size={18} />}
                    text="Stats"
                    isActive={activeLink === 'stats'}
                    onClick={() => handleNavClick('stats')}
                />
                <NavLink
                    href="/contact"
                    icon={<Send size={18} />}
                    text="Contact"
                    isActive={activeLink === 'contact'}
                    onClick={() => handleNavClick('contact')}
                />
                <NavLink
                    href="/guest-book"
                    icon={<BookOpen size={18} />}
                    text="Guest Book"
                    isActive={activeLink === 'guest-book'}
                    onClick={() => handleNavClick('guest-book')}
                />
            </nav>

            {/* Download CV button */}
            <div className="px-6 py-6">
                <a
                    href="/assets/cv.pdf"
                    download
                    className="flex items-center justify-center py-3 px-6 rounded-full border border-gray-600 text-white hover:bg-gray-800 transition duration-300"
                >
                    DOWNLOAD CV
                </a>
            </div>

            {/* Footer */}
            <div className="py-4 text-center text-gray-500 text-sm">
                Anh's portfolio © 2025. All rights reserved.
            </div>
        </div>
    )
}
export default Sidebar;