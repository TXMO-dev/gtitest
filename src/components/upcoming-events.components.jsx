import SectionWrapper from './sections/section-wrapper.component';
import SubHeaderMainComponent from './../components/sections/sub-header-main.components';
import UpcomingListComponent from './../components/lists/upcoming-list.component';
const UpcomingEventsComponent = () => {
    return (
        <>
            <SectionWrapper bgColor={"#F3F8FF"}>
                <SubHeaderMainComponent 
                        subbold={"subbold"} 
                        bold={""} 
                        primary={"upcoming"} 
                        secondary={"events"}   
                        marginSize={100}
                        borderWidth={400}
                        marginLeft={220}
                        />
                <UpcomingListComponent />
            </SectionWrapper>
        </>
    )
}

export default UpcomingEventsComponent;