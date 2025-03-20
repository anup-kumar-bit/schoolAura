export default function ImageGallery() {
    return (
        <div className="w-full my-[100px]">
            <div className="container bg-[#f1f1f1] mx-auto max-w-[1140px] h-[426px]">
                <div className="flex flex-col lg:flex-row items-center">

                    {/* Video Section */}
                    <div className="relative lg:w-1/2 w-full h-[420px]">
                        <iframe
                            className="w-full h-full shadow-lg"
                            src="https://www.youtube.com/embed/tnAy4eAjllQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Text Section */}
                    <div className="lg:w-1/2 w-full text-center lg:text-left space-y-4 p-[30px] box-border">
                        <h1 className="text-[40px] font-bold text-[#0d1028] leading-[102%]">
                            VISIT OUR CAMPUS WITH
                            <span className="text-[#ff5202]"> IMAGE GALLERY</span>
                        </h1>
                        <div className="w-32 h-[1px] bg-[#0d1028] my-[20px]"></div>
                        <p className="text-[18px] text-[#666666]">
                            Even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                        </p>
                        <h2 className="text-[40px] font-semibold text-[#0d1028]">
                            OR WATCH WITH VIDEO
                        </h2>
                        <a
                            href="https://www.youtube.com/channel/UCvRhLCkWWteH688WzkoV5zg/videos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#ff5202] font-semibold space-x-2"
                        >
                            <i className="fas fa-play text-xl"></i>
                            <span>PLAY NOW</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
