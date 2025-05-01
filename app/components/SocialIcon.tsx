export default function SocialIcon({ icon }: any) {
    return (
        <button className="w-8 h-8 rounded-full cursor-pointer text-gray-400 hover:text-gray-600 flex items-center justify-center">
            {icon}
        </button>
    );
}