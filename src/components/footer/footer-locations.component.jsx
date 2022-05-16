import FooterHeaderComponent from "./footer-header.component"

const FooterLocationsComponent = () => {
    return (
        <>
        <div class="flex">
            <FooterHeaderComponent title={"Locations"} description={""} />
            <div className=" cursor-pointer bg-[#F5D410] -mt-[20px] w-[40px] h-[80px] py-[20.31px] px-[32.13px] flex place-content-center rounded-full">
                <svg className="absolute z-20" width="18" height="42" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.65723 1.3125L8.65723 20.0625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.12674 8.87476L8.65674 1.31226L16.188 8.87476" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        </>
    )
}

export default FooterLocationsComponent;