export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-10">
            {/* Newsletter Section */}
            <div className="bg-gray-800 py-6">
                <div className="container mx-auto max-w-[1140px] text-center">
                    <h2 className="text-3xl font-bold">
                        SUBSCRIBE OUR <span className="text-orange-500">NEWSLETTER</span>
                    </h2>
                    <div className="mt-4 flex justify-center">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="px-4 py-2 rounded-l-md w-80 text-gray-900"
                        />
                        <button className="bg-orange-500 px-6 py-2 rounded-r-md text-white font-semibold">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="container mx-auto max-w-[1140px] py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* About Us */}
                    <div>
                        <h4 className="text-xl font-semibold text-orange-500">About US</h4>
                        <p className="text-gray-400 mt-2">
                            SchoolAura Smart Education Platform is a step towards making learning
                            better and effective for the students and helping them achieve their goals.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold text-orange-500">Quick Links</h4>
                        <ul className="mt-2 text-gray-400">
                            <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
                            <li><a href="/benefits" className="hover:text-orange-500">Benefits</a></li>
                            <li><a href="/blogs" className="hover:text-orange-500">Blogs</a></li>
                            <li><a href="#" className="hover:text-orange-500">Testimonials</a></li>
                            <li><a href="/features" className="hover:text-orange-500">Features</a></li>
                        </ul>
                    </div>

                    {/* Help & Support */}
                    <div>
                        <h4 className="text-xl font-semibold text-orange-500">Help & Support</h4>
                        <ul className="mt-2 text-gray-400">
                            <li><a href="#" className="hover:text-orange-500">Services</a></li>
                            <li><a href="#" className="hover:text-orange-500">Support</a></li>
                            <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
                            <li><a href="/term_conditions" className="hover:text-orange-500">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-orange-500">Sitemap</a></li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h4 className="text-xl font-semibold text-orange-500">Follow Us</h4>
                        <div className="mt-4 flex space-x-4">
                            <a href="https://www.facebook.com/schoolaura/" target="_blank">
                                <img src="/fb.png" alt="Facebook" className="w-8 h-8" />
                            </a>
                            <a href="https://instagram.com/schoolaura/" target="_blank">
                                <img src="/insta.png" alt="Instagram" className="w-8 h-8" />
                            </a>
                            <a href="https://twitter.com/school_aura" target="_blank">
                                <img src="/twitter.png" alt="Twitter" className="w-8 h-8" />
                            </a>
                            <a href="https://wa.link/bop2zv" target="_blank">
                                <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Contact Section */}
            <div className="bg-gray-800 py-6">
                <div className="container mx-auto max-w-[1140px] grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="flex items-center space-x-3">
                        <i className="fas fa-phone-alt text-orange-500 text-2xl"></i>
                        <div>
                            <h4 className="text-lg font-semibold text-orange-500">CALL US</h4>
                            <a href="tel:9540349392" className="text-gray-400">+91-9540349392</a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <i className="fas fa-envelope text-orange-500 text-2xl"></i>
                        <div>
                            <h4 className="text-lg font-semibold text-orange-500">MAIL US</h4>
                            <a href="mailto:contact@schoolaura.com" className="text-gray-400">
                                contact@schoolaura.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <i className="fas fa-map-marker-alt text-orange-500 text-2xl"></i>
                        <div>
                            <h4 className="text-lg font-semibold text-orange-500">Office Address</h4>
                            <p className="text-gray-400">
                                E 44/3, Pocket D, Okhla Phase II, Okhla Industrial Area, New Delhi, Delhi 110020, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
