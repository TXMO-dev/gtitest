const FooterHeaderComponent = ({title,description}) => {
    return (
        <>
        <h1 className="font-[900] text-[24px] leading-[30px] text-[#FFFFFF] mb-[30px]">{title}</h1>
        <p className="font-[400] text-[16px] leading-[30px] text-[#B3B8DE] w-[295px] mb-[40px]">
                    {description}
                    </p>
        </>
    )
}

export default FooterHeaderComponent;