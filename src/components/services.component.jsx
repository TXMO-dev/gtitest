import SectionWrapper from "./sections/section-wrapper.component";
import SubHeaderComponent from "./sections/sub-header.components";
import "./../App.css";
import ServiceListComponent from "./lists/service-list.component";


const ServicesComponent = () => {
    return(
        <>
        <SectionWrapper bgColor={"#F3F8FF"}>
            <SubHeaderComponent 
                    subbold={""} 
                    bold={"bold"} 
                    primary={"our"} 
                    secondary={"services"}   
                    marginSize={100}
                    />      
                <div className="grid grid-cols-automatic gap-[80px] max-w-full">  
                    <ServiceListComponent />
                </div>
        </SectionWrapper>
            
        </>
        
    )
}
export default ServicesComponent;