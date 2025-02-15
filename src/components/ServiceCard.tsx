import { Paper } from "@mui/material";
import FadeIn from "../functions/FadeIn";

function ServiceCard({ title, description }: { title: string; description: string }) {
    return (
        <FadeIn>
        <Paper elevation={0} className="min-h-[150px]">
            <h5 className="text-2xl font-semibold">{title}</h5>
            <p className="text text-gray-800">{description}</p>
        </Paper>
        </FadeIn>
    );
}

export default ServiceCard;
