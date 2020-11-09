import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import CardFormPersonal from './CardFormPersonal'
import CardDisplay from './CardDisplay'
import { Container } from '@material-ui/core'

// eslint-disable-next-line no-extend-native
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

function BusinessCard() {

  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ address, setAddress ] = useState('')
  const [ postCode, setPostCode ] = useState('')
  const [ country, setCountry ] = useState('')


  function handleSubmit(values) {
    console.log(values);
    setFirstName(values.firstName.capitalize())
    setLastName(values.lastName.capitalize())
    setEmail(values.email)
    setPhone(values.phone)
    setPostCode(values.postCode)
    setCountry(values.country.capitalize())
    let address = `${values.houseNumber} ${values.street.capitalize()}, ${values.suburb.capitalize()}, ${values.state}`
    setAddress(address)
  }


  return (
      <Container>
        <Typography variant="h2" style={{textAlign: 'center', marginTop: '4%'}}>Business Card</Typography>
        <CardFormPersonal handleSubmit={ handleSubmit } />
        <hr />
        <CardDisplay firstName={firstName} lastName={lastName} email={email} phone={phone} address={address} postCode={postCode} country={country}/>
      </Container>
  )
}


export default BusinessCard