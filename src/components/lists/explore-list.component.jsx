import { ExploreModel } from "../../models/exploreModel";
import ExploreItemComponent from './../list-items/explore-item.component';
const ExploreListComponent = () => {
    return (
      <>
      {
          ExploreModel.map(info => <ExploreItemComponent {...info} />)
      }
            
      </>  
    )
};

export default ExploreListComponent;