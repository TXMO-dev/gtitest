import SectionWrapper from "./sections/section-wrapper.component";
import LatestListComponent from "./lists/latest-list.component";
const LatestNewsComponent = () => {
    return (
        <SectionWrapper bgColor={"#F3F8FF"}>
            <div className="grid grid-cols-automatic gap-[20px]">
                <LatestListComponent />
            </div>
        </SectionWrapper>
    )
}

export default LatestNewsComponent;