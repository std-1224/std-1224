import AboutMe from "../sections/aboutMe";
import Contact from "../sections/contact";
import GuestBook from "../sections/guestBook";
import Resume from "../sections/resume";
import Stats from "../sections/stats";
import Works from "../sections/works";

const ContentSection = ({ activeTab, className }: any) => {
    return (
        <>
            {/* Content based on activeTab */}
            {activeTab === 'aboutMe' && <AboutMe className={className}/>}
            {activeTab === 'works' && <Works className={className}/>}
            {activeTab === 'stats' && <Stats className={className}/>}
            {activeTab === 'contact' && <Contact className={className}/>}
            {activeTab === 'guestBook' && <GuestBook className={className}/>}
            {activeTab === 'resume' && <Resume className={className}/>}
        </>
    );
};

export default ContentSection;
