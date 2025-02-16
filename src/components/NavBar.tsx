import { Button } from "@mui/material";
import { useState } from "react";
import Socials from "./Socials";
import NavButtons from "./NavButtons";
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from "@mui/icons-material";
import { useLocation } from "react-router";
import { Link } from "react-router";
import "../index.css"

function NavBar({textColor ="white", buttonColor="white"}: {textColor: string, buttonColor: string;}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className={`relative top-0 left-0 w-full z-20 flex justify-between items-center pt-6 pb-6 pr-10 pl-5 sm:pl-10  text-${textColor} `}>
            <div className="w-full flex justify-between items-center">
                <div className="flex items-start justify-start sm:items-start w-auto sm:w-1/2">
                    <Socials />
                </div>

                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white pt-2 relative">
                        {isMenuOpen ? <MenuIcon sx={{ color: isHomePage ? "white" : "black"}}/> : <MenuIcon sx={{ color: isHomePage ? "white" : "black"}}/>}
                    </button>
                </div>

                <div className="hidden sm:flex items-center justify-center w-auto sm:w-1/2">
                    <NavButtons />
                </div>
                <div className="hidden sm:flex justify-end w-auto sm:w-1/2">
                    <Link to="/contact">
                    <Button sx={{ py: 2, color: `${buttonColor}`, border: `1px solid ${buttonColor}` }} variant="outlined" size="large">Contact</Button>
                    </Link>
                </div>

                 
            </div>

            {/* Expanding Circular Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col justify-center items-center z-30 sm:hidden 
                transition-all duration-500 ease-in-out ${isMenuOpen ? "clip-circle-open" : "clip-circle-closed"}`}>
                <button onClick={toggleMenu} className="absolute top-8 right-10 z-50">
                    <Close />
                </button>

                <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="flex flex-col items-center justify-center text-2xl">
                        <NavButtons flexDirection="col"/>
                    </div>
                    <Link to="/contact">
                    <Button sx={{ py: 2, mt: 2, color: "black", border: "1px solid black" }} variant="outlined" size="large" className="mt-6">Contact</Button>
                    </Link>
                    <div className="pl-1 pt-10">
                        <Socials />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default NavBar;
