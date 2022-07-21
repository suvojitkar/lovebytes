import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { LbCartBtn } from '../LbCartBtn/LbCartBtn';

const LbCard = ({ id, name, description, image }: any) => {

  const itemProps = {
    id,
    name,
    description,
    image
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
        </Typography>
      </CardContent>
      <br/>
      <CardActions>
        <LbCartBtn {...itemProps} />
      </CardActions>
    </Card>
  );
}

export {LbCard}