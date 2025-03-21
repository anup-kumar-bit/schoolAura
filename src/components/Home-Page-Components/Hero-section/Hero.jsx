import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import HeroForm from "./HeroForm";

export default function Hero() {
    return (
        <div className="bg-[#ff5202] h-[1150px] lg:h-[740px] xl:h-[555px] relative  flex items-center justify-center overflow-hidden">
            <div className="absolute w-full h-full left-0 top-0 right-0 bottom-0 bg-[url('/banner-bg.png')] "></div>

            <div className="container max-w-[1620px] px-3 z-10 flex items-center justify-around flex-wrap-reverse lg:flex-nowrap gap-4 relative" data-aos="zoom-in-up">
                <img src="/header-girl-icon.png" alt="icon" className="hidden xl:flex absolute -left-20 bottom-0 h-[280px] w-[120px]" />
                <div className="flex flex-col gap-5 w-[1134px] mt-8 sm:mt-0">
                    <div className="px-5 sm:px-8">
                        <h2 className="text-[42px] lg:text-6xl text-white font-medium">BE A <span className="text-black">SMART STUDENT</span></h2>
                        <p className="text-[18px] lg:text-[26px] text-white">SchoolAura Is A Smart Education Platform</p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 xl:grid-cols-4 gap-3 sm:px-16 lg:px-8 xl:px-2 xl:grid-rows-1 ">
                        {/* ---------------------------------------cards ------------------------------- */}
                        <Card className={'max-w-[250px] xl:w-[200px] 2xl:w-[250px] min-w-[168px] h-[212px] gap-0 py-[18px] rounded-md  shadow-[0_0_15px_rgba(0,0,0,0.8)]'}>
                            <CardHeader>
                                <CardTitle className={'text-center break-words flex flex-col leading-0 gap-0'}>
                                    <span className="text-lg text-[#212529]">ENTERANCE </span>
                                    <span className="text-lg text-[#212529]">Solution</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className={'flex flex-col justify-center items-center p-0 mt-2.5'}>
                                <Button className={'w-4/5 mb-2.5 bg-[#ff5202] hover:bg-[#ff5202cb]'}>Exam</Button>
                                <Button className={'w-4/5 mb-2.5 bg-[#ff5202] hover:bg-[#ff5202cb]'}>Courses</Button>
                            </CardContent>
                            <CardFooter className={'flex justify-center'}>
                                <p>Read more </p>
                            </CardFooter>
                        </Card>
                        {/* ---------------------------------------cards ------------------------------- */}
                        <Card className="max-w-[250px] xl:w-[200px] 2xl:w-[250px]  min-w-[168px] h-[212px] gap-0 py-[18px] rounded-md shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                            <CardHeader>
                                <CardTitle className={'text-center break-words flex flex-col leading-0 gap-0'}>
                                    <span className="text-lg text-[#212529]">ENTERANCE </span>
                                    <span className="text-lg text-[#212529]">Solution</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className={'flex flex-col justify-center items-center p-0 mt-2.5'}>
                                <Button className={'w-4/5 mb-2.5 bg-[#ff5202] hover:bg-[#ff5202cb]'}>Exam</Button>
                                <Button className={'w-4/5 mb-2.5 bg-[#ff5202] hover:bg-[#ff5202cb]'}>Courses</Button>
                            </CardContent>
                            <CardFooter className={'flex justify-center'}>
                                <p>Read more </p>
                            </CardFooter>
                        </Card>
                        {/* ---------------------------------------cards ------------------------------- */}
                        <Card className={'max-w-[250px] xl:w-[200px] 2xl:w-[250px]  min-w-[168px] h-[212px] gap-0 py-[18px] rounded-md  shadow-[0_0_15px_rgba(0,0,0,0.8)]'}>
                            <CardHeader>
                                <CardTitle className={'text-center break-words flex flex-col leading-0 gap-0'}>
                                    <span className="text-lg text-[#212529]">ENTERANCE </span>
                                    <span className="text-lg text-[#212529]">Solution</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className={'flex flex-col justify-center items-center p-0 mt-2.5'}>
                                <Button className={'w-4/5 mb-2.5 bg-[#ff5202] hover:bg-[#ff5202cb]'}>Exam</Button>
                                <Button className={'w-4/5 mb-2.5 bg-[#ff5202] hover:bg-[#ff5202cb]'}>Courses</Button>
                            </CardContent>
                            <CardFooter className={'flex justify-center'}>
                                <p>Read more </p>
                            </CardFooter>
                        </Card>
                        {/* ---------------------------------------cards ------------------------------- */}
                        <Card className={'max-w-[250px] xl:w-[200px] 2xl:w-[250px]  min-w-[168px] h-[212px] gap-0 py-[18px] rounded-md  shadow-[0_0_15px_rgba(0,0,0,0.8)]'}>
                            <CardHeader>
                                <CardTitle className={'text-center break-words flex flex-col leading-0 gap-0'}>
                                    <span className="text-lg text-[#212529]">ENTERANCE </span>
                                    <span className="text-lg text-[#212529]">Solution</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className={'flex flex-col justify-center items-center p-0 mt-2.5'}>
                                <Button className={'w-4/5 mb-2.5 bg-[#ff5202] hover:bg-[#ff5202cb]'}>Exam</Button>
                                <Button className={'w-4/5 mb-2.5 bg-[#ff5202] hover:bg-[#ff5202cb]'}>Courses</Button>
                            </CardContent>
                            <CardFooter className="flex justify-center items-center ">
                                <p className="flex items-center ">
                                    Read more
                                </p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                <HeroForm />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270" className="absolute bottom-[-36px] sm:bottom-[-80px] z-0"><path fill="#ffffff" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    )
}