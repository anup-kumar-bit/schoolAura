import { FaPhoneAlt, FaWhatsapp, FaMobileAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Head() {
    return (
        <header className="font-sans text-xs sm:text-[14px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {/* -------------- Container --------------*/}
            <div className="w-full mx-auto flex justify-between px-[30px] xl:px-[100px] py-[5px] items-center bg-white  max-h-[38px]">
                {/* Contact Details */}
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="rounded-full text-white bg-[#ff5202] p-[4px] text-xl" />
                        <span>
                            <a href="tel:9540349392" className="hover:text-blue-600 transition-colors">
                                +91-9540349392
                            </a>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoMail className="rounded-full text-white bg-[#ff5202] p-[4px] text-[22px]" />
                        <a href="mailto:contact@schoolaura.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <span>contact@schoolaura.com</span>
                        </a>
                    </div>
                </div>

                {/* ---------------------- Social Media ----------------*/}
                <div className="hidden md:flex items-center ">

                    <div className="hidden lg:flex items-center ">
                        {/*------------------ WhatsApp --------------------*/}
                        <div className="flex items-center mx-[7px] rounded-sm bg-green-600 text-white px-2 py-1">
                            <a href="https://wa.link/bop2zv" target="_blank" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                                <FaWhatsapp className="text-xl" />
                                <span>WhatsApp</span>
                            </a>
                        </div>

                        {/*------------------ Mobile App --------------------*/}
                        <div className="flex items-center mx-[7px] rounded-sm text-white px-2 py-1 bg-[#a4c639]">
                            <a href="https://play.google.com/store/apps/details?id=com.schoolaura" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                                <FaMobileAlt className="text-xl" />
                                <span>Mobile App</span>
                            </a>
                        </div>
                    </div>

                    {/*------------------- Login and Registration -------------------*/}
                    <div className="flex items-center ">
                        <a href="/account/login" className="text-white px-3 py-1 hover:opacity-80 transition-opacity mx-[7px] rounded-sm bg-[#0d1028]">
                            Login
                        </a>
                        <a href="/account/register" className="text-white px-3 py-1 hover:opacity-80 transition-opacity mx-[7px] rounded-sm bg-[#0d1028]">
                            Registration
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}