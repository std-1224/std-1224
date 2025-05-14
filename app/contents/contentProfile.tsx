import Slider from "../components/Slider";
import SocialIcon from "../components/SocialIcon";
import { Mail, Github, Linkedin, Download } from 'lucide-react';

const ContentProfile = () => {
    const handleDownloadCV = () => {
        const fileName = 'CV_Anh_Phuc.pdf';
        const filePath = `./${fileName}`;
        const link = document.createElement('a');
        link.href = filePath;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className="lg:w-80 bg-gray-800 lg:flex flex-col relative hidden">
            {/* Background Image */}
            <Slider />
            {/* <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('./footer.jpg" }}></div> */}

            {/* Profile Info */}
            <div className="flex flex-col items-center -mt-14 px-6 z-10">

                <div className="rounded-full border-4 border-gray-800 overflow-hidden w-28 h-28">
                    <img src="./Anh Phuc.jpg" alt="Anh" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-xl font-bold mt-4">Anh Phuc</h1>
                <p className="text-yellow-500 mb-6">Full Stack Engineer</p>

                {/* Social Links */}
                <div className="flex gap-2 mb-6">
                    <SocialIcon icon={<Mail size={18} />} href="mailto:aphuc1224.towork@gmail.com" />
                    <SocialIcon icon={<Github size={18} />} href="https://github.com/std-1224" />
                    <SocialIcon icon={<Linkedin size={18} />} href="https://www.linkedin.com/in/anh-phuc-785348364/" />
                </div>

                <div className='flex flex-row w-full absolute bottom-0 h-12'>

                    {/* Download CV Button */}
                    <button onClick={() => handleDownloadCV()} className="flex w-1/2 items-center border-r-1 cursor-pointer text-gray-400 justify-center gap-2 bg-gray-700 hover:bg-gray-600 hover:text-gray-300 py-2 px-3 text-sm">
                        <Download size={16} className="animate-bounce text-yellow-400" />
                        <span className="sm:text-[10px] lg:text-[14px]">DOWNLOAD CV</span>
                    </button>

                    {/* LinkedIn Button */}
                    <button onClick={(e) => {
                        e.stopPropagation()
                        window.open("https://www.linkedin.com/in/anh-phuc-785348364/", '_blank')
                    }} className="w-1/2 flex items-center justify-center cursor-pointer text-gray-400 gap-2 bg-gray-700 hover:bg-gray-600 hover:text-gray-300 py-2 px-3 text-sm">
                        <Linkedin size={16} />
                        <span className="sm:text-[10px] lg:text-[14px]">MY LINKEDIN</span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ContentProfile;