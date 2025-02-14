import { Paper } from "@mui/material";

function ServiceCard({ title, description }: { title: string; description: string }) {
    return (
        <Paper elevation={0} className="min-h-[150px]">
            <h5 className="text-2xl font-semibold">{title}</h5>
            <p className="text text-gray-600">{description}</p>
        </Paper>
    );
}

export default ServiceCard;
