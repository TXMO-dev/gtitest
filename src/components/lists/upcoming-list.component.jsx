import {UpcomingModel} from './../../models/upcomingModel';
import LatestItemComponent from './../list-items/latest-item.components';
const UpcomingListComponent = _ => {
    return (
        <>
        <div className="grid grid-cols-automatic gap-[20px]">
            {
                UpcomingModel.map(info => <LatestItemComponent {...info} />)
            }
        </div>
        </>
    )
}

export default UpcomingListComponent;