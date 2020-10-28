import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Input, Button } from '@material-ui/core';

function SignupForm({ handleSignup }) {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [signUpButton, setSignUpButton] = useState(false)

  const handleInputChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    name == 'username' ? setUsername(value) : setPassword(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSignup(username, password)
  }


  return (
    <>
      <Typography variant="h4">Signup Form</Typography>

      <Box mt={2}>
        { !signUpButton

          ? <Button variant ="contained" color="primary" onClick={() => setSignUpButton(true)}>Sign Up</Button>

          : <form onSubmit={handleSubmit}>
              <Grid container direction="column" justify="flex-start" alignItems="center" spacing={2} style={{padding: '4% 0'}}>
                <Grid item>
                  <Input type="text" name="username" placeholder="Username" value={username} onChange={handleInputChange} />
                </Grid>
                <Grid item>
                  <Input type="password" name="password" placeholder="Password" value={password} onChange={handleInputChange} />
                </Grid>
              </Grid>
              <Button type="submit" variant="outlined" color="primary" >Sign Up</Button>
            </form>
        }
      </Box>
    </>
  )
}

export default SignupForm