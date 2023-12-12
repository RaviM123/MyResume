import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { CardActions, CardContent, LinearProgress, Card } from '@mui/material';
import {Details} from '../utils/Dummy'

const DetailProject = () => {
    const params = useParams();

    const Data = Details.find((project) => {
    return ( params.name === project.projectTitle);
    })
    // console.log(steps);

    const description = Data.projectDescription;
    const steps = Data.projectImageCollection.map((project) => {
      return {
        label : Data.projectTitle,
        imgPath : project.imgPath
      }
    })

    const navigate = useNavigate();
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
    return(
        <>
        <Box sx={{display : 'flex', justifyContent : 'center', flexDirection : 'column' , backgroundColor : '	#D3D3D3' }}>
          <Box sx={{ flexGrow: 1, marginTop : '10px'  }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent : 'center',
          flexDirection : 'column',
          height: 70,
          width : 500,
          bgcolor: 'background.default',
          margin: 'auto',
          borderRadius : '20px'
        }}
      >
        {/* <Typography>{params.name}</Typography> */}
        <Typography sx={{fontSize : '20px' , fontWeight : 'bold', paddingBottom : '10px'}}>{steps[activeStep].label}</Typography>
       <Box sx={{width : '100px', }}>
        <LinearProgress sx={{borderRadius : '10px', height : '10px' }} color="secondary" />
        </Box>
      </Paper>
      <Box sx={{ height: 550, maxWidth: 1100, width: '100%', p: 2 , margin : 'auto'}}>
       <img src={steps[activeStep].imgPath} style={{width : '100%', height : '100%', borderRadius : '10px'}}/>
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{maxWidth : 400, margin : 'auto', borderRadius : '20px'}}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    <Box sx={{width :'90%', margin : 'auto',marginTop : '10px', marginBottom : '10px'}}>
        <Card>
            <CardContent>
            <Typography sx={{fontSize : '20px', }}>{description}</Typography>
            </CardContent>
            <CardActions>
            <Button size="small" variant='contained' sx={{fontSize : '15px'}} onClick={() => {
              window.open('https://path-visualiser.vercel.app/', '_blank');
            }}>View Project</Button>
            </CardActions>
        </Card>
    </Box>
    </Box>
        </>
    );

}

export default DetailProject






