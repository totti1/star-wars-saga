import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom:5 }} elevation={8}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{fontWeight:'bold'}}>
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {props.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Height: {props.height}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Birth Year: {props.birth}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
            size="small" 
            sx={{ color: '#D4AC0D', fontWeight:'bold' }}
            component={Link} 
            to={props.redirectTo}
        >
            Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
