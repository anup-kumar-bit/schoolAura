import '../../../App.css'

export default function WhySchoolAura() {
    return (
        <div className="container h-[975px] sm:h-[830px] lg:h-[700px]  mx-auto max-w-[1140px] overflow-hidden mt-10">
            <div className="flex flex-col lg:flex-row h-[332px]  ">
                {/* Left Section */}
                <div className="lg:w-[372px] lg:h-[477px] relative flex flex-col items-center text-center  lg:text-left  z-0">
                    <div className="bg-gray-200 p-4 w-full sm:w-auto  h-[477px] bg-custom-gradient">
                        <img src="/Clip.png" alt="clip" className="w-full h-auto" />
                    </div>
                    <ul className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white w-[240px] ">
                        <li className='text-[28px]'>- 256 Courses</li>
                        <li className='text-[28px]'>- Expert Teachers</li>
                        <li className='text-[28px]'>- Online Education</li>
                    </ul>

                </div>

                {/* Right Section */}
                <div className="lg:w-2/3 px-[20px] md:px-[30px] lg:px-[60px] py-[20px]">
                    <h2 className="text-[34px] font-bold text-gray-800">
                        Why Online Study With SchoolAura
                    </h2>
                    <p className="mt-2 text-[16px] text-[#212529]">
                        The world is changing for the better. Because of the advancement of
                        technology, geek minds have grown tired of doing more work, and
                        carrying books, notebooks and how much to buy books?
                    </p>
                    <p className="mt-2  text-[16px] text-[#212529]">
                        <strong>Solution:</strong> Now you can find a simple solution with
                        SchoolAura. These days almost everyone has a Smartphone, Tab, or
                        Laptop. Just open your device and start studying from anywhere,
                        anytime—while traveling, sitting in the park, etc.
                    </p>
                    <p className="mt-2  text-[16px] text-[#212529]">
                        Use your time wisely and gain knowledge every second. Use your
                        device for the right things, not for wasting time!
                    </p>
                </div>
            </div>

            {/* Banner Section */}
            <div className="mt-8 w-[95%] z-10 relative top-[-80px] " data-aos="fade-up" >
                <img
                    src="/Layer-20.png"
                    alt="banner-2"
                    className=" max-h-[375px] z-10"
                />
            </div>
        </div>
    );
}
