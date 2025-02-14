import PlansCard from "./PlansCard";

function PlansSection() {
    return (
        <div className="relative h-screen w-full bg-black/90 text-white">
            <div className="flex justify-center pt-10">
                <h4 className="text-5xl">Plans</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <PlansCard />
            </div>
        </div>
    )
}

export default PlansSection;