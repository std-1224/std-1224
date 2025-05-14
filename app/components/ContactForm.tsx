import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({ fullName: '', email: '', message: '' });
    };

    return (
        <div className="w-full mx-auto mt-8">

            <ul className='grid grid-cols-2 mt-10 location gap-y-2 mb-10'>
                <li className='text-gray-300 text-base uppercase'>
                    address
                    <span className='mx-2'>. . . .</span>
                    <span className='text-gray-400 normal-case'>Hanoi, Vietnam</span>
                </li>
                <li className='text-gray-300 text-base uppercase'>
                    Email
                    <span className='mx-2'>. . . .</span>
                    <span className='text-gray-400 normal-case'>aphuc1224.towork@gmail.com.com</span>
                </li>
                <li className='text-gray-300 text-base uppercase'>
                    Freelance
                    <span className='mx-2'>. . . .</span>
                    <span className='text-gray-400 normal-case'>Available</span>
                </li>
            </ul>

            {/* Contact Form */}
            <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center mr-1">
                    <span className="text-2xl font-bold text-white">C</span>
                </div>
                <h2 className="text-4xl font-bold">ontact Form</h2>
            </div>

            <div className="space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full bg-gray-800 rounded p-4 text-white border border-gray-700 mb-3"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full bg-gray-800 rounded p-4 text-white border border-gray-700 mb-3"
                        />
                    </div>
                </div>

                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full bg-gray-800 rounded p-4 text-white border border-gray-700 mb-4 resize-none"
                        rows={4}
                    ></textarea>
                </div>

                <div className="text-left">
                    <button
                        onClick={handleSubmit}
                        className="bg-gray-700 cursor-pointer hover:bg-gray-600 py-2 px-4 rounded text-sm font-medium flex items-center gap-2"
                    >
                        SEND MESSAGE
                        <ArrowRight className="ml-2" size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;