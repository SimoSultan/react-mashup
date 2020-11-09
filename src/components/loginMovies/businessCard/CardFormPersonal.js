import React from 'react'
import { Formik, Form } from 'formik';
import CardInput from './CardInput'
import CardSelect from './CardSelect'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';

const CardFormPersonal = ({ handleSubmit }) => {

  return (
    <>
      <Typography variant="h5" style={{textAlign: 'center', marginTop: '5%'}}>Personal Details</Typography>
      <hr />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          houseNumber: '',
          street: '',
          suburb: '',
          state: '',
          postCode: '',
          country: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values)
          setSubmitting(false);
        }}
      >
        <Form>
          <Grid container justify="space-around">
            <Grid item>
              <CardInput
                label="First Name"
                name="firstName"
                type="text"
                required
              />
            </Grid>
            <Grid item>
              <CardInput
                label="Last Name"
                name="lastName"
                type="text"
                required
              />
            </Grid>
          </Grid>

          <Grid container justify="space-around">
            <Grid item>
              <CardInput
                label="Email Address"
                name="email"
                type="email"
                required
              />
            </Grid>
            <Grid item>
              <CardInput
                label="Phone"
                name="phone"
                type="tel"
                required
              />
            </Grid>
          </Grid>

          <Grid container justify="space-around">
            <Grid item>
              <CardInput
                label="House Number"
                name="houseNumber"
                type="text"
                required
              />
            </Grid>
            <Grid item>
              <CardInput
                label="Street Name"
                name="street"
                type="text"
                required
              />
            </Grid>
          </Grid>

          <Grid container justify="space-around">
            <Grid item>
              <CardInput
                label="Suburb"
                name="suburb"
                type="text"
                required
              />
            </Grid>
            <Grid item>
              <CardInput
                label="Post Code"
                name="postCode"
                type="text"
                required
              />
            </Grid>
          </Grid>

          <Grid container justify="space-around" style={{marginTop: '0.5%'}}>
            <Grid item>
              <CardSelect label="State" name="state" required style={{width: '400%'}} />
            </Grid>
            <Grid item>
              <CardInput
                label="Country"
                name="country"
                type="text"
                required
              />
            </Grid>
          </Grid>

          <Grid container justify="center" alignItems="center" style={{marginTop: '3%'}}>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </Grid>

        </Form>
      </Formik>
    </>
  );
};

export default CardFormPersonal;