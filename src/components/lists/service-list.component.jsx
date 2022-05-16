import ServiceItemsComponent from "./../list-items/service-item.components";
import { ServicesModel } from "../../models/servicesModel";
const ServiceListComponent = () => {
    return (
        <>
        {ServicesModel.map(info => <ServiceItemsComponent {...info} />)}
        </>
    )
}

export default ServiceListComponent;