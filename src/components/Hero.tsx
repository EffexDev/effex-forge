import NavBar from "./NavBar";
import heroBackground from '../assets/heroBackground2.jpg'; 

function Hero() {
  return (
    <div className="h-screen w-full relative">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="absolute inset-0 object-cover object-center w-full h-full scale-x-[-1]" 
        />
        
        {/* <div className="absolute inset-0 bg-gray-400/20" /> */}

        <NavBar />

        <div className="relative h-full w-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col items-center w-3xl max-w-[90%] sm:max-w-[70%] md:max-w-[50%] pb-20">
              <h1 id="title" className="text-6xl sm:text-6xl md:text-7xl font-bold">Effex Forge</h1>
              <p className="text-lg pt-5 pb-15 sm:pb-50 sm:text-xl sm:max-w-110 md:text-2xl">Forging strong online foundations, so you don't have to.</p>
          </div>
        </div>
    </div>
  );
}

export default Hero;
