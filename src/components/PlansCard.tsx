import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function PlansCard({ title, description, price }: { title: string; description: string, price: number }) {
    return (
        <Card>
            <CardContent>{title}</CardContent>
            <CardContent>{description}</CardContent>
            <CardContent>${price}</CardContent>
        </Card>
    )
}

export default PlansCard;