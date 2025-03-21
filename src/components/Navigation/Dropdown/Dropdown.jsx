import { IoMdArrowDropdown } from "react-icons/io";
const Dropdown = ({ title = '', items = [] }) => {
    return (
        <div className="relative z-20 group">
            <button className="flex items-center gap-1 px-3 py-2 text-white bg-transparent hover:text-yellow-300 transition-all">
                {title}
                <IoMdArrowDropdown className="text-2xl transition-transform group-hover:rotate-180" />
            </button>
            {
                items.length > 0 && <div className="absolute hidden group-hover:flex flex-col bg-[#00000062] bg-opacity-80 border border-red-500 rounded-md w-40 shadow-lg">
                    {items.map((item, index) => (
                        <a
                            href="#"
                            key={index}
                            className="px-4 py-2 text-sm text-white border-b border-red-500 last:border-none cursor-pointer  hover:text-yellow-300 transition-all"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            }
        </div>
    );
};
export default Dropdown;