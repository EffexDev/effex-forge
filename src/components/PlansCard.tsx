import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FadeIn from '../functions/FadeIn';
import { Link } from 'react-router';


function PlansCard({ title, description, price, img, alt, button, site }: { title: string; description: string, price: number, img: string, alt: string, button: string, site: string }) {
    return (
        <FadeIn>
        <Card className="h-full flex flex-col" sx={{maxWidth: "100%", padding: 2}}>
          <CardMedia
            sx={{ height: 200, borderRadius: 1}}
            image={img}
            title={alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center"}}>
              {title}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary', whiteSpace: "pre-line", textAlign: "center"}}>
              {description}
            </Typography>
          </CardContent>
          <CardActions className="flex flex-col" sx={{marginTop: "auto"}}>    
            <Typography variant='h6' sx={{textAlign: "center"}}> 
                ${price}/mo + {site}
            </Typography>    
            <Link to="/contact">
              <Button variant="contained" size="large" sx={{width: '100%', paddingTop: 2, marginTop: 2, backgroundColor: 'orange'}}>{button}</Button>
            </Link>
          </CardActions>
        </Card>
        </FadeIn>
      );
    }

export default PlansCard;

