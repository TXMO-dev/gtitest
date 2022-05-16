import { useNavigate } from "react-router-dom";
const NavBarSmallComponent = ({toggleNav,setToggleNav,AiOutlineClose, CountryDropDown, NavBarButtonComponent,GiHamburgerMenu}) => {
    let navigate = useNavigate();
    return (
        <>
        <div className="lg:hidden relative w-full bg-[#FFFFFF] p-[20px] flex justify-items-end">
            <p className='cursor-pointer' onClick={() => setToggleNav(true)}><GiHamburgerMenu/></p>    
        </div>
        <div className={toggleNav === true ? "lg:hidden absolute top-0 h-screen bg-[#FFFFFF] z-30 w-[100%] p-[10px]" : "hidden"}>
                <span className="cursor-pointer absolute top-[5%] right-[8%]" onClick={() => setToggleNav(false)}><AiOutlineClose/></span>
                <span className="cursor-pointer absolute top-[5%] left-[8%]">
                <CountryDropDown/>  
                </span>
                <div class="flex flex-col items-center justify-items-center pt-[50%]">  
                    <span class="cursor-pointer mb-[40px] uppercase text-[18px]" onClick={() => {
                        navigate("/")
                        setToggleNav(false);  
                        
                    }}>Home</span>
                    <span class="cursor-pointer mb-[40px] uppercase text-[18px]" onClick={() => {
                        navigate("/customer")
                        setToggleNav(false);
                        
                    }}>Customer due diligence</span>
                    <span class="cursor-pointer mb-[40px] uppercase text-[18px]" onClick={() => {
                        navigate("/invest")
                        setToggleNav(false);
                        
                    }}>investing in africa</span>
                    <span class="cursor-pointer mb-[40px] uppercase text-[18px]" onClick={() => {
                        navigate("/newsandevents")
                        setToggleNav(false);
                        
                    }}>News & Events</span>
                    <span class="cursor-pointer mb-[40px] uppercase text-[18px]"><NavBarButtonComponent title="Register" /></span>
                    <span class="cursor-pointer mb-[40px] uppercase text-[18px]"><NavBarButtonComponent title="Login" /></span>
                    
                    
                </div>
        </div> 
        </>
        
    )
}

export default NavBarSmallComponent;