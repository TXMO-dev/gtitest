const BenItemLgMedComponent = ({title}) => {
    return (
        <p className="lg:hidden md:hidden flex items-center mb-[20px]">
                <span className="md:hidden lg:hidden inline-block w-[4px] h-[4px] bg-[#43475A] mr-[12px] rounded-full">&nbsp;</span>
                <span className="md:hidden lg:hidden font-[250] text-[16px] leading-[16px] text-[#43475A]">{title}</span>
        </p>
    )
}

export default BenItemLgMedComponent;