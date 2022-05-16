import BenefitsComponent from '../benefits.component'
import ExploreHeaderComponent from "../explore-header.component";
import ExploreComponent from "../explore.components";
import RecentNewsComponent from "../recent-news.component";
import ServicesComponent from "../services.component";
import HeroComponent from "../hero.component";
const HomePageContentComponent = () => {
    return (
        <>
            <HeroComponent/>
            <ServicesComponent />
            <BenefitsComponent />
            <ExploreHeaderComponent/>
            <ExploreComponent />
            <RecentNewsComponent />
        </>  
    )
}

export default HomePageContentComponent;