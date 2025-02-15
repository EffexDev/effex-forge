function NavButtons({ flexDirection = "row" }) { 
    return (
        <nav className={`flex flex-${flexDirection} items-center justify-between w-full sm:w-auto`}>
            <p className="px-4 py-5 sm:px-6">About</p>
            <p className="px-4 py-5 sm:px-6">Services</p>
            <p className="px-4 py-5 sm:px-6">Projects</p>
        </nav>
    );
}

export default NavButtons;