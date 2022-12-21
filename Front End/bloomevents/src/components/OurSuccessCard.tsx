import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import { FaRegUserCircle } from 'react-icons/fa';

import landing_img from 'Img/login.jpg';


function OurSuccessCard() {
    return (
        <div className='mx-2 text-center rounded-2xl drop-shadow-lg hover:scale-[1.02] hover:duration-300'>
            <Card sx={{ maxWidth: 300, minWidth: 250 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={landing_img}
                    alt="green iguana"
                    />
                    {/* <p className='w-full text-6xl text-center'><FaRegUserCircle/></p> */}
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Users
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            we have 1000+ Users
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
      );
}

export default OurSuccessCard