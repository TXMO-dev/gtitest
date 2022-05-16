import SectionWrapper from "./sections/section-wrapper.component";
import SubHeaderMainComponent from "./sections/sub-header-main.components";
import recentimage from './../assets/recentimage.png';
import RecentNewsMqComponent from "./recent-news/recent-news-mq.component";

const RecentNewsComponent = () => {
    return (
        <SectionWrapper bgColor={"#E5E5E5"}>
            <SubHeaderMainComponent 
                    subbold={""} 
                    bold={"bold"} 
                    primary={"recent"} 
                    secondary={"news"}   
                    marginSize={100}
                    borderWidth={350}
                    marginLeft={130}
                    /> 
                <RecentNewsMqComponent image={recentimage} />
        </SectionWrapper>
    )
}

export default RecentNewsComponent;