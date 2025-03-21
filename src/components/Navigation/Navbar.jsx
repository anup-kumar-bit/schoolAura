import React from "react";
import Logo from "./Logo/Logo";
import { FaSchool } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Head from "./Head";
import SlideBar from "./SliderBar";

export default function Navbar1() {
    return (
        <>
            <Head />
            <header className="font-sans text-[16px] bg-[#ff5202] text-white max-h-[60px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                <div className="w-full mx-auto flex justify-between items-center px-[30px] xl:px-[100px] shadow-sm relative ">
                    {/* ----------Logo School Aura ---------- */}
                    <Logo />

                    {/* Right Side: Navigation Links */}
                    <div className="hidden xl:flex items-center gap-4 ">
                        {/*----- Home -----*/}
                        <a href="/" className="hover:text-yellow-300 transition-colors">
                            Home
                        </a>

                        {/* ----------Drop Down Menu ----------- */}
                        <DropdownMenu >
                            <DropdownMenuTrigger className="flex items-center">Exam Solution <IoMdArrowDropdown className="text-2xl" /></DropdownMenuTrigger>
                            <DropdownMenuContent className={'rounded-sm  bg-[#00000062] p-0 border-red-500 '}>
                                <DropdownMenuItem className={'rounded-none border-b-[1px] border-red-500 text-white focus:text-yellow-300 focus:bg-transparent'}>1st-12th Exam</DropdownMenuItem>
                                <DropdownMenuItem className={'rounded-none border-b-[1px] border-red-500 text-white focus:text-yellow-300 focus:bg-transparent'}>Compitative Exam</DropdownMenuItem>
                                <DropdownMenuItem className={'rounded-none border-b-[1px] border-red-500 text-white focus:text-yellow-300 focus:bg-transparent'}>Entrance Exam</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        {/* ---------------------------------------------------- */}
                        <DropdownMenu >
                            <DropdownMenuTrigger className="flex items-center">Online Study <IoMdArrowDropdown className="text-2xl" /></DropdownMenuTrigger>
                            <DropdownMenuContent className={'rounded-sm  bg-[#00000062] p-0 border-red-500 '}>
                                <DropdownMenuItem className={'rounded-none border-b-[1px] border-red-500 text-white focus:text-yellow-300 focus:bg-transparent'}>1st-12th Exam</DropdownMenuItem>
                                <DropdownMenuItem className={'rounded-none border-b-[1px] border-red-500 text-white focus:text-yellow-300 focus:bg-transparent'}>Compitative Exam</DropdownMenuItem>
                                <DropdownMenuItem className={'rounded-none border-b-[1px] border-red-500 text-white focus:text-yellow-300 focus:bg-transparent'}>Entrance Exam</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        {/* ---------------------------------------------------- */}
                        <DropdownMenu >
                            <DropdownMenuTrigger className="flex items-center">Tutor Solution <IoMdArrowDropdown className="text-2xl" /></DropdownMenuTrigger>
                            <DropdownMenuContent className={'rounded-sm  bg-[#00000062] p-0 border-red-500 '}>
                                <DropdownMenuItem className={'rounded-none border-b-[1px] border-red-500 text-white focus:text-yellow-300 focus:bg-transparent'}>Find Tutor</DropdownMenuItem>
                                <DropdownMenuItem className={'rounded-none border-b-[1px] border-red-500 text-white focus:text-yellow-300 focus:bg-transparent'}>Become Tutor</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>


                        {/*----- Blogs -----*/}
                        <a href="/blogs" className=" hover:text-yellow-300 transition-colors">
                            Blogs
                        </a>

                        {/*--- Contact Us ---*/}
                        <a href="/contact" className=" hover:text-yellow-300 transition-colors">
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
