import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function Contact() {
        return (
            <>
                <NavBar textColor="black" buttonColor="black"/>
                <div className="flex justify-center">
                    <ContactForm />
                </div>
                <Footer />
            </>
        )
}

export default Contact;