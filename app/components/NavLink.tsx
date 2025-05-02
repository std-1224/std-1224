export default function NavLink({ icon, text, isActive, onClick }: any) {
    return (
      <button
        onClick={onClick}
        className={`flex cursor-pointer items-center gap-4 px-6 py-4 text-left border-b border-gray-800 transition-colors ${isActive ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
          }`}
      >
        <span className="text-gray-500">{icon}</span>
        <span>{text}</span>
      </button>
    );
  }