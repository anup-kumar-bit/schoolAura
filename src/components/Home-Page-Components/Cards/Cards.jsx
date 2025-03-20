import { FaTasks , FaShare  } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { AiFillFile } from "react-icons/ai";
export default function Cards() {
    const benefits = [
        {
            icon: <FaTasks className="text-center"/>,
            title: "Task Activities",
            description:
                "Daily assignments and tasks can be easily completed through online availability of information. Subject-wise homework can be submitted online which helps students to finish their tasks online.",
        },
        {
            icon: <AiFillFile />,
            title: "Exam Results",
            description:
                "Exam and assessment results of each individual student can be seen. The report cards will be generated online for each individual student.",
        },
        {
            icon: "ℹ",
            title: "Notice Updates",
            description:
                "The necessary announcements and updates will reach the students and parents quickly.",
        },
        {
            icon: <FaEye />,
            title: "Monitoring",
            description:
                "All the essential academic and administrative tasks can be easily monitored, such as student profiles, exam results, fee details, transportation details, etc.",
        },
        {
            icon: <FaLink />,
            title: "Connectivity",
            description:
                "When all the information is available online and is shared regularly with parents and students, transparency will be maintained.",
        },
        {
            icon: <FaShare />,
            title: "Planning & Sharing",
            description:
                "It becomes important nowadays for students to share their thoughts and ideas. SchoolAura Smart Education Platform will provide you a perfect stage to showcase and share your brilliant ideas.",
        },
    ];

    return (
        <div className="container mx-auto max-w-[1140px] text-center p-[15px] py-[50px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <h2 className="text-[40px] m-0 font-bold text-[#0d1028]">
                BENEFITS OF SCHOOLAURA
            </h2>
            <h3 className="text-[40px] m-0 text-[#FF5202] font-bold">FOR STUDENT</h3>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-4xl shadow-sm border border-gray-200 min-h-[270px]"
                    >
                        <div className="flex items-center justify-center font-bold text-[40px] h-[40px]">{benefit.icon}</div>
                        <h4 className="text-[24px] text-[#212529] mt-2">{benefit.title}</h4>
                        <p className="text-[16px] text-[#212529ec] mt-1">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
