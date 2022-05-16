const NavBarButtonComponent = ({title}) => {
    return (
        <div className="cursor-pointer flex items-center rounded-full border border-[#F5D410] w-[150px] py-[12px] px-[17.67px]">
           <svg className="mr-[8.85px]" width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.94933 3.70798C8.538 2.51998 7.40933 1.66665 6.08133 1.66665C4.406 1.65998 3.042 3.01198 3.03467 4.68732V4.70065V6.13198" stroke="#0062E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.622 14.0002H3.528C2.132 14.0002 1 12.8682 1 11.4716V8.6129C1 7.21623 2.132 6.08423 3.528 6.08423H8.622C10.018 6.08423 11.15 7.21623 11.15 8.6129V11.4716C11.15 12.8682 10.018 14.0002 8.622 14.0002Z" stroke="#0062E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.07503 9.30176V10.7831" stroke="#0062E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                <span className="text-[#0062E1] mr-[23.33px]">{title}</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6668 1.66663L6.00016 6.33329L1.3335 1.66663" stroke="#0062E1" 
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
           </div>
    );
}

export default NavBarButtonComponent;