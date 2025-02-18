import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Avatar from './components/Avatar';
import AboutSheet from './components/AboutSheet';

function About() {
    return (
        <>
            <NavBar textColor="black" buttonColor="black"/>
                <div className="flex flex-col md:flex-row justify-between  md:justify-evenly items-center  pb-4 pt-8 sm:pt-3">
                    <Avatar  />
                    <AboutSheet />
                </div>
            <Footer />
        </>
    )
}

export default About;