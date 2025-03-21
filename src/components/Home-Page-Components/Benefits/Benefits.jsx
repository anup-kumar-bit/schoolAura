export default function Benefits() {
    return (
        <div className="container mx-auto max-w-[1140px] py-12 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-2 px-3"  data-aos="fade-up" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                {/* Left Content */}
                <div className="w-full lg:w-2/3 ">
                    <h2 className="text-[32px] sm:text-[40px] flex flex-col leading-[110%] font-bold text-gray-900">
                        Benefits of <span className="text-[#ff5202]">Online Education</span>
                    </h2>
                    <div className="w-32 border-b-[1px] border-[#212529] mt-[12px] mb-[35px]"></div>
                    <p className="text-[16px] text-[#212529] font-medium">
                        Online Education increases engagement by adding a human element.
                        Studying in the comfort of your own home is convenient, but there are
                        various other advantages of online study. It's especially beneficial for
                        students who aren't as self-sufficient or who are used to the traditional
                        educational model of "teacher and class."
                    </p>
                    <ul className="mt-3 text-[16px] text-[#212529] list-disc pl-5">
                        <li className="mt-1">Time and Location Flexibility</li>
                        <li className="mt-1">Find Unlimited Course Category</li>
                        <li className="mt-1">No Need to Carry Books</li>
                        <li className="mt-1">Get Access in any mobile, Tab, Laptop with your credential</li>
                        <li className="mt-1">Use your time when you are traveling, Outing, and free time</li>
                        <li className="mt-1">Exam Practice before exam</li>
                    </ul>
                </div>

                {/* Right Image */}
                <div className="relative w-full lg:w-1/3 flex justify-center ">
                <div className="absolute top-[25%] rounded-full left-[20%] w-[100px] h-[100px] bg-[#f1f1f1] -z-10 "></div>
                    <img
                        src="/spreading.png"
                        alt="Online Education Benefits"
                        className="w-[180px] sm:w-[245px] sm:max-h-[460px]  sm:max-w-[245px]"
                    />
                </div>
            </div>

            {/* Stats Section */}
            <div className="relative rounded-xs overflow-hidden -translate-y-9 z-0" data-aos="fade-up">
                <img src="/Clip2.png" alt="clip" className="h-full w-full absolute top-0 right-0 left-0  object-cover" />
                <div className="bg-gradient-to-b from-[#0d1028] to-[#0d1028]  text-white py-6 px-8  grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>   
                        <h3 className="text-[28px] sm:text-[40px] font-bold">10000+</h3>
                        <p className="text-[#ff5202]  text-[18px] sm:text-[24px]">Total Exams</p>
                    </div>
                    <div>
                        <h3 className="text-[28px] sm:text-[40px] font-bold">600+</h3>
                        <p className="text-[#ff5202]  text-[18px] sm:text-[24px]">Courses</p>
                    </div>
                    <div>
                        <h3 className="text-[28px] sm:text-[40px] font-bold">3000+</h3>
                        <p className="text-[#ff5202]  text-[18px] sm:text-[24px]">Success Stories</p>
                    </div>
                    <div>
                        <h3 className="text-[28px] sm:text-[40px] font-bold">4.5/5</h3>
                        <p className="text-[#ff5202]  text-[18px] sm:text-[24px]">Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
