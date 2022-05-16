import LatestNewsSearchComp from "../components/latest-news-search.component";
import LatestNewsComponent from "../components/latest-news.component";
import NewsEventHeroComponent from "../components/news-event-hero.component";
import UpcomingEventsComponent from './../components/upcoming-events.components';
const NewsEventsPage = () => {
    return (
        <>
        <NewsEventHeroComponent />
        <LatestNewsComponent />
        <LatestNewsSearchComp />
        <UpcomingEventsComponent />
        </>
        
    )
}
export default NewsEventsPage;