import Hero from "@/components/Home-Page-Components/Hero-section/Hero";
import WhySchoolAura from "@/components/Home-Page-Components/WhySchoolAura/WhySchoolAura";
import EducationalCategories from "@/components/Home-Page-Components/EducationalCategories/EducationalCategories";
import Cards from "@/components/Home-Page-Components/Cards/Cards";
import MobileAppSection from "@/components/Home-Page-Components/Mobile/Mobile";
import Benefits from "@/components/Home-Page-Components/Benefits/Benefits";
import HappyCustomers from "@/components/Home-Page-Components/HappyCustomers/HappyCustomers";
import ImageGallery from "@/components/Home-Page-Components/ImageGallery/ImageGallery";
import ParentReview from "@/components/Home-Page-Components/ParentReview/ParentReview";

export default function HomePage(){
    return(
        <div>
            <Hero/>
            <WhySchoolAura/>
            <EducationalCategories/>
            <Cards/>
            <MobileAppSection/>
            <Benefits></Benefits>
            <HappyCustomers/>
            <ImageGallery/>
            <ParentReview/>
        </div>
    )
}