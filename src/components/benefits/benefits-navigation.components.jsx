import BenefitMediumLargeComponent from "./benefit-medium-large.component";
import BenefitLargeComponent from "./benefits-large.component";


const BenefitsNavigationComponent = () => {
    return (
        <>
            <BenefitLargeComponent />
            <BenefitMediumLargeComponent />
            <div className="inline-block w-full h-[1px] bg-[#C9C9CA] mb-[20px]">&nbsp;</div>
        </>
    )
}

export default BenefitsNavigationComponent;