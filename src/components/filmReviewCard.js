import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function FilmReviewCard(props) {

  return (
    <Card sx={{ maxWidth: 345, marginBottom:5 }} elevation={8}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#D4AC0D" }} aria-label="recipe">
            {props.avatar}
          </Avatar>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
