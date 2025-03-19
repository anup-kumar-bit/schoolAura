import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
export default function Hero() {
    return (
        <div className="bg-[#ff5202] h-[737px] lg:h-[555px] relative border-2 border-black flex items-center justify-center overflow-hidden">
            <div className="absolute w-full h-full left-0 top-0 right-0 bottom-0 bg-[url('/banner-bg.png')] bg-cover bg-center bg-no-repeat"></div>
            <div className="container max-w-[1620px] border-3 border-red-300 z-10">
                <div className="border-2 border-black flex flex-col gap-5 max-w-[1134px]">
                    <div className="">
                        <h2 className="text-6xl text-white font-medium">BE A <span className="text-black">SMART STUDENT</span></h2>
                        <p className="text-[26px] text-white">SchoolAura Is A Smart Education Platform</p>
                    </div>
                    <div className=" flex justify-between flex-wrap">
                        <Card className={'max-w-[250px] w-[250px] min-w-[168px] h-[212px] gap-0 py-[20px] rounded-md  shadow-[0_0_15px_rgba(0,0,0,0.8)]'}>
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
                        <Card className="max-w-[250px] w-[250px] min-w-[168px] h-[212px] gap-0 py-[20px] rounded-md shadow-[0_0_15px_rgba(0,0,0,0.8)]">
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
                        <Card className={'max-w-[250px] w-[250px] min-w-[168px] h-[212px] gap-0 py-[20px] rounded-md  shadow-[0_0_15px_rgba(0,0,0,0.8)]'}>
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
                        <Card className={'max-w-[250px] w-[250px] min-w-[168px] h-[212px] gap-0 py-[20px] rounded-md  shadow-[0_0_15px_rgba(0,0,0,0.8)]'}>
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
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270" className="absolute bottom-[-80px] border-2 border-red-400 z-0"><path fill="#ffffff" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    )
}