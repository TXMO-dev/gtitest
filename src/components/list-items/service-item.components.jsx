const ServiceItemsComponent = ({id,title,image,subText,buttonText}) => {
    return (
        <div key={id} className="relative max-w-full h-[450px]">
                        <img src={image} className="absolute h-full w-full z-10" alt="service_image" />
                        <div className="absolute z-20 py-[25px] px-[22px] backLinear w-full h-full">
                            <div className="flex flex-col h-full opacity-0.5 
                            border-t-[#F5D410] border-l-[#F5D410] border-r-[#F5D410] 
                            border-t-[12px] border-l-[12px] border-r-[12px] pt-[55px] px-[28px]">
                                <h1 className="font-extrabold text-[24px] leading-[24px] w-[260px] text-[#FFFFFF] mb-[30px]">
                                    {title}
                                </h1>
                                <p className="font-[300] text-[#FFFFFF] text-[12px] leading-[14px] mb-[35px]">
                                {subText} 
                                </p>

                                <span className="cursor-pointer h-[40px] border-[#F5D410] border-[2px] rounded-full absolute bottom-6 left-[25%] right-[25%] px-[13px] 
                                flex items-center justify-items-center place-content-center hover:bg-[#F5D410] buttonhover">
                                    <p className="text-[14px] leading-[14px] text-[#F5D410] font-[500]">{buttonText}</p>
                                </span>
                            </div>
                        </div>
                        
                    </div>
    )
}

export default ServiceItemsComponent;