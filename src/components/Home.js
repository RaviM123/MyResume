import React from 'react'
import { useNavigate} from 'react-router-dom'
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import { Link } from 'react-scroll';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();

    const handleChangeGitHub = () => {
        window.open('https://github.com/RaviM123', '_blank');
    }
    const handleChangeLeetCode = () => {
        window.open('https://leetcode.com/RaviMalakar/', '_blank');
    }
    const handleChangeLinkedIn = () => {
        window.open('https://www.linkedin.com/in/ravi-malakar-a93419192/', '_blank')
    }
  return (
    <div name="home" className='h-[100vh] relative'>
      <div className='absolute inset-0 opacity-25 bg-[url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)]'></div>
        <div className='absolute top-[30%] left-[50%] translate-x-[-50%] '>
            <h1 className='text-black text-5xl uppercase font-bold tracking-[1px]'>Hey, I'm Ravi Malakar</h1>
        </div>
        <div className='absolute top-[45%] left-[50%] translate-x-[-50%] '>
            <p className='text-xl text-center'>Enthusiastic MERN stack developer, I have honed my skills in front-end technologies as well as back-end technologies, I am dedicated to crafting robust,
user-friendly, and responsive web applications</p>
        </div>
        <div className='absolute top-[75%] left-[50%] translate-x-[-50%]'>
            <button className='px-20 tracking-[1px] text-lg font-bold py-4 text-white duration-150 bg-indigo-600 rounded-md hover:bg-indigo-500 active:bg-indigo-700'>
                <Link to='project'smooth={true} offset={-110} duration={500}>Project</Link></button>
        </div>
        <div className='absolute top-[40%] bg-white rounded-md'>
            <div className='p-3 cursor-pointer' onClick={handleChangeLinkedIn}>
            <LinkedIn sx={{fontSize : '40px'}}/>
            </div>
            <div className='p-3 cursor-pointer' onClick={handleChangeGitHub}>
            <GitHubIcon sx={{fontSize : '40px'}}/>
            </div>
            <div className='p-3 cursor-pointer' onClick={handleChangeLeetCode}>
            <TerminalIcon sx={{fontSize : '40px'}}/>
            </div>
       </div>
       <div className='absolute bottom-4 left-[50%]'>
        <div className='mouse border-[2px] border-cyan-950 bg-white-500 translate-x-[-50%] w-[30px] h-[60px] rounded-[50px]'>

        </div>
       </div>
    </div>
  )
}

export default Home
