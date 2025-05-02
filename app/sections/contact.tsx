import { Send } from 'lucide-react'
import Map from '../components/Map';
import ContactSection from '../components/ContactForm';
const Contact = ({ className }: any) => {
    return (
        <div className={`${className} flex-1 p-8 overflow-y-auto`} style={{ scrollbarWidth: 'thin' }}>
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Send size={20} />
                Get in Touch
            </h2>
            <Map />
            <ContactSection />
        </div>
    )
}
export default Contact;