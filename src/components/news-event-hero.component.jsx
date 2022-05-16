import image from './../assets/newshero.png';
import HeroLargeComponent from './hero/hero-large.component';
import HeroLargeSmallComponent from './hero/hero-small-medium.component';
const NewsEventHeroComponent = () => {
    return (
        <>
            <HeroLargeComponent 
                photo = {image} 
                herotext={"Latest News"}
                positionRight={false} 
                positionLeft={true}
                subtext={""}
                isInnerText={true}
                isCarousel = {false} 
                arrowsoff = {false} 
            />
            <HeroLargeSmallComponent 
            photo = {image}
            herotext={"Latest News"}
            subtext={""} />
        </>
        
    )
}

export default NewsEventHeroComponent;