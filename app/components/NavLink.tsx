import Link from "next/link";

export default function NavLink({ href, icon, text, isActive, onClick }: any) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`flex items-center gap-4 px-6 py-4 text-left border-b border-gray-800 transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
      >
        <span className="text-gray-500">{icon}</span>
        <span>{text}</span>
      </Link>
    );
  }