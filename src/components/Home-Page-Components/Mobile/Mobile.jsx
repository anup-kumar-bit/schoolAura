export default function MobileAppSection() {
    return (
        <div className="bg-gray-100 my-[50px] overflow-hidden">
            <div className="w-full flex flex-col lg:flex-row items-center gap-6">
                {/* Left Side - Mobile Image */}
                <div className="w-[650px] sm:w-1/3 h-[400px]">
                    <img
                        src="/school_aura_app.jpg"
                        alt="School Aura Mobile App"
                        className="w-full h-full object-right object-fill"
                    />
                </div>

                {/* Right Side - Text Content */}
                <div className="w-full lg:w-2/3 p-3 py-12 sm:p-3"  style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    <h2 className="text-[32px] sm:text-[40px] leading-[120%]  font-bold text-[#0d1028]">
                        Easy to Access with 
                        <span className="text-[32px] sm:text-[40px]   text-orange-500"> Mobile APP</span>
                    </h2>
                    <p className="mt-1 text-gray-700 leading-relaxed">
                        If you're looking for easily accessible resources for your
                        classroom, then you're in the right place. Online learning
                        with the Android app is very easy to access. That's why
                        we've hand-curated the School Aura free app and website.
                        Easy to use and learn!
                    </p>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        To learn online, you need to be reasonably comfortable with
                        Smart Mobile Phones, Tablets, Laptops, and the internet.
                        The advantage of learning online via an android app is that
                        you can pause the video/audio whenever you need to take
                        notes or simply absorb what has been said. Another
                        fantastic feature of online learning is that you can
                        re-listen to different parts as needed, which is something
                        you can't do in a live lecture!
                    </p>

                    {/* Download Button */}
                    <button className="mt-3 bg-[#007bff] text-white px-5 py-2 text-[16px] rounded-sm  hover:bg-[#007bffef] transition">
                        Download Now
                    </button>
                </div>
            </div>
        </div>
    );
}
