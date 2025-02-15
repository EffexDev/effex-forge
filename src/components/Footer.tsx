import ContactInfo from "./ContactInfo";
import Socials from "./Socials";
import Copyright from "./Copyright";
import NavButtons from "./NavButtons";

function Footer() {
    return (
        <>
        <div className="flex flex-col sm:flex-row justify-center p-5  sm:pr-35 sm:justify-evenly">

            <div className="flex flex-col justify-between">
                    <ContactInfo />
            </div>

            <div className="hidden sm:block">
                <NavButtons flexDirection="col"/>
            </div>

            <div className="flex flex-col items-center justify-center text-center pt-10 sm:pt-0">
                <h3>Follow me on socials</h3>
                <div className="pt-5">
                    <Socials flexDirection="row"/>
                </div>
            </div>
        </div>
        <div className="pb-5 text-center">
            <Copyright />
        </div>
        </>
    )
}

export default Footer;