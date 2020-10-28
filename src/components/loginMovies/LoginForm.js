import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Input, Button } from '@material-ui/core';

function LoginForm({handleLogin}) {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [logInButton, setLogInButton] = useState(false)

  const handleInputChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    name == 'username' ? setUsername(value) : setPassword(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin(username, password)
  }


  return (
    <>
      <Typography variant="h4">Login Form</Typography>

      <Box mt={2}>
        { !logInButton

          ? <Button variant ="contained" color="primary" onClick={() => setLogInButton(true)}>Log In</Button>

          : <form onSubmit={handleSubmit}>
              <Grid container direction="column" justify="flex-start" alignItems="center" spacing={2} style={{padding: '4% 0'}}>
                <Grid item>
                  <Input type="text" name="username" placeholder="Username" value={username} onChange={handleInputChange} />
                </Grid>
                <Grid item>
                  <Input type="password" name="password" placeholder="Password" value={password} onChange={handleInputChange} />
                </Grid>
              </Grid>
              <Button type="submit" variant="outlined" color="primary">Log In</Button>
            </form>
        }
      </Box>
    </>
  )
}


export default LoginForm