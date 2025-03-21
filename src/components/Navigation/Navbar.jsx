import React from "react";
import Logo from "./Logo/Logo";
import { FaSchool } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Head from "./Head";
import SlideBar from "./SliderBar";
import Dropdown from "./Dropdown/Dropdown";

export default function Navbar1() {
    return (
        <>
            <Head />
            <header className="font-sans text-[16px] bg-[#ff5202] text-white max-h-[60px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                <div className="w-full mx-auto flex justify-between items-center px-[30px] xl:px-[100px] shadow-sm relative ">
                    {/* ----------Logo School Aura ---------- */}
                    <Logo />

                    {/* Right Side: Navigation Links */}
                    <div className="hidden xl:flex items-center gap-0 ">
                        {/*----- Home -----*/}
                        <a href="/" className="hover:text-yellow-300 transition-colors px-4 py-2">
                            Home
                        </a>
                        <Dropdown
                            title="Exam Solution"
                            items={["1st-12th Exam", "Competitive Exam", "Entrance Exam"]}
                        />
                        <Dropdown
                            title="Online Study"
                            items={["1st-12th Exam", "Competitive Exam", "Entrance Exam"]}
                        />
                        <Dropdown
                            title="Tutor Solution"
                            items={["Find Tutor", "Become Tutor"]}
                        />

                        {/*----- Blogs -----*/}
                        <a href="/blogs" className=" hover:text-yellow-300 transition-colors px-4 py-2  ">
                            Blogs
                        </a>

                        {/*--- Contact Us ---*/}
                        <a href="/contact" className=" hover:text-yellow-300 transition-colors px-4 py-2    ">
                            Contact Us
                        </a>

                        {/*--- School Management ---*/}
                        <div className="flex items-center gap-2 bg-[#0d1028] text-white px-4 py-2 rounded max-h-[34px]">
                            <FaSchool className="text-xl" />
                            <span>School Management</span>
                        </div>
                        {/* ---------drawer for phone---------- */}
                    </div>
                    <div className="block xl:hidden text-3xl">
                        <SlideBar />
                    </div>
                </div>
            </header>
        </>
    );
}
