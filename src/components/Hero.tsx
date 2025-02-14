import NavBar from "./NavBar";
import heroBackground from '../assets/heroBackground.jpg'; 

function Hero() {
  return (
    <div className="relative h-screen w-full">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="absolute inset-0 object-cover object-center w-full h-full scale-x-[-1]" 
        />
        
        {/* <div className="invisible sm:visible absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent" /> */}

        <NavBar />

        <div className="absolute inset-0  px-4 sm:px-8 lg:px-16 flex justify-start items-center text-start text-white z-10">
          <div className="flex flex-col max-w-[90%] sm:max-w-[70%] md:max-w-[50%]">
              <h1 id="title" className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">Effex Forge</h1>
              <p className="text-lg invisible pt-5 sm:visible sm:text-xl sm:max-w-70 md:max-w-90 md:text-2xl">Forging strong online foundations, so you don't have to.</p>
          </div>
        </div>
    </div>
  );
}

export default Hero;
