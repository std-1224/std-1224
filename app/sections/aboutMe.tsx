import {
    Monitor,
    Database,
    Award,
    Code,
    Globe,
    Cpu,
    Palette
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import '../components/basic-style.css';


const AboutMe = ({ className }: any) => {

    const testimonials = [
        {
            quote: "Working with Antero has been a pleasure. He provided excellent clarity on project requirements, scope and the vision of the project. All expectations and requirements were communicated upfront, and he was responsive to any of my requests for clarification. Antero - I enjoyed working with you and hope to have a long business relationship.",
            author: "Arthur C.",
            position: "CMO At Cropper"
        },
        {
            quote: "Antero delivered our project ahead of schedule with exceptional quality. His blockchain expertise helped us overcome several technical challenges we'd been struggling with for months.",
            author: "Jane D.",
            position: "CTO at ARSNL"
        }
    ];

    return (
        <div className={`${className} flex-1 p-8 overflow-y-auto`} style={{ scrollbarWidth: 'thin' }}>
            {/* About Me Section */}
            <section className="p-2">
                <h2 className="text-2xl font-bold mb-8">
                    <span className="text-amber-500">A</span>bout Me
                </h2>

                <div className="mb-10">
                    <p className="mb-6 leading-relaxed">
                        Experienced Senior Full Stack Engineer with 8 years of web and blockchain
                        development expertise. Led a $150K research project, deemed a "silver standard" by
                        the client, and recognized as an ACM prize winner during college. Fine-tuned AI/ML-
                        based algorithms, resulting in a 2-fold increase in client revenue. Committed to
                        delivering high-quality code and clear communication, providing top-tier customer
                        support for building exceptional online reputations.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        <div className="flex items-center">
                            <span className="font-bold mr-2">AGE</span>
                            <span className="mx-2">. . . .</span>
                            <span className="text-gray-300">30</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-bold mr-2">RESIDENCE</span>
                            <span className="mx-2">. . . .</span>
                            <span className="text-gray-300">Hanoi</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-bold mr-2">FREELANCE</span>
                            <span className="mx-2">. . . .</span>
                            <span className="text-gray-300">Available</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-bold mr-2">ADDRESS</span>
                            <span className="mx-2">. . . .</span>
                            <span className="text-gray-300">Hanoi, Vietnam</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="p-2">
                <h2 className="text-2xl font-bold mb-8">
                    <span className="text-amber-500">M</span>y Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 border border-gray-800 rounded-lg">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-amber-500">
                                <Monitor className="text-amber-500" size={24} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-center mb-4">Front-End</h3>
                        <p className="text-gray-400 text-center">
                            Modern and mobile-ready website that will help you reach all of your marketing.
                        </p>
                    </div>

                    <div className="p-6 border border-gray-800 rounded-lg">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-amber-500">
                                <Cpu className="text-amber-500" size={24} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-center mb-4">Blockchain</h3>
                        <p className="text-gray-400 text-center">
                            Blockchain consulting, development, integration, and education for various industries.
                        </p>
                    </div>

                    <div className="p-6 border border-gray-800 rounded-lg">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-amber-500">
                                <Database className="text-amber-500" size={24} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-center mb-4">Back-End</h3>
                        <p className="text-gray-400 text-center">
                            Back-end with SQL / NoSQL DB and API written in a standard express router or tRPC.
                        </p>
                    </div>

                    <div className="p-6 border border-gray-800 rounded-lg">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-amber-500">
                                <Palette className="text-amber-500" size={24} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-center mb-4">UI/UX Design</h3>
                        <p className="text-gray-400 text-center">
                            Modern user interface trends with a highly professional and unique design.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="p-2">
                <h2 className="text-2xl font-bold mb-8">
                    <span className="text-amber-500">C</span>lients
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex items-center justify-center p-4 bg-gray-800 bg-opacity-30 rounded-lg">
                        <span className="text-blue-400 font-bold text-xl">LinkedIn</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-800 bg-opacity-30 rounded-lg">
                        <span className="text-red-500 font-bold text-xl">ARSNL</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-800 bg-opacity-30 rounded-lg">
                        <span className="text-gray-300 font-bold text-xl">Cropper</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-800 bg-opacity-30 rounded-lg">
                        <span className="text-red-400 font-bold text-xl">VINCIT</span>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="p-2">
                <h2 className="text-2xl font-bold mb-8">
                    <span className="text-amber-500">T</span>estimonials
                </h2>

                <Swiper pagination={{
                    clickable: true,
                }} modules={[Pagination]} navigation={true} loop={true} spaceBetween={30} className="mySwiper" >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative bg-gray-800 bg-opacity-30 p-8 h-full w-full">
                                <div className="flex flex-col items-center">
                                    <div className="mb-4 text-center">
                                        <p className="italic text-gray-400 px-4 md:px-8 mb-4 tracking-wide">
                                            ❝ &nbsp; {testimonial.quote} &nbsp;❞
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                                            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                                <svg className="w-12 h-12 text-gray-500" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor" />
                                                    <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h4 className="font-bold text-lg">{testimonial.author}</h4>
                                        <p className="text-sm text-gray-400">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </section>

            {/* Fun Facts Section */}
            <section className="p-2">
                <h2 className="text-2xl font-bold mb-8">
                    <span className="text-amber-500">F</span>un Facts
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border border-amber-500 mb-4">
                            <Award className="text-amber-500" size={24} />
                        </div>
                        <h3 className="text-base text-gray-300 font-bold">17+ Awards Won</h3>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border border-amber-500 mb-4">
                            <Code className="text-amber-500" size={24} />
                        </div>
                        <h3 className="text-base text-gray-300 font-bold">500K+ Lines Written</h3>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border border-amber-500 mb-4">
                            <Globe className="text-amber-500" size={24} />
                        </div>
                        <h3 className="text-base text-gray-300 font-bold">6+ Countries Visited</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AboutMe;