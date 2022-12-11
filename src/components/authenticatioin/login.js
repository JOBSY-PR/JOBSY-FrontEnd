import React from 'react'
import { Button, FormControl, TextField } from '@mui/material'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='signup-form'>
        <FormControl 
      
      sx={{
         border:'1px solid grey',
         borderRadius:'5px',
         padding:'20px',
         '& .MuiTextField-root': { m: 1, width: '40ch',  },
       }}>
         <h1>Log In</h1>
         <TextField type='email' variant='outlined' label='Your email'/>
         <TextField type='password' variant='outlined' label='Your password'/>
         <Link style={{width:'100%', margin:"auto"}} to='/home'><Button fullWidth variant='contained'>LOG IN</Button></Link>
         <p>Don't have an account? <Link style={{color:'black'}} to='/'>Sign Up</Link></p>
     </FormControl>
    </div>
  )
}

export default Login