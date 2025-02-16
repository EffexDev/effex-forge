import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function About() {
    return (
        <>
            <NavBar textColor="black" buttonColor="black"/>
            <div>
                This is my about section
            </div>
            <Footer />
        </>
    )
}

export default About;