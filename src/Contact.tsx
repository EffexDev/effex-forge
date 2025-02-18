import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function Contact() {
        return (
            <>
                <NavBar textColor="black" buttonColor="black"/>
                <div className="flex justify-evenly pt-10">
                    <div className="hidden sm:flex sm:p-5 items-center sm:text-center">
                        <h1 id="title" className="text-6xl">Contact Me</h1>
                    </div>
                    <ContactForm />
                </div>
                <Footer />
            </>
        )
}

export default Contact;