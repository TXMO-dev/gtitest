import { LatestModel } from "../../models/latestModel";
import LatestItemComponent from "../list-items/latest-item.components";
const LatestListComponent = () => {
    return (
        LatestModel.map(info => <LatestItemComponent {...info} />)
    )
}

export default LatestListComponent;