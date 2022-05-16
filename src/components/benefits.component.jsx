import SectionWrapper from "./sections/section-wrapper.component";
import SubHeaderMainComponent from "./sections/sub-header-main.components";
import './../App.css';
import BenefitsNavigationComponent from "./benefits/benefits-navigation.components";  
import BenefitListComponent from "./lists/benefits-list.component";

const BenefitsComponent = () => {
    return (
        <SectionWrapper bgColor={"#F3F8FF"}>
            <SubHeaderMainComponent 
                    subbold={"subbold"} 
                    bold={""} 
                    primary={"benefits"} 
                    secondary={"of the platform"}   
                    marginSize={100}
                    borderWidth={600}
                    marginLeft={185}
                    />

            <div className="w-full pb-[40px] bg-[#F3F8FF] drop-shadow-benefits pt-[10px] px-[26px]">
                <BenefitsNavigationComponent />  
                <BenefitListComponent />
                    
            </div>
            
        </SectionWrapper>
    )
}

export default BenefitsComponent