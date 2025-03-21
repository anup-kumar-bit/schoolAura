import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";

const HeroCard = ({ title = "----", category = "----", actions = [] }) => {
    return (
        <Card className="max-w-[250px] xl:w-[200px] 2xl:w-[250px] min-w-[168px] h-[212px] gap-0 py-[18px] rounded-md shadow-[0_0_15px_rgba(0,0,0,0.8)]">
            {/* --------------------Heading Card------------------ */}
            <CardHeader>
                <CardTitle className="text-center break-words flex flex-col leading-0 gap-0">
                    <span className="text-lg text-[#212529]">{title}</span>
                    <span className="text-lg text-[#212529]">{category}</span>
                </CardTitle>
            </CardHeader>

            {/* ------------------Card  Button ------------------- */}
            <CardContent className="flex flex-col justify-center items-center p-0 mt-2.5">
                {actions.map((action, index) => (
                    <Button 
                        key={index} 
                        className="w-4/5 mb-2.5 bg-[#ff5202] hover:bg-[#ff5202cb]"
                        onClick={action.Click}
                    >
                        {action.label}
                    </Button>
                ))}
            </CardContent>

            {/* Read More */}
            <CardFooter className="flex justify-center">
                <p className="text-sm cursor-pointer ">Read more</p>
            </CardFooter>
        </Card>
    );
};

export default HeroCard;
