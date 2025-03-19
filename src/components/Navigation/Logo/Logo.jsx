export default function Logo() {
    return (
        <div className="flex items-center h-12 w-12left-0 border-2 border-black z-10">
            <img
                src="/logo-cloud.png" // Replace with your logo
                alt="Logo"
                className="absolute left-0 top-0 w-[280px] h-[130px]"
            />
            <img src="/logo_school.png" alt="school" className="absolute h-[44px] w-[130px]"/>
        </div>
    )
}