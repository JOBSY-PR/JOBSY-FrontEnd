import { BorderAll } from '@mui/icons-material';
import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import { Link, Router } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signup-form'>
      <FormControl
        sx={{
          border: '1px solid grey',
          borderRadius: '5px',
          padding: '20px',
          '& .MuiTextField-root': { m: 1, width: '40ch', },
        }}>
        <h1>Sign Up</h1>
        <TextField variant='outlined' type='text' label='Your name' />
        <TextField type='email' variant='outlined' label='Your email' />
        <TextField type='password' variant='outlined' label='Your password' />
        <TextField type='password' variant='outlined' label='Confirm password' />
        <Link to='/home'><Button fullWidth variant='contained'  >SIGN UP</Button></Link>
        <p>Already have an account? <Link style={{ color: 'black' }} to='/login'>Login</Link></p>
      </FormControl>
    </div>
  )
}

export default SignUp