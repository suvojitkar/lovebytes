
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { LbCartBtn } from 'Components/LbCartBtn/LbCartBtn';
import styled from 'styled-components';
import { LbCardProp } from './LbCard.interface';

const LbCardContainer = styled.div`
  transition: all .3s;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const LbCard = ({ id, name, description, price, image }: LbCardProp) => {

  const itemProps = {
    id,
    name,
    description,
    image,
    price
  }

  const cardWidth = window.screen.width > 700 ? 320 : "100%";
  return (
    <LbCardContainer>
    <Card sx={{ maxWidth: cardWidth}} style={{position: "relative"}}>
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
    </LbCardContainer>
  );
}

export {LbCard}