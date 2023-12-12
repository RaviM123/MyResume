import React from 'react'
// import { Button } from 'react-scroll'
import {  Grid, Box} from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import DetailProject from './DetailProject';
import ReactDOM from 'react-dom/client';
import {Details} from '../utils/Dummy'


const Project = () => {
  const navigate = useNavigate();

  const handleClick = () => {
//     const newWindow = window.open('', '_blank');
//     newWindow.document.write('<html><head><title>New Window</title></head><body><div id="new-component"></div></body></html>');
//     newWindow.document.getElementById('new-component').innerHTML = '<h1>New Component</h1>';
//     // newWindow.document.getElementById('new-component').appendChild(document.createElement('div'));
//     // // You can append additional components or content here as needed
//     // ReactDOM.createRoot(getElementById('new'))
//     // ReactDOM.render(<DetailProject />, newWindow.document.getElementById('new-component').lastChild);
//     const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <DetailProject />, newWindow
// );
  }
  
 
  return (
    <Box name="project">   
    <Box Box sx={{padding:'5px', backgroundColor : ''}}> 
      <Box>
      <h2 className='text-4xl font-bold absolute left-[50%] translate-x-[-50%]  mt-[60px]  tracking-[1px] uppercase'>Projects</h2>
      <div className='w-[60px] bg-purple-800 rounded-lg h-2 absolute left-[50%] translate-x-[-50%] mt-[110px]'></div>
      <div className='absolute mt-[160px] left-[50%] translate-x-[-50%] text-center text-xl text-gray-700'>
        <span className="">Here you will find more information about projects i was currently working</span>
      </div>
      {/* <div className='flex flex-col'>
      <div className='grid  absolute left-[5%] mt-[300px] grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-[10rem]'>
        <div>
      <img src='https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg'></img>
        </div>
        <div className='mt-[20px]'>
          <h3 className='text-2xl mb-[30px]'>Intern Training Portal</h3>
      <p className='text-xl text-gray-500'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      <Button variant="contained" style={{marginTop : '20px'}} >Contained</Button>
        </div>
      </div>
      <div className='grid  absolute left-[5%] mt-[700px] grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-[10rem]'>
        <div>
      <img src='https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg'></img>
        </div>
        <div className='mt-[20px]'>
          <h3 className='text-2xl mb-[30px]'>Intern Training Portal</h3>
      <p className='text-xl text-gray-500'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      <Button variant="contained" style={{marginTop : '20px'}} >Contained</Button>
        </div>
      </div>
      <div className='grid  absolute left-[5%] mt-[1100px] grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-[10rem]'>
        <div>
          
      <img src='https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg'></img>
        </div>
        <div className='mt-[20px]'>
          <h3 className='text-2xl mb-[30px]'>Intern Training Portal</h3>
      <p className='text-xl text-gray-500'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      <Button variant="contained" style={{marginTop : '20px'}} >Contained</Button>
        </div>
      </div>
          
</div> */}
</Box>

 {/* <Grid container spacing={20} sx={{width: '92%', marginTop: 'auto', marginLeft : 'auto', marginRight : 'auto', paddingBottom:'50px'}}>
      <Grid item xs={12} md={12} sx={{marginTop : '80px' , marginLeft:'0px'}}>
        <img
          src='https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg'
          alt='Project 1'
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{marginTop: '80px'}}>
        <div className='mt-[20px]'>
          <h3 className='text-2xl mb-[30px]'>Intern Training Portal</h3>
          <p className='text-xl text-gray-500'>
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming
            and technology
          </p>
          <Button variant='contained' style={{ marginTop: '20px' }}>
            Contained
          </Button>
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <img
          src='https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg'
          alt='Project 2'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <div className='mt-[20px]'>
          <h3 className='text-2xl mb-[30px]'>Intern Training Portal</h3>
          <p className='text-xl text-gray-500'>
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming
            and technology
          </p>
          <Button variant='contained' style={{ marginTop: '20px' }}>
            Contained
          </Button>
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <img
          src='https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg'
          alt='Project 3'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <div className='mt-[20px]'>
          <h3 className='text-2xl mb-[30px]'>Intern Training Portal</h3>
          <p className='text-xl text-gray-500'>
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming
            and technology
          </p>
          <Button variant='contained' style={{ marginTop: '20px' }}>
            Contained
          </Button>
        </div>
      </Grid>
    </Grid> */}

    <Grid container spacing={5} sx={{marginTop: '220px', marginBottom:'70px', display: 'fex',justifyContent : 'center'}}>
     {
      Details.map((item) => {
  return (<Grid item md={5}>
      <Card>
      <CardMedia
        sx={{ height: 160 }}
        image={item.projectImage}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.projectTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize : '15px'}}>
          {item.projectDescription}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" sx={{fontSize : '17px', margin :'auto'}} onClick={() => {
          // navigate('detail/'+ item.projectTitle, _blank)
          window.open('detail/'+ item.projectTitle, '_blank');
        }}>Learn More</Button>
      </CardActions>
    </Card>
      </Grid>
  )
      })
     } 
      {/* <Grid item md={5.5}>
      <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Grid>
      
      <Grid item md={5.5}>
      <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Grid> */}
      {/* <Grid item md={5.5}>
      <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Grid> */}
    </Grid>
</Box>
      </Box>
    
  )
}

export default Project