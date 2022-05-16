import BenefitItemComponent from "../list-items/benefit-item.component";
import { BenefitModel } from "../../models/benefitModel";
const BenefitMedLargeListComponent = _ => {
    return (
        <div className="lg:hidden">
                {
                 BenefitModel.map(info => <BenefitItemComponent {...info} />)
                }
            </div>  
    )
}

export default BenefitMedLargeListComponent;