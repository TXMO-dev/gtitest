import FooterWrapper from "./footer/footer-wrapper.component";
import FooterContactComponent from "./footer/footer-contact.component";
import FooterAboutComponent from "./footer/footer-about.component";
import FooterPrivateComponent from "./footer/footer-privacy.component";
import FooterLocationsComponent from "./footer/footer-locations.component";


const FooterComponent = () => {
    return (
        <>
        <FooterWrapper>
            <div className="grid grid-cols-automatic gap-[20px]">
               <FooterContactComponent />
               <FooterAboutComponent />
               <FooterPrivateComponent />
               <FooterLocationsComponent />
            </div>
        </FooterWrapper>
        </>
    )
}

export default FooterComponent;