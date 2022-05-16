const ExploreItemComponent = ({icon,text,id,color}) => {
    return (
        <>
        <div style={{backgroundColor:`${color}`}} key={id} className="w-full px-[50px] py-[70px] flex flex-col place-content-center justify-items-center items-center">
                {icon}
                <p className="font-[275] text-[15px] leading-[20px] text-[#FFFFFF] text-center">
                    {text}
                </p>
            </div>
        </>
    )
}

export default ExploreItemComponent;