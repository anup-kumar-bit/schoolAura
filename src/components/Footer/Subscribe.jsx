import "../../App.css";

export default function Subscribe() {
    return (
        <div className="relative h-auto flex items-center justify-center bg-custom-gradient2 px-4 py-6 md:py-10">
            <div
                className="container mx-auto max-w-[1140px] flex flex-col md:flex-row items-center justify-between 
                bg-[url('/Subscribe.png')] bg-cover bg-center px-6 py-6 md:py-8  shadow-lg w-full"
                data-aos="fade-up"
            >
                {/* Heading Section */}
                <h2 className="text-[28px] md:text-[36px] lg:text-[40px] text-[#0d1028] font-bold text-center md:text-left w-full md:w-1/2">
                    SUBSCRIBE OUR <span className="text-orange-500">NEWSLETTER</span>
                </h2>

                {/* Input & Button Section */}
                <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-center mt-4 md:mt-0 space-y-3 sm:space-y-0 sm:space-x-2">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="h-[50px] w-full sm:w-[370px] px-4 border border-gray-300 focus:outline-none bg-white"
                    />
                    <button className="h-[50px] w-full sm:w-auto px-6 bg-[#ff5202] text-white hover:bg-orange-600">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
