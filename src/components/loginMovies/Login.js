import React from 'react'
import LoginForm from './LoginForm'
// import SignupForm from './SignupForm'
import { Container, Button } from '@material-ui/core';
import SignupForm from './SignupForm';

const padding = {
  paddingTop: '4%',
}

class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      currentUsername: '',
      currentPassword: '',
    }
  }

  handleInputChange = (event) => {
    let name = event.target.name
    let value = event.target.value

    this.setState({
      [name]: value
    });
  }

  
  handleLogin = (logInUsername, logInPassword) => {
    const { currentUsername, currentPassword } = this.state
    if(logInUsername == currentUsername && logInPassword == currentPassword) {
      this.setState({loggedIn: true})
    } else {
      alert('Incorrect username or password, please try again.')
    }
  }

  handleSignup = (signUpUsername, signUpPassword) => {
    this.setState({
      loggedIn: true,
      currentUsername: signUpUsername,
      currentPassword: signUpPassword,
    })
  }

  handleLogout = () => {
    if (confirm("Are you sure you wish to logout?")) {
      this.setState({loggedIn: false})
    }
  }

  render() {
    const { currentUsername, currentPassword } = this.state
    const { loggedIn } = this.state

    return (

        <Container>
          { loggedIn 
            ? <Button variant="contained" color="secondary" onClick={this.handleLogout} style={padding}>Log Out</Button>
            : currentUsername == ''  && currentPassword == ''
              ? <SignupForm handleSignup={this.handleSignup} />
              : <LoginForm handleLogin={this.handleLogin}/>
          }
        </Container>
      )
  }
}

export default Login