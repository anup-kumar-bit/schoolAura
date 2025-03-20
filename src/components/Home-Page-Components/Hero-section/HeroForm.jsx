import { useState } from "react";
// import Image from "next/image";

export default function LoginForm() {
    const [activeTab, setActiveTab] = useState("student");
    const [student, setStudent] = useState({ email: "", password: "" });
    const [parent, setParent] = useState({ email: "", password: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Validation Function
    const validateForm = (type) => {
        let valid = true;
        if (type === "student") {
            if (!student.email) {
                alert("Student Email or Mobile is required.");
                valid = false;
            }
            if (!student.password) {
                alert("Student Password is required.");
                valid = false;
            }
        } else {
            if (!parent.email) {
                alert("Parent Email or Mobile is required.");
                valid = false;
            }
            if (!parent.password) {
                alert("Parent Password is required.");
                valid = false;
            }
        }
        return valid;
    };

    // Handle Form Submission
    const handleSubmit = (e, type) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (validateForm(type)) {
            alert(`${type} login successful!`);
        }
        setTimeout(() => setIsSubmitting(false), 1000);
    };

    return (
        <div className="container mx-auto p-6 bg-white max-w-[300px] max-h-[353px] shadow-[0_0_15px_rgba(0,0,0,0.8)] rounded-lg relative">
            {/* Avatar Section */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-24 h-24 overflow-hidden rounded-full border-4 border-white shadow-md">
                <img
                    src="/user-img.png"
                    alt="User Avatar"
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="mt-10">{/* Push content down due to avatar */}</div>

            {/* Tabs */}
            <div className="flex border-b mb-4 justify-center gap-2">
                <button
                    disabled={isSubmitting}
                    onClick={() => setActiveTab("student")}
                    className={`font-semibold text-[16px] rounded-t w-full py-2 ${activeTab === "student"
                            ? "border-b-2 border-[#ff5202] text-[#789c05]"
                            : "bg-white text-[#9a9a9a]"
                        }`}
                >
                    Student Login
                </button>
                <button
                    disabled={isSubmitting}
                    onClick={() => setActiveTab("parent")}
                    className={`py-2 font-semibold rounded-t w-full ${activeTab === "parent"
                            ? "border-b-2 border-[#ff5202] text-[#789c05]"
                            : "bg-white text-[#9a9a9a]"
                        }`}
                >
                    Parent Login
                </button>
            </div>

            {/* Student Login Form */}
            {activeTab === "student" && (
                <form onSubmit={(e) => handleSubmit(e, "student")} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Mobile Number or Key"
                        value={student.email}
                        onChange={(e) => setStudent({ ...student, email: e.target.value })}
                        className="w-full bg-[#f1f1f1] border-gray-300 border p-2 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Student Password"
                        value={student.password}
                        onChange={(e) => setStudent({ ...student, password: e.target.value })}
                        className="w-full bg-[#f1f1f1] border-gray-300 border p-2 rounded"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-[#06091b] hover:bg-[#06091bde] "
                    >
                        Login
                    </button>
                    <div className="flex justify-between text-sm mt-2">
                        <a href="#" className="text-[#06091b] hover:underline">Forgot Password?</a>
                        <a href="#" className="text-[#06091b] hover:underline">Create Account</a>
                    </div>
                </form>
            )}

            {/* Parent Login Form */}
            {activeTab === "parent" && (
                <form onSubmit={(e) => handleSubmit(e, "parent")} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Parent Mobile or Email"
                        value={parent.email}
                        onChange={(e) => setParent({ ...parent, email: e.target.value })}
                        className="w-full bg-[#f1f1f1] border-gray-300 border p-2 "
                    />
                    <input
                        type="password"
                        placeholder="Parent Password"
                        value={parent.password}
                        onChange={(e) => setParent({ ...parent, password: e.target.value })}
                        className="w-full bg-[#f1f1f1] border-gray-300 border p-2 "
                    />
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-[#06091b] hover:bg-[#06091bde] "
                    >
                        Login
                    </button>
                    <div className="flex justify-between text-sm mt-2">
                        <a href="#" className="text-[#06091b] hover:underline">Forgot Password?</a>
                        <a href="#" className="text-[#06091b] hover:underline">Create Account</a>
                    </div>
                </form>
            )}
        </div>
    );
}