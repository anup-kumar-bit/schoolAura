import { FaPlay } from "react-icons/fa";

export default function ImageGallery() {
    return (
        <div className="w-full my-20  md:px-8">
            <div className="container relative bg-[#f1f1f1] mx-auto max-w-[1140px] md:h-[430px] flex flex-col md:flex-row items-center p-6 md:p-0">
                {/* Background Accent */}
                <div className="absolute h-[97%] w-1/4 top-1 left-0 bg-[#0d1028] hidden md:block"></div>
                
                {/* Video Section */}
                <div className="relative w-full md:w-1/2 h-[250px] md:h-[400px] flex justify-center">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/tnAy4eAjllQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4 p-4 md:p-[30px]" data-aos="fade-up" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0d1028] leading-[102%]">
                        VISIT OUR CAMPUS WITH
                        <span className="text-[#ff5202]"> IMAGE GALLERY</span>
                    </h1>
                    <div className="w-20 md:w-32 h-[1px] bg-[#0d1028] my-4 md:my-[20px] mx-auto md:mx-0"></div>
                    <p className="text-base md:text-lg text-[#666666]">
                        Even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#0d1028]">
                        OR WATCH WITH VIDEO
                    </h2>
                    <a
                        href="https://www.youtube.com/channel/UCvRhLCkWWteH688WzkoV5zg/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-lg md:text-xl text-[#0d1028] font-semibold rounded-sm hover:shadow-md transition duration-300 space-x-2"
                    >
                        <FaPlay className="text-[#ff5202]" />
                        <span>PLAY NOW</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
