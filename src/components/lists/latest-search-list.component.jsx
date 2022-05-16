import { LatestSearchModel } from "../../models/latestSearchModel";
import LatestItemComponent from "../list-items/latest-item.components";
const LatestSearchListComponent = () => {
    return (
        <>
        <div className="grid grid-cols-automatic3 gap-[20px]">
        {
            LatestSearchModel.map(info => <LatestItemComponent bgColor={'#FFFFFF'} {...info} />)
        }
        </div>
        </>
    )
}

export default LatestSearchListComponent;