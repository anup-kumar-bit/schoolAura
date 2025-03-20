import Subscribe from "./Subscribe";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (<>
        <Subscribe />
        <footer className="relative bg-[#0d1028] text-white pt-10" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {/* Footer Links Section */}
            <div className="container mx-auto max-w-[1140px] py-10 border-b-[1px] border-gray-400" data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* About Us */}
                    <div>
                        <h4 className="text-xl font-semibold text-[#ff5202]">About Us</h4>
                        <p className="text-gray-400 mt-2 text-[14px]">
                            SchoolAura Smart Education Platform is a step towards making learning
                            better and effective for the students and helping them achieve their goals.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold text-[#ff5202]">Quick Links</h4>
                        <ul className="mt-2 text-gray-400 text-[14px]">
                            <li><a href="/about" className="hover:text-[#ff5202] flex items-center" > <IoIosArrowForward className="text-[#ff5202]" />About Us</a></li>
                            <li><a href="/benefits" className="hover:text-[#ff5202] flex items-center" > <IoIosArrowForward className="text-[#ff5202]" />Benefits</a></li>
                            <li><a href="/blogs" className="hover:text-[#ff5202] flex items-center" > <IoIosArrowForward className="text-[#ff5202]" />Blogs</a></li>
                            <li><a href="/features" className="hover:text-[#ff5202] flex items-center" > <IoIosArrowForward className="text-[#ff5202]" />Testimonials</a></li>
                            <li><a href="/features" className="hover:text-[#ff5202] flex items-center" > <IoIosArrowForward className="text-[#ff5202]" />Features</a></li>
                        </ul>
                    </div>

                    {/* Help & Support */}
                    <div>
                        <h4 className="text-xl font-semibold text-[#ff5202]">Help & Support</h4>
                        <ul className="mt-2 text-gray-400 text-[14px]">
                            <li><a href="#" className="hover:text-[#ff5202] flex items-center" > <IoIosArrowForward className="text-[#ff5202]" />Services</a></li>
                            <li><a href="#" className="hover:text-[#ff5202] flex items-center" > <IoIosArrowForward className="text-[#ff5202]" />Support</a></li>
                            <li><a href="#" className="hover:text-[#ff5202] flex items-center" > <IoIosArrowForward className="text-[#ff5202]" />Terms & Conditions</a></li>
                            <li><a href="/term_conditions" className="hover:text-[#ff5202] flex items-center" > <IoIosArrowForward className="text-[#ff5202]" />Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#ff5202] flex items-center" > <IoIosArrowForward className="text-[#ff5202]" />Sitemap</a></li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h4 className="text-xl font-semibold text-[#ff5202]">Follow Us</h4>
                        <div className="mt-4 flex space-x-4">
                            <a href="https://www.facebook.com/schoolaura/" target="_blank" className="text-white hover:text-[#ff5202] text-2xl"><FaFacebookF /></a>
                            <a href="https://instagram.com/schoolaura/" target="_blank" className="text-white hover:text-[#ff5202] text-2xl"><FaInstagram /></a>
                            <a href="https://twitter.com/school_aura" target="_blank" className="text-white hover:text-[#ff5202] text-2xl"><FaTwitter /></a>
                            <a href="https://wa.link/bop2zv" target="_blank" className="text-white hover:text-[#ff5202] text-2xl"><FaWhatsapp /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Contact Section */}
            <div className="py-6">
                <div className="container mx-auto max-w-[1140px] grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="flex items-center space-x-3">
                        <FaPhoneAlt className="text-white h-12 w-12 p-1 mr-4 bg-gray-400 rounded-full text-2xl" />
                        <div>
                            <h4 className="text-lg font-semibold text-[#ff5202] flex items-center">CALL US</h4>
                            <a href="tel:9540349392" className="text-gray-400">+91-9540349392</a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-white h-12 w-12 p-1 mr-4 bg-gray-400 rounded-full text-2xl" />
                        <div>
                            <h4 className="text-lg font-semibold text-[#ff5202] text-left">MAIL US</h4>
                            <a href="mailto:contact@schoolaura.com" className="text-gray-400">
                                contact@schoolaura.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <FaMapMarkerAlt className="text-white h-12 w-24 p-1 mr-4 bg-gray-400 rounded-full text-2xl" />
                        <div>
                            <h4 className="text-lg font-semibold text-[#ff5202] text-left">Office Address</h4>
                            <p className="text-gray-400 text-left">
                                E 44/3, Pocket D, Okhla Phase II, Okhla Industrial Area, New Delhi, Delhi 110020, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#06091b] py-8 flex justify-center text-gray-100  text-center flex-col md:flex-row md:justify-between px-4 text-[16px]">
                <p className="w-1/2">2021 © SchoolAura. All Rights Reserved</p>
                <p className="w-1/2">Design & Development by <a href="http://insoftlink.com" target="_blank" className="text-[#ff5202]">Insoftlink Software</a></p>
            </div>
        </footer>
    </>
    );
}
