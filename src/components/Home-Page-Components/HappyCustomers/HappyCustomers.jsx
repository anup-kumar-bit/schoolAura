export default function HappyCustomers() {
    const stats = [
        { img: "/client-1.png", count: "108+", label: "Happy School" },
        { img: "/client-2.png", count: "58030+", label: "Students" },
        { img: "/client-3.png", count: "5360+", label: "Happy Parents" },
        { img: "/client-4.png", count: "10+", label: "Happy Tutors" },
    ];

    return (
        <div className="w-full max-h-[526px] bg-[#f1f1f1] py-[50px] my-[50px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <div className="container mx-auto max-w-[1140px]">
                <div className="flex flex-col lg:flex-row items-start">
                    <div className="relative lg:w-1/3 flex justify-center" data-aos="fade-up">
                        <div className="absolute w-[70%] h-[70%] bottom-0 left-0 bg-[#0d1028] z-0"></div>
                        <div className="absolute w-[70%] h-[70%] top-[20%] right-[15%] bg-[#666666] z-0"></div>
                        <img src="/client.png" alt="" className="w-[245px] object-contain z-10" />
                    </div>

                    <div className="lg:w-2/3 text-center lg:text-left">
                        <h1 className="text-[40px] font-bold text-[#0d1028] flex flex-col">
                            WE <span className="text-[#ff5202]">ARE SPREADING</span>
                        </h1>
                        <div className="w-32 bg-[#0d1028] h-[1px]"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[50px]" >
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center space-x-4 mb-[15px]" data-aos="zoom-in-up">
                                    <img src={stat.img} alt="" className="w-14 h-14" />
                                    <div>
                                        <h4 className="text-[42px] font-semibold text-[#0d1028] leading-[100%]">
                                            {stat.count}
                                        </h4>
                                        <h6 className="text-[24px] text-[#ff5202]">{stat.label}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}