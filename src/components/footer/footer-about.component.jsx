import FooterHeaderComponent from "./footer-header.component";
const FooterAboutComponent = () => {
    return (
        <>
                <div className="flex flex-col">
                   <FooterHeaderComponent title={"About Peaqock"} description={"Couldn’t connect with Twitter"}/>
               </div>
        </>
    )
}

export default FooterAboutComponent;