import PlansCard from "./PlansCard";
import { plansData } from "../data/plansData";

function PlansSection() {
    return (
        <div className="pr-10 pl-10 pt-10 pb-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
            <div className="flex flex-col items-center justify-center pb-5">
                <h1 id="title" className="text-white text-4xl sm:text-6xl text-center">Managed Hosting Services</h1>
                <p className=" text-white text-center pt-3 sm:max-w-300 sm:text-2xl">
                  Take the stress out of hosting with our managed services. I'll handle the technical side of your website, from performance optimization to security, so you can focus on what matters most—growing your business
                </p>
            </div>
        <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-10">
          {plansData.map(plan => (
              <PlansCard title={plan.title} description={plan.description} price={plan.price} img={plan.img} alt={plan.alt} button={plan.button} site={plan.site} />
          ))}
        </div>
      </div>
    )
}

export default PlansSection;
