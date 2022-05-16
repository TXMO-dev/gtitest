import CountryDropDown from './navbar/country-dropdown.component';
import NavBarButtonComponent from './navbar/navbar-button.component';
import NavbarNavigationComponent from './navbar/navbar-navigation.component';
import NavBarSmallComponent from './navbar/navbar-small.component'; 
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';
import NavBarLargeComponent from './navbar/navbar-large.component';
const NavBarComponent = () => {

    const [toggleNav,setToggleNav] = useState(false);
    return (
        <>
        <NavBarLargeComponent 
        NavBarButtonComponent = {NavBarButtonComponent}
        CountryDropDown = {CountryDropDown}
        NavbarNavigationComponent = {NavbarNavigationComponent} />
        
        <NavBarSmallComponent 
        toggleNav={toggleNav} 
        setToggleNav = {setToggleNav} 
        AiOutlineClose = {AiOutlineClose} 
        NavBarButtonComponent = {NavBarButtonComponent} 
        CountryDropDown={CountryDropDown}
        GiHamburgerMenu={GiHamburgerMenu}/>
        </>
        
        
        
        
    )
}

export default NavBarComponent;