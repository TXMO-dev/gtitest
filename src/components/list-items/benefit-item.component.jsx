import BenItemLgMedComponent from "./benefit-item-large-medium.component";
import BenefitItemLargeComponent from "./benefit-item-large.component";

const BenefitItemComponent = ({title}) => {
    return (
        <>
            <BenefitItemLargeComponent title={title} />
            <BenItemLgMedComponent title={title}/>
        </>    
    )
}

export default BenefitItemComponent;