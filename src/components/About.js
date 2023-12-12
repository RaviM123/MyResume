import { Card, Grid, Stack } from '@mui/material'


import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'
import { grey } from '@mui/material/colors';

const About = () => {
  return (
    <div name="about" className='h-[100vh] border-[2px] bg-gray-200'>   
     < div className='w-[92%] m-[auto] relative'>
      <h2 className='text-4xl font-bold absolute left-[50%] translate-x-[-50%]  mt-[30px]  tracking-[1px] uppercase'>About Me</h2>
      <div className='w-[60px] bg-purple-800 rounded-lg h-2 absolute left-[50%] translate-x-[-50%] mt-[90px]'></div>
      <div className='absolute mt-[140px] left-[50%] translate-x-[-50%] text-center text-xl text-gray-700'>
        <span className="">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
      </div>
      <div className='grid  absolute left-[5%] mt-[220px] grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-[10rem]'>

        <div>
        <h2 className='font-semibold text-[1.8rem] mb-8'>Get To Know Me!</h2>
        <div>
          <p className='text-lg text-gray-600 max-w-[64rem] text-justify'>
I graduated in 2023 from <strong>SGSITS Indore</strong> with a CGPA of 7.84. Certified as a Google Cloud Platform Associate Cloud Engineer (GCP ACE) in May 2023, I interned at Quantiphi Analytics Solutions Ltd., gaining practical insights into Software developer. Achieving 82 percent in 12th grade, I am also a recipient of the MMVY Scholarship. Beyond academics, I enjoy doodling and have a passion for teaching. Eager to contribute my skills and knowledge to meaningful projects.
      
          </p>
        </div>
        </div>
        <div>
    <h2 className='font-semibold text-[1.8rem] mb-8'>My Skills</h2>
    <div className='flex flex-wrap'>
    <Button variant="contained" style={{marginRight: '6px', marginBottom: '6px', background : 'white', color : 'grey', fontSize: '1rem', textTransform : 'none' }}>ReactJS</Button>
    <Button variant="contained"  style={{marginRight: '6px', marginBottom: '6px', background : 'white', color : 'grey', fontSize: '1rem', textTransform : 'none'}}>JavaScript</Button>
    <Button variant="contained"  style={{marginRight: '6px', marginBottom: '6px', background : 'white', color : 'grey', fontSize: '1rem', textTransform : 'none'}}>Data Structure and Algorithm</Button>
    <Button variant="contained"  style={{marginRight: '6px', marginBottom: '6px', background : 'white', color : 'grey', fontSize: '1rem', textTransform : 'none'}}>MongoDb</Button>
    <Button variant="contained"  style={{marginRight: '6px', marginBottom: '6px', background : 'white', color : 'grey', fontSize: '1rem', textTransform : 'none'}}>NodeJS</Button>
    <Button variant="contained"  style={{marginRight: '6px', marginBottom: '6px', background : 'white', color : 'grey',fontSize: '1rem', textTransform : 'none'}}>ExpressJs</Button>
    <Button variant="contained" style={{marginRight: '6px', marginBottom: '6px', background : 'white', color : 'grey', fontSize: '1rem', textTransform : 'none'}}>GitHub</Button>
    <Button variant="contained" style={{marginRight: '6px', marginBottom: '6px', background : 'white', color : 'grey', fontSize: '1rem', textTransform : 'none'}}>Git</Button>
    <Button variant="contained" style={{marginRight: '6px', marginBottom: '6px', background : 'white', color : 'grey', fontSize: '1rem', textTransform : 'none'}}>SQL</Button>
    </div>
        </div>
      </div>
    
      </div>
      </div>
  )
}


export default About