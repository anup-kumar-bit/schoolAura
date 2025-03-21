export default function Logo() {
    return (
        <div className="flex items-center h-12 w-12 left-0 border-2 border-black z-10">
            <img
                src="/logo-cloud.png" // Replace with your logo
                alt="Logo"
                className="absolute -left-6 sm:left-0 top-0 w-[160px] h-[75px] sm:w-[280px] sm:h-[130px]"
            />
            <img src="/logo_school.png" alt="school" className="absolute h-[35px] w-[87px] left-5 sm:left-28 sm:h-[44px]  sm:w-[130px]"/>
        </div>
    )
}