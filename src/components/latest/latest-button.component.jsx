const LatestListButton = () => {
    return (
        <>
        <div className=" hidden  w-[300px] ml-[40%] mr-[40%] mt-[10%] rounded-full h-[50px] bg-[#F5D410] py-[6px] px-[10px] md:flex items-center justify-items-center place-content-center">
                <span className="font-[600] text-[20px] leading-[41.49px] text-center text-[#FFFFFF]">Show more</span>   
        </div>

        <div className=" lg:hidden md:hidden   ml-[25%] mr-[20%] mt-[20%] rounded-full h-[50px] bg-[#F5D410] py-[6px] px-[10px] flex items-center justify-items-center place-content-center">
                <span className="font-[600] text-[20px] leading-[41.49px] text-center text-[#FFFFFF]">Show more</span>   
        </div>
        </>
    )
}

export default LatestListButton;