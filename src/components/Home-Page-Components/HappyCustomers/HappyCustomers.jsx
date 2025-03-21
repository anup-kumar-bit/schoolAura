export default function HappyCustomers() {
    const stats = [
        { img: "/client-1.png", count: "108+", label: "Happy School" },
        { img: "/client-2.png", count: "58030+", label: "Students" },
        { img: "/client-3.png", count: "5360+", label: "Happy Parents" },
        { img: "/client-4.png", count: "10+", label: "Happy Tutors" },
    ];

    return (
        <div className="w-full bg-[#f1f1f1] py-12 my-12" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <div className="container mx-auto px-4 max-w-[1140px]">
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="relative lg:w-1/3 flex justify-center mb-8 lg:mb-0" data-aos="fade-up">
                        <div className="absolute w-full sm:w-[70%] h-[70%] bottom-0 left-0 bg-[#0d1028] z-0"></div>
                        <div className="absolute w-full sm:w-[70%] h-[70%] top-[20%] right-[10%] bg-[#666666] z-0"></div>
                        <img src="/client.png" alt="Client" className="w-[200px] sm:w-[245px] object-contain z-10" />
                    </div>
                    
                    <div className="lg:w-2/3 text-center lg:text-left px-4">
                        <h1 className="text-3xl sm:text-4xl font-bold text-[#0d1028] leading-tight">
                            WE <span className="text-[#ff5202]">ARE SPREADING</span>
                        </h1>
                        <div className="w-24 sm:w-32 bg-[#0d1028] h-[2px] my-3 mx-auto lg:mx-0"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center justify-center sm:justify-start space-x-4" data-aos="zoom-in-up">
                                    <img src={stat.img} alt={stat.label} className="w-12 h-12 sm:w-14 sm:h-14" />
                                    <div>
                                        <h4 className="text-3xl sm:text-4xl font-semibold text-[#0d1028] leading-none">
                                            {stat.count}
                                        </h4>
                                        <h6 className="text-lg sm:text-xl text-[#ff5202]">
                                            {stat.label}
                                        </h6>
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