import PlansCard from "./PlansCard";
import { plansData } from "../data/plansData";

function PlansSection() {
    return (
        <div className="pr-10 pl-10 pt-10 pb-10 bg-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-10">
          {plansData.map(plan => (
            <div key={plan.id}>
              <PlansCard title={plan.title} description={plan.description} price={plan.price} />
            </div>
          ))}
        </div>
      </div>
    )
}

export default PlansSection;
