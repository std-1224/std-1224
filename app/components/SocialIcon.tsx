
export default function SocialIcon({ icon, href }: any) {
    return (
        <button
            // target="_blank"
            // rel="noopener noreferrer"
             onClick={(e) => {
                e.stopPropagation()
                window.open(href, '_blank')
            }}
            className="w-8 h-8 rounded-full cursor-pointer text-gray-400 hover:text-gray-600 flex items-center justify-center"
        >
            {icon}
        </button>
    );
}