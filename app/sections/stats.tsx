import {
    Mail,
    Github,
    Linkedin,
    MessageCircle,
    // Discord, 
    Send,
    Mic,
    ExternalLink
} from 'lucide-react';
import { BsMicrosoftTeams } from 'react-icons/bs';
import { FaDice } from 'react-icons/fa';
const Stats = ({ className }: any) => {
    return (
        <div className={`flex-1 p-8 overflow-y-auto ${className}`} style={{ scrollbarWidth: 'thin' }}>
            <div className="mb-12">
                <div className="flex items-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center mr-1">
                        <span className="text-xl font-bold text-white">S</span>
                    </div>
                    <h2 className="text-3xl font-bold">tatistics</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Main Stack</h3>
                        <p className="text-gray-400">React/Next.js, Vue/Nuxt.js, Node.js, Python, Django, AI/LLM Database Management</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Projects</h3>
                        <p className="text-gray-400">78+</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Clients</h3>
                        <p className="text-gray-400">42+</p>
                    </div>
                </div>
            </div>

            {/* Links Section */}
            <div>
                <div className="flex items-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center mr-1">
                        <span className="text-xl font-bold text-white">L</span>
                    </div>
                    <h2 className="text-3xl font-bold">inks</h2>
                </div>

                <div className="flex flex-col space-y-4">
                    <a href="mailto:aphuc1224.towork@gmail.com.com" className="group bg-gray-800 p-4 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                                <Mail className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <h3 className="font-bold">Mail</h3>
                                <p className="text-gray-400 text-sm">Please Contact via Email</p>
                            </div>
                        </div>
                        <div className="group">
                            <ExternalLink className="w-5 h-5 invisible group-hover:visible text-gray-500 group-hover:text-white transition-colors duration-200" />
                        </div>
                    </a>

                    <a href="https://github.com/std-1224" target="_blank" rel="noopener noreferrer" className="group bg-gray-800 p-4 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                                <Github className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold">Github</h3>
                                <p className="text-gray-400 text-sm">Star my projects on Github</p>
                            </div>
                        </div>
                        <div className="group">
                            <ExternalLink className="w-5 h-5 invisible group-hover:visible text-gray-500 group-hover:text-white transition-colors duration-200" />
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/anh-phuc-785348364/" target="_blank" rel="noopener noreferrer" className="group bg-gray-800 p-4 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                                <Linkedin className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-bold">Linkedin</h3>
                                <p className="text-gray-400 text-sm">Let's connect via Linkedin</p>
                            </div>
                        </div>
                        <div className="group">
                            <ExternalLink className="w-5 h-5 invisible group-hover:visible text-gray-500 group-hover:text-white transition-colors duration-200" />
                        </div>
                    </a>

                    <a href="https://wa.me/84978816300" target="_blank" rel="noopener noreferrer" className="group bg-gray-800 p-4 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                                <MessageCircle className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <h3 className="font-bold">WhatsApp</h3>
                                <p className="text-gray-400 text-sm">Let's connect via Whatsapp. +84 978816300</p>
                            </div>
                        </div>
                        <div className="group">
                            <ExternalLink className="w-5 h-5 invisible group-hover:visible text-gray-500 group-hover:text-white transition-colors duration-200" />
                        </div>
                    </a>

                    <a href="https://discord.com/users/kalkaudy" target="_blank" rel="noopener noreferrer" className="group bg-gray-800 p-4 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                                <FaDice className="w-6 h-6 text-indigo-500" />
                            </div>
                            <div>
                                <h3 className="font-bold">Discord</h3>
                                <p className="text-gray-400 text-sm">Let's connect via Discord. My username - kalkaudy</p>
                            </div>
                        </div>
                        <div className="group">
                            <ExternalLink className="w-5 h-5 invisible group-hover:visible text-gray-500 group-hover:text-white transition-colors duration-200" />
                        </div>
                    </a>

                    <a href="https://t.me/@Gilgamesh0621" target="_blank" rel="noopener noreferrer" className="group bg-gray-800 p-4 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                                <Send className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-bold">Telegram</h3>
                                <p className="text-gray-400 text-sm">Let's connect via Telegram</p>
                            </div>
                        </div>
                        <div className="group">
                            <ExternalLink className="w-5 h-5 invisible group-hover:visible text-gray-500 group-hover:text-white transition-colors duration-200" />
                        </div>
                    </a>

                    <a href="https://teams.microsoft.com/l/chat/?users=gilgamesh.1238.towork@outlook.com" className="group bg-gray-800 p-4 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                                <BsMicrosoftTeams className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="font-bold">Microsoft Teams</h3>
                                <p className="text-gray-400 text-sm">Let's connect via Microsoft Teams</p>
                            </div>
                        </div>
                        <div className="group">
                            <ExternalLink className="w-5 h-5 invisible group-hover:visible text-gray-500 group-hover:text-white transition-colors duration-200" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Stats;