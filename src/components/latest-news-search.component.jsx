import LatestListButton from "./latest/latest-button.component";
import LatestNewsSearchBarComponent from "./latest/latest-news-search-bar.component";
import LatestSearchListComponent from "./lists/latest-search-list.component";
import SectionWrapper from "./sections/section-wrapper.component";

const LatestNewsSearchComp = () => {
    return (
        <SectionWrapper bgColor={"#E5E5E5"}>
            <LatestNewsSearchBarComponent />
            <LatestSearchListComponent />
            <LatestListButton />  
        </SectionWrapper>
    )
}

export default LatestNewsSearchComp;