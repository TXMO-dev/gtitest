const HeroLargeComponent = ({photo,herotext,subtext,positionRight,positionLeft,isInnerText,isCarousel,arrowsoff}) => {
    return (
        <div className="hidden lg:block lg:w-full lg:relative">
        <img src={photo} className="w-full" alt="hero_image"/>
        {
            arrowsoff === true && (
                <>
                    <span className="absolute top-[50%] left-[48.33px]">
                        <svg width="30" height="52" viewBox="0 0 30 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6665 49.3333L3.33317 26L26.6665 2.66663" 
                            stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
       
                    <span style={{top:'50%',right:'48.33px'}} className="absolute">
                        <svg width="30" height="52" viewBox="0 0 30 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.3335 2.6667L26.6668 26L3.3335 49.3334" stroke="white" 
                            stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </>
            )
        } 
       
        {
            positionRight === true && (
                <>
                    <div className="absolute top-[107px] right-[150px] w-[440px] h-[440px]  
                        border-t-[13.2px] 
                        border-b-[13.2px]
                        border-r-[13.2px]
                        border-t-[#F5D410]
                        border-b-[#F5D410]
                        border-r-[#F5D410]">
                            
                            
                            <div className="absolute top-0 w-[13.2px] h-[270px] bg-[#F5D410]">&nbsp;</div>
                            <div className="absolute -bottom-1 w-[13.2px] h-[22px] bg-[#F5D410]">&nbsp;</div>  
                            <p className="absolute z-10 -left-[40px] top-[270.4px] bg-transparent 
                            text-[#FFFFFF] text-[55px] leading-[52.8px] font-extrabold  w-[290px]">{herotext}</p>
                        </div>
                        <p className="absolute right-[150px] top-[577px] w-[454px] text-[35px] leading-[48px] text-[#FFFFFF] font-thin">{subtext}</p>
                </>
                
            )
        }
        {
            positionLeft === true && (
                <>
                    <div className="absolute top-[42px] left-[100px] w-[440px] h-[440px]  
                        border-t-[13.2px] 
                        border-b-[13.2px]
                        border-r-[13.2px]
                        border-t-[#F5D410]
                        border-b-[#F5D410]
                        border-r-[#F5D410]">
                            {
                                isInnerText === true && (
                                    <>
                                    <div className="cursor-pointer absolute text-[#FFFFFF] left-[33.54px] top-[30px] flex items-center">
                                        <svg className="mr-[13.96px]" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.54169 6.22868L14.0417 6.22868" stroke="#F5D410" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M6.58319 11.249L1.54152 6.22896L6.58319 1.20813" stroke="#F5D410" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p className="font-[250] text-[15px] leading-[22.43px] text-[#FFFFFF]">News & Events</p>
                                    </div>
                                    </>
                                
                                )
                            }
                            <div className="absolute top-0 w-[13.2px] h-[270px] bg-[#F5D410]">&nbsp;</div>
                            <div className="absolute -bottom-1 w-[13.2px] h-[22px] bg-[#F5D410]">&nbsp;</div>  
                            <p className="absolute z-10 -left-[40px] top-[270.4px] bg-transparent 
                            text-[#FFFFFF] text-[55px] leading-[52.8px] font-extrabold  w-[290px]">{herotext}</p>
                        </div>
                        <p className="absolute right-[150px] top-[577px] w-[454px] text-[35px] leading-[48px] text-[#FFFFFF] font-thin">{subtext}</p>
                </>
                
            )
        }
        
        {
            isCarousel === true && (
                <>
                <div className="absolute flex bottom-[40px] left-[35%]">
                    <div className='cursor-pointer inline-block w-[70px] h-[5px] bg-[#E2E3EC] hover:bg-[#F5D410] mr-[10px]'>&nbsp;</div>
                    <div className='cursor-pointer inline-block w-[70px] h-[5px] bg-[#E2E3EC] hover:bg-[#F5D410] mr-[10px]'>&nbsp;</div>
                    <div className='cursor-pointer inline-block w-[70px] h-[5px] bg-[#E2E3EC] hover:bg-[#F5D410] mr-[10px]'>&nbsp;</div>
                    <div className='cursor-pointer inline-block w-[70px] h-[5px] bg-[#E2E3EC] hover:bg-[#F5D410] mr-[10px]'>&nbsp;</div>
                    <div className='cursor-pointer inline-block w-[70px] h-[5px] bg-[#E2E3EC] hover:bg-[#F5D410]'>&nbsp;</div>
                </div>
                </>
                
            )
        }
        
    </div>
    )
}

export default HeroLargeComponent;