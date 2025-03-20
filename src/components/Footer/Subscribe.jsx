import "../../App.css"
export default function Subscribe() {
    return (
        <div className="relative h-[160px] flex items-center justify-center bg-custom-gradient2"  style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <div className="container mx-auto max-w-[1140px] flex items-center justify-between bg-[url('/Subscribe.png')] bg-cover bg-center px-6 py-4 z-10 " data-aos="fade-up">
                {/* Heading Section */}
                <h2 className="text-[40px] text-[#0d1028] font-bold w-1/2">
                    SUBSCRIBE OUR <span className="text-orange-500">NEWSLETTER</span>
                </h2>

                {/* Input & Button Section */}
                <div className="w-1/2 flex justify-end items-center space-x-1">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="h-[50px] w-[370px] px-4 border border-gray-300 focus:outline-none bg-white "
                    />
                    <button variant="outline" className="h-[50px] rounded-0 px-6 bg-[#ff5202] text-white hover:bg-orange-600 ">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
