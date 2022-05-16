import BenefitItemComponent from "../list-items/benefit-item.component";
import { BenefitModel } from "../../models/benefitModel";
const BenefitListLargeComponent = () => {
    return (
        <div className="hidden md:block w-full pl-[80px]">
                {
                 BenefitModel.map(info => <BenefitItemComponent {...info} />)
                }
            
        </div>
    )
}

export default BenefitListLargeComponent;