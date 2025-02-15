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
        <Card className="h-full flex flex-col" sx={{borderRadius: 5, padding: 2}}>
          <CardMedia
            sx={{ height: 200, borderRadius: 5 }}
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
          </CardContent>
          <CardActions className="flex flex-col" sx={{marginTop: "auto"}}>    
            <Typography variant='h5'> 
                ${price}/mo + {site}
            </Typography>    
            <Button variant="contained" size="large" sx={{width: '100%', paddingTop: 2, marginTop: 2, backgroundColor: 'purple', fontWeight: "Bold"}}>{button}</Button>
          </CardActions>
        </Card>
        </FadeIn>
      );
    }

export default PlansCard;

