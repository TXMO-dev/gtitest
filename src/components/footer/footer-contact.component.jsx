import FooterHeaderComponent from "./footer-header.component";

const FooterContactComponent = _ => {
    return (
        <>
        <div className="flex flex-col">
                    <FooterHeaderComponent title={"Contact Us"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum lectus nunc, sagittis, eros."}/>
                    
                    <div className="flex items-center mb-[30px]">
                        <svg className="mr-[11px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Iconly/Light/Location">
                            <g id="Location">
                            <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M12.0832 8.7505C12.0832 7.59945 11.1505 6.66675 10.0003 6.66675C8.8492 6.66675 7.9165 7.59945 7.9165 8.7505C7.9165 9.90072 8.8492 10.8334 10.0003 10.8334C11.1505 10.8334 12.0832 9.90072 12.0832 8.7505Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M9.99959 17.5C9.00086 17.5 3.75 13.2486 3.75 8.80274C3.75 5.3222 6.54758 2.5 9.99959 2.5C13.4516 2.5 16.25 5.3222 16.25 8.80274C16.25 13.2486 10.9983 17.5 9.99959 17.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </g>
                        </svg>
                        <p className="font-[400] text-[16px] leading-[30px] text-[#B3B8DE]">184 Maib Streer Victoria</p> 
                    </div>
                    <div className="flex items-center mb-[30px]">
                        <svg className="mr-[11px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Iconly/Light/Message">
                            <g id="Message">
                            <path id="Stroke 1" d="M14.9188 7.37598L11.216 10.3868C10.5165 10.9418 9.5322 10.9418 8.83262 10.3868L5.09863 7.37598" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M14.0906 17.5C16.625 17.507 18.3332 15.4246 18.3332 12.8653V7.14168C18.3332 4.58235 16.625 2.5 14.0906 2.5H5.90912C3.37466 2.5 1.6665 4.58235 1.6665 7.14168V12.8653C1.6665 15.4246 3.37466 17.507 5.90912 17.5H14.0906Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </g>
                        </svg>
                        <p className="font-[400] text-[16px] leading-[30px] text-[#B3B8DE]">email@mikado-themes.com</p> 
                    </div>
                    <div className="flex items-center mb-[50px]">
                    <svg className="mr-[11px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Iconly/Light/Call">
                        <g id="Call">
                        <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M9.60995 10.3936C12.9342 13.7169 13.6883 9.87218 15.8049 11.9873C17.8454 14.0272 19.0182 14.4359 16.4329 17.0205C16.109 17.2808 14.0515 20.4118 6.82067 13.183C-0.411069 5.95325 2.71815 3.89362 2.97847 3.56988C5.57005 0.978124 5.97171 2.15774 8.01224 4.19769C10.1288 6.31366 6.28571 7.07026 9.60995 10.3936Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </g>
                    </svg>
                        <p className="font-[400] text-[16px] leading-[30px] text-[#B3B8DE]">+(123) 456-7890</p> 
                    </div>
                </div>
        </>
    )
}

export default FooterContactComponent;