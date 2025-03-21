import { useState } from "react";

const categories = [
    { name: "School", classes: ["11th Class", "12th Class", "6th Class", "7th Class", "10th Class", "9th Class", "8th Class", "5th Class"] },
    { name: "Competitive", classes: ["SSC CHSL", "SSC CGL", "SSC MTS", "SSC JE", "SSC CPO", "SSC JHT",] },
    { name: "Entrance",   classes: ["JEE Mains", "JEE ADV", "NEET", "CUET"]  },
    { name: "Tutors", classes: ["Soon"] },
];

export default function EducationalCategories() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    return (
        <div className=" max-w-[1140px] mx-auto my-[50px] sm:my-[100px] bg-white ">
            <h2 className="text-[32px] sm:text-[40px] font-bold text-black flex flex-col leading-[100%] m-[10px] mb-[15px]">
                PROVIDE <span className="text-orange-500">BEST EDUCATIONAL</span>
            </h2>

            <div className="flex flex-col sm:flex-row h-auto sm:h-[260px] shadow-[0_2px_15px_rgba(0,0,0,0.8)] " data-aos="fade-up">
                {/*--------- Classes Categories ---------*/}
                <div className="w-full sm:w-1/4 sm:flex flex-row grid grid-cols-2 grid-rows-2 sm:flex-col sm:border-r">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`w-full text-[22px] py-[15px] px-[30px] mt-[1px] text-left ${activeCategory.name === category.name
                                    ? "text-orange-500 border-l-4 border-orange-500 bg-white"
                                    : "text-gray-700 bg-gray-100"
                                }`}
                            onClick={() => setActiveCategory(category)}
                            style={{ fontFamily: "'Open Sans', sans-serif" }}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/*---------- Classes List ----------*/}
                <div className="w-full sm:w-3/4 p-4 grid  grid-cols-2 grid-rows-5 sm:grid-cols-4 sm:grid-rows-3 gap-2 ">
                    {activeCategory.classes.length > 0 ? (
                        activeCategory.classes.map((classes, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-white h-[55px] border-2 border-gray-200"
                                style={{ fontFamily: "'Open Sans', sans-serif" }}
                            >
                                <div className="w-[55px] h-[55px] relative bg-[#0d1028] pt-2 pl-2 p-0 text-[60px] !leading-[100%] flex justify-end overflow-hidden">
                                    <h3 className="p-0 m-0 absolute -right-1 -bottom-1 font-extrabold text-[#343541]">N</h3>
                                </div>
                                <div className="ml-3">
                                    <p className="text-orange-500 font-semibold text-[16px] lg:text-[20px] leading-[100%]">{classes}</p>
                                    <p className="text-gray-600 text-[14px] lg:text-lg">{Math.floor(Math.random() * 100) + 80}+</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-3">No classes available</p>
                    )}
                </div>
            </div>
        </div>
    );
}
