import PlansCard from "./PlansCard";
import { plansData } from "../data/plansData";

function PlansSection() {
    return (
        <div className="pr-10 pl-10 pt-10 pb-10 bg-gray-900">
            <div className="flex items-center justify-center pb-5">
                <h1 id="title" className="text-white text-3xl sm:text-5xl text-center">Managed Hosting Services</h1>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-10">
          {plansData.map(plan => (
            <div key={plan.id}>
              <PlansCard title={plan.title} description={plan.description} price={plan.price} img={plan.img} alt={plan.alt} button={plan.button} site={plan.site} />
            </div>
          ))}
        </div>
      </div>
    )
}

export default PlansSection;
