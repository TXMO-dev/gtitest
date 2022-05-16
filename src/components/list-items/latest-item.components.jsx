import './../../App.css';
const LatestItemComponent = ({id,image,title,subText,bgColor,isDate,marginBottom}) => {
    return (
        <>
            <div style={{backgroundColor:`${bgColor}`}} key={id} className="w-full pb-[20px] flex flex-col drop-shadow-shadowdrop">
                    <img src={image} className="mb-[20px]" alt="" />
                    <div style={{marginBottom:`${marginBottom}px`}} className="flex items-center mb-[20px]">
                        <div className="inline-block bg-[#F5D410] w-[10px] h-[30px] mr-[10px]">&nbsp;</div>
                        <p className="font-[900] text-[20px] leading-[30px] text-[#0062E1]">{title}</p>
                    </div>
                    {
                        isDate === true && (
                            <div className='pl-[20px] mb-[15px] font-[400] text-[#F5D410] text-[15px] leading-[25px]'>9 juil. 2020 à 00:00:00</div>
                        )
                    }
                    <p className="pl-[20px] pr-[50px] font-[300] text-[15px] leading-[25px] text-[#43475A] mb-[30px]">
                        {subText}
                    </p>
                    <span className="latestbutton ml-[20px] rounded-full justify-items-center items-center place-content-center">
                    <span className="font-[300] text-[15px] leading-[41.49px] mr-[8px]">Read more</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.11141 10V5.9673H0V4.19619H4.11141V0H5.88859V4.19619H10V5.9673H5.88859V10H4.11141Z" fill="#0062E1"/>
                        </svg>
                    </span>
                </div>
        </>
    )
}

export default LatestItemComponent;