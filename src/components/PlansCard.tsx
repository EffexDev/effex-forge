import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FadeIn from '../functions/FadeIn';


function PlansCard({ title, description, price, img, alt, button, site }: { title: string; description: string, price: number, img: string, alt: string, button: string, site: string }) {
    return (
        <FadeIn>
        <Card sx={{borderRadius: 5, padding: 4}}>
          <CardMedia
            sx={{ height: 140 }}
            image={img}
            title={alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {title}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary', whiteSpace: "pre-line" }}>
              {description}
            </Typography>
            <Typography variant='h5' sx={{paddingTop: 3}}>
                ${price} + {site}
            </Typography>
          </CardContent>
          <CardActions>        
            <Button variant="contained" size="small">{button}</Button>
          </CardActions>
        </Card>
        </FadeIn>
      );
    }

export default PlansCard;

