
import { Card, CardActions, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import { LbCartBtn } from 'Components/LbCartBtn/LbCartBtn';
import styled from 'styled-components';

const LbCardContainer = styled.div`
  transition: all .3s;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    transition: none;
    &:hover {
      transform: none;
      box-shadow: none;
      cursor: none;
    }
  }
`;

const LbCard = ({ id=null, name=null, description=null, price=null, image=null }: any) => {
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
      {id ? <Card sx={{ maxWidth: cardWidth }} style={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
                loading="lazy"
              />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
            <br /><br />
            <b> &#8377; {price}</b>
          </Typography>
        </CardContent>
        <CardActions>
          <LbCartBtn {...itemProps} />
        </CardActions>
      </Card> : 
        
      <Card sx={{ maxWidth: cardWidth }} style={{ position: "relative" }}>
      <Skeleton variant="rectangular" width={cardWidth} height={140} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Skeleton variant="text" />
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <Skeleton variant="text" />
          <br /><br />
          <b><Skeleton variant="text" /></b>
        </Typography>
      </CardContent>
      <CardActions>
        <Skeleton variant="text" />
      </CardActions>
    </Card>}
    </LbCardContainer>
  );
}

export {LbCard}