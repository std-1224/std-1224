export default function SidebarIcon({ icon, label, active, onClick }: any) {
  return (
    <div className="flex items-center flex-col gap-1 justify-center cursor-pointer" onClick={() => onClick(label)}>
      <button className={`w-10 h-10 flex items-center justify-center cursor-pointer ${active === label ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}>
        {icon}
      </button>
      <p className={`uppercase text-[10px] font-medium transition-all duration-300 ${active === label ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}>
        {label}
      </p>
    </div>
  );
}