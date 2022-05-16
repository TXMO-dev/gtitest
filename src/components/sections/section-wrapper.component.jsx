const SectionWrapper = ({children,bgColor}) => {
    return (
<div style={{backgroundColor:`${bgColor}`}} className="lg:px-[100px] px-[60px] md:px-[80px] py-[100px]">
    {children}
</div>
    )
}

export default SectionWrapper;