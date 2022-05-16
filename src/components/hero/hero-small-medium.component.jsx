const HeroLargeSmallComponent = ({photo,herotext,subtext}) => {
    return (
        <div className="lg:hidden w-full h-full flex justify-items-center z-0 items-center">  
            <img src={photo} className="inline-block  w-[100%] h-[100%] z-10" alt="hero_image"/>
            <span className="cursor-pointer mr-[4px] absolute z-40 pl-[12px]">
                <svg width="15" height="37" viewBox="0 0 30 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.6665 49.3333L3.33317 26L26.6665 2.66663" 
                    stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <div className="absolute flex flex-col z-20 justify-items-center items-center w-full p-[40px] backdrop-blur-[.8px]">  
                <p className="bg-transparent text-[#FFFFFF] text-[45px] text-center leading-[52.8px] font-extrabold mb-[6px] self-center">{herotext}</p> 
                <p className="text-[18px] leading-[48px] text-[#FFFFFF] text-center font-thin self-center mb-[8px]">{subtext}</p> 
                <div className="flex items-center">
                    <div className='cursor-pointer inline-block w-[40px] h-[5px] bg-[#E2E3EC] hover:bg-[#F5D410] mr-[10px]'>&nbsp;</div>
                    <div className='cursor-pointer inline-block w-[40px] h-[5px] bg-[#E2E3EC] hover:bg-[#F5D410] mr-[10px]'>&nbsp;</div>
                    <div className='cursor-pointer inline-block w-[40px] h-[5px] bg-[#E2E3EC] hover:bg-[#F5D410] mr-[10px]'>&nbsp;</div>
                    <div className='cursor-pointer inline-block w-[40px] h-[5px] bg-[#E2E3EC] hover:bg-[#F5D410] mr-[10px]'>&nbsp;</div>
                    <div className='cursor-pointer inline-block w-[40px] h-[5px] bg-[#E2E3EC] hover:bg-[#F5D410]'>&nbsp;</div>
                </div>
            </div>
            <span className="cursor-pointer ml-[4px] absolute right-0 z-40 pr-[12px]">
            <svg width="15" height="37" viewBox="0 0 30 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3335 2.6667L26.6668 26L3.3335 49.3334" stroke="white" 
                    stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        </div>
    )
}

export default HeroLargeSmallComponent;