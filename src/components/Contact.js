import { ModalManager } from '@mui/material';
import React, { useState } from 'react'

const Contact = () => {
  const [email , setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [textDetails, setTextDetails] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();
     console.log(email);
     console.log(mobile);
     console.log(textDetails);

     setEmail('');
  }

  return (
    <div name="contact" className='h-[120vh] border-[2px] bg-gray-200'>   
    <div>
    <h2 className='text-4xl font-bold absolute left-[50%] translate-x-[-50%]  mt-[60px]  tracking-[1px] uppercase'>Contact</h2>
      <div className='w-[60px] bg-purple-800 rounded-lg h-2 absolute left-[50%] translate-x-[-50%] mt-[110px]'></div>
      <div className='absolute mt-[160px] left-[50%] translate-x-[-50%] text-center text-xl text-gray-700'>
        <span className="">Here you can contact me by filling the form</span>
      </div>
    </div>
    
    <div className="bg-white absolute left-[50%] mt-[300px] p-[20px] border-[2px] rounded-md w-[40%] translate-x-[-50%] flex justify-center">
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        {/* <label style={{ margin: '8px 0' }}> */}
          {/* Email: */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-[270px]'
            style={{ padding: '8px', border : '2px solid black', borderRadius : '10px', marginBottom : '10px' }}
        placeholder='Email'
          />
        {/* </label> */}

        {/* <label style={{ margin: '8px 0' }}>
          Number: */}
          <input
            type="tel"
            value={mobile}
            className='w-[270px]'
            onChange={(e) => setMobile(e.target.value)}
            style={{ padding: '8px',  border : '2px solid black', borderRadius : '10px' ,marginBottom : '10px' }}
            placeholder='Mobile Number'
          />
        {/* </label> */}

        {/* <label style={{ margin: '8px 0' }}>
          Message: */}
          <textarea
            value={textDetails}
            onChange={(e) => setTextDetails(e.target.value)}
            className = 'w-[270px]'
            style={{ padding: '8px', minHeight: '100px', border : '2px solid black', borderRadius : '10px' ,marginBottom : '10px' }}
            placeholder='Any Other Information'
          />
        {/* </label> */}

        <button type="submit" className='w-[100px] rounded-md bg-blue-600' style={{ padding: '8px', color: 'white', cursor: 'pointer', margin : 'auto' }}>
          Submit
        </button>
      </form>
    </div>


        </div>
     
 
  )
}

export default Contact