const BenefitItemLargeComponent = ({title})=> {
    return (
        <p className="hidden md:block lg:flex lg:items-center lg:mb-[30px]">
            <span className="inline-block w-[8px] h-[8px] bg-[#43475A] mr-[16px] rounded-full">&nbsp;</span>
            <span className="font-[250] text-[24px] leading-[24px] text-[#43475A]">{title}</span>
        </p>
    )
}

export default  BenefitItemLargeComponent;