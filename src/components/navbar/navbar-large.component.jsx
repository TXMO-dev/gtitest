const NavBarLargeComponent = ({NavBarButtonComponent,CountryDropDown,NavbarNavigationComponent}) => {
    return (
        <div className="hidden lg:w-full lg:bg-[#FFFFFF] lg:flex lg:flex-col lg:pr-[123.13px] lg:pt-[47.13px] lg:items-end">
           <div className="pb-[53px] flex items-center"> 
                <NavBarButtonComponent title="Register" />
                <div className="inline-block mx-[25px] h-[30px] w-[1px] bg-[#E2E3EC]">&nbsp;</div>
                <NavBarButtonComponent title="Login" />
                <div className="inline-block ml-[25px] mr-[21.86px] h-[30px] w-[1px] bg-[#E2E3EC]">&nbsp;</div>
                <CountryDropDown/>    
           </div>
           <div className="flex items-center">
                <NavbarNavigationComponent title="Home" to="/" />
                <NavbarNavigationComponent title="Customer due diligence" to="/customer" />
                <NavbarNavigationComponent title="Investing in Africa" to="/invest" />
                <NavbarNavigationComponent title="News & Events" to="/newsandevents" />               
           </div>
        </div>
    )
}

export default NavBarLargeComponent;