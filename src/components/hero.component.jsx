import image from './../assets/hero.png';
import HeroLargeComponent from './hero/hero-large.component';
import HeroLargeSmallComponent from './hero/hero-small-medium.component';
const HeroComponent = () => {
    return (
        <>
        <HeroLargeComponent 
            photo = {image} 
            herotext={"Insight into Africa"}
            positionRight={true} 
            positionLeft={false}
            subtext={"Intelligence on due diligence data enabling trade"}
            isInnerText={false}
            isCarousel = {true}
            arrowsoff = {true}
        />
        <HeroLargeSmallComponent 
        photo = {image}
        herotext={"Insight into Africa"}
        subtext={"Intelligence on due diligence data enabling trade"} />
        </>
        
    )
}
export default HeroComponent;