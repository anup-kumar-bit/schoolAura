import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Default styles
import '../../../App.css'

const ParentReview = () => {
    const reviews = [
        {
            name: "Ravi Kaushal",
            location: "Indore, Madhya Pradesh",
            image: "/user-3.png",
            comment:
                "I have seen my son go from hating math to absolutely loving it. His marks have improved so much from last year. He looks forward to attending math sessions taken by …. Thank you, School Aura, for making math so much fun for my child! :)",
        },
        {
            name: "Varun Kasyap",
            location: "Uttar Pradesh",
            image: "/user1.jpg",
            comment:
                "School Aura Teachers make sure one understands the concept by giving everyday observations. Thank You!",
        },
        {
            name: "Vishal Kumar",
            location: "Delhi",
            image: "/user2.jpg",
            comment:
                '"A parent who has a phobia for math would dread to see her child going through the same. I am glad we found School Aura, which gave a great teacher and a great platform for learning."',
        },
        {
            name: "Rasmi Panday",
            location: "Delhi",
            image: "/user1.jpg",
            comment:
                "I have seen my son go from hating math to absolutely loving it. Thank you, School Aura! I have seen my son go from hating math to absolutely loving it. Thank you, School Aura!",
        },
        {
            name: "Anup kumar",
            location: "New Delhi,Delhi",
            image: "/user-3.png",
            comment:
                "Excellent teacher with a fantastic teaching method; if I had had this teacher in school, I believe I would have achieved my goal of becoming a lecturer.",
        },
    ];

    return (
        <div className="my-12 bg-[#f1f1f1] flex items-center justify-center p-[50px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <div className="container max-w-[1140px]" data-aos="fade-up">
                <h2 className="text-center text-[40px] font-bold">
                    WHAT <span className="text-[#ff5202]">PARENT SAYS</span>
                </h2>
                <Splide
                    options={{
                        type: "loop",
                        perPage: 4,
                        perMove: 1,
                        gap: "1rem",
                        pagination: true,
                        autoplay: true,
                        pauseOnHover: true,
                        arrows: false,
                        breakpoints: {
                            1024: { perPage: 2 },
                            768: { perPage: 1 },
                        },
                    }}
                    className="mt-6 min-h-[370px]"
                >
                    {reviews.map((review, index) => (
                        <SplideSlide key={index} className="p-3">
                            <div className="bg-white p-3 py-5 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.3)] text-center ">
                                <div className="flex items-center space-x-4 mb-4 ">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-left">{review.name}</h3>
                                        <p className="text-sm text-[#ff5202] text-left">{review.location}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600">{review.comment}</p>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default ParentReview;
