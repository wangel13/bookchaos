import React from 'react'
import { getIn } from 'formik'

const FormikAdapter = ({
  field: { name },
  field,
  form: { touched, errors, isSubmitting },
  helperText,
  disabled,
  InputComponent,
  ...props
}) => {
  const fieldError = getIn(errors, name)
  const showError = getIn(touched, name) && !!fieldError

  return (
    <InputComponent
      id={name}
      helperText={showError ? fieldError : helperText}
      error={showError}
      disabled={disabled !== undefined ? disabled : isSubmitting}
      {...field}
      {...props}
    />
  )
}

export default FormikAdapter
