import { servicesData } from "../Data/servicesData";
import ServiceCard from "./ServiceCard";

function ServiceSection() {
    return (
        <div className="pr-10 pl-10 pt-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-10">
          {servicesData.map(service => (
            <div key={service.id}>
              <ServiceCard title={service.title} description={service.description} />
            </div>
          ))}
        </div>
      </div>
    )
}

export default ServiceSection;