import FooterComponent from "../components/footer.component";
import NavBarComponent  from "../components/navbar.component";

import {Outlet} from 'react-router-dom';
const HomePage = () => {
    return(
     <>
        <NavBarComponent/>
        <Outlet/>
        <FooterComponent/>
    </>     
        
    );
}

export default HomePage;