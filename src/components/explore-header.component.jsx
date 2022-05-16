import SectionWrapper from "./sections/section-wrapper.component";
import SubHeaderMainComponent from "./sections/sub-header-main.components";
const ExploreHeaderComponent = () => {
    return (
        <SectionWrapper bgColor={"#F3F8FF"}>
            <SubHeaderMainComponent 
                    subbold={""} 
                    bold={"bold"} 
                    primary={"explore"} 
                    secondary={"africa"}   
                    marginSize={100}
                    borderWidth={400}
                    marginLeft={150}
                    />    
        </SectionWrapper>
    )
}
export default ExploreHeaderComponent;