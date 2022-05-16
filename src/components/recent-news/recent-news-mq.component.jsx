const RecentNewsMqComponent = ({image}) => {
    return (
        <>
        <div className="grid grid-cols-automatic2">
                    <div className="flex flex-col py-[10%]">
                        <h1 className="font-[700] text-[25px] leading-[30px] text-[#0062E1] mb-[10px]">
                            Mr. Wamkele Mene called on His Excellency 
                            Nana Akufo-Addo at the Jubilee House in Accra.
                        </h1>
                        <p className="font-[500] text-[15px] leading-[25px] text-[#F5D410] mb-[30px]">Mar 5, 2021</p>
                        <p className="font-[300] text-[15px] leading-[25px] text-[#43475A] mb-[38.33px]">
                           President Oramah and the Secretary-General of the AfCFTA, 
                           Mr. Wamkele Mene called on His Excellency Nana Akufo-Addo at the Jubilee House in Accra.
                        </p>
                        <div className="flex">
                        <svg className="mr-[28.33px]" width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8335 25.6666L2.16683 13.9999L13.8335 2.33325" stroke="#C5D0E2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.1665 2.33341L13.8332 14.0001L2.1665 25.6667" 
                            stroke="#C5D0E2" 
                            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>  
                        </svg>
                        </div>
                    </div>
                    <div className="w-full hidden md:block">
                        <img src={image} className="justify-self-end ml-[18.8%]" alt="recent_news_image" />
                    </div>
                </div>
        </>
    )
}

export default RecentNewsMqComponent;