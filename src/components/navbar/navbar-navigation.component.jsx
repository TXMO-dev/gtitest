import {NavLink} from 'react-router-dom';
const NavbarNavigationComponent = ({title,to}) => {
    return (
        <NavLink to={to} className={({isActive}) => !isActive ? "h-[70px] py-[23px] px-[29px] flex items-center justify-items-center hover:bg-gradient-to-b from-[#FFFFFF] via-transparent to-[#F5D410]" : "h-[70px] py-[23px] px-[29px] flex items-center justify-items-center bg-gradient-to-b from-[#FFFFFF] via-transparent to-[#F5D410]"}>
                    <span className="font-normal text-[#0062E1] text-navtext uppercase">{title}</span>
        </NavLink>
    )
}

export default NavbarNavigationComponent;