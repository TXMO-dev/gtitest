const SubHeaderComponent = ({subbold,bold,primary,secondary,marginSize}) => {
    return (
        
            <div style={{marginBottom:`${marginSize}px`}} className={`relative uppercase text-[40px] leading-[48px] \
                           text-[#0062E1] py-[46px] \
                           border-t-[12px] w-[358.24px] border-t-[#ECECEC] \
                           border-r-[#ECECEC] border-r-[12px] border-b-[#ECECEC] border-b-[12px]`}>
                <span className={subbold === "subbold" ? "font-extrabold absolute -left-[14px]" : "font-light absolute -left-[14px]"}>
                    {primary}
                </span> 
                <span className={bold === "bold" ? "font-extrabold ml-[75px]" : "font-light ml-[75px]"}>
                    {secondary}
                </span>
                <span className="absolute inline-block top-0 left-0 w-[12px] h-[12px] bg-[#ECECEC]">&nbsp;</span>
                <span className="absolute inline-block bottom-0 left-0 w-[12px] h-[12px] bg-[#ECECEC]">&nbsp;</span>
            </div>   
        
    )
}

export default SubHeaderComponent;