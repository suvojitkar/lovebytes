import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { LbCartBtn } from 'Components/LbCartBtn/LbCartBtn';
import { LbCardProp } from './LbCard.interface';

const LbCard = ({ id, name, description, price, image }: LbCardProp) => {

  const itemProps = {
    id,
    name,
    description,
    image,
    price
  }
  return (
    <Card sx={{ maxWidth: 320 }} style={{position: "relative"}}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          <br /><br/>
          <b>&#8377;{price}</b>
        </Typography>
      </CardContent>
      <CardActions>
        <LbCartBtn {...itemProps} />
      </CardActions>
    </Card>
  );
}

export {LbCard}