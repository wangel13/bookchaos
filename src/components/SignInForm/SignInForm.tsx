import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Visibility from '@material-ui/icons/Visibility'
import { makeStyles } from '@material-ui/core/styles'
import FormikAdapter from '../FormikAdapter'

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(8, 'Password must contain at least 8 characters').required('Required'),
})

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(1),
  },
}))

export const SignForm = ({ isSubmitting, isValid }) => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Form>
      <Field
        name="email"
        InputComponent={TextField}
        variant="outlined"
        label="Email"
        margin="dense"
        fullWidth
        helperText="Required"
        component={FormikAdapter}
        className={classes.input}
      />
      <Field
        className={classes.input}
        name="password"
        margin="dense"
        fullWidth
        helperText="Required"
        InputComponent={TextField}
        component={FormikAdapter}
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        label="Password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        className={classes.button}
        disabled={isSubmitting || !isValid}
        type="submit"
        variant="contained"
        fullWidth
        color="primary"
      >
        Log in
      </Button>
    </Form>
  )
}

export const SignInForm = ({ onSubmit }) => (
  <Formik initialValues={{ email: '', password: '' }} validationSchema={SignInSchema} onSubmit={onSubmit}>
    {(props) => <SignForm {...props} />}
  </Formik>
)
