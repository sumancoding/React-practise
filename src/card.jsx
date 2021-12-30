/*import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import CardMedia from '@mui/material/CardMedia';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
    const {avatarSrc, title, subtitle, description, imgSrc} = props;
  return (
    <Card sx={{ minWidth: 275 }}>
        <CardHeader
        avatar={
          <Avatar src={avatarSrc}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader= {subtitle}
      />
      <CardMedia style={{height:"150px"}}
        image={imgSrc}
      />
      <CardContent>
        <Typography variant="body2">
         {description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sign All</Button>
        <Button size="small">Leave</Button>
      </CardActions>
    </Card>
  );
}
