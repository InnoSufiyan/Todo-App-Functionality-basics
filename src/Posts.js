import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



function Posts(props) {
    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.postNumber}
            </Typography>
            <Typography variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2">
              {props.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={props.deleteList} size="small">Delete</Button>
            <Button onClick={props.editIt} size="small">Edit</Button>
          </CardActions>
        </Card>
      );
}

export default Posts;