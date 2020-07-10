import React from 'react'
import MuiAutocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
  AutocompleteInputChangeReason,
} from '@material-ui/lab/Autocomplete'
import { FieldProps } from 'formik'
import type { Value } from '@material-ui/lab/useAutocomplete'

interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>
  extends FieldProps,
    Omit<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'name' | 'value' | 'defaultValue'> {
  type?: string
}

export function fieldToAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
  disabled,
  field,
  form: { isSubmitting, setFieldValue },
  type,
  onChange,
  onBlur,
  freeSolo,
  onInputChange,
  ...props
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>): MuiAutocompleteProps<
  T,
  Multiple,
  DisableClearable,
  FreeSolo
> {
  const { onChange: _onChange, onBlur: _onBlur, multiple: _multiple, ...fieldSubselection } = field

  return {
    freeSolo,
    onBlur: onBlur
      ? onBlur
      : (event: React.FocusEvent<unknown>) => {
          field.onBlur(event ?? field.name)
        },
    onInputChange: onInputChange
      ? onInputChange
      : freeSolo
      ? (_event: React.ChangeEvent<unknown>, value: string, _reason: AutocompleteInputChangeReason) => {
          setFieldValue(field.name, value)
        }
      : undefined,
    onChange: onChange
      ? onChange
      : !freeSolo
      ? (
          _event: React.ChangeEvent<unknown>,
          value: Value<T, Multiple, DisableClearable, FreeSolo>,
          _reason: AutocompleteChangeReason,
          _details?: AutocompleteChangeDetails<T>,
        ) => {
          setFieldValue(field.name, value)
        }
      : undefined,
    disabled: disabled ?? isSubmitting,
    loading: isSubmitting,
    ...fieldSubselection,
    ...props,
  }
}

export default function Autocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  return <MuiAutocomplete {...fieldToAutocomplete(props)} />
}

Autocomplete.displayName = 'FormikMaterialUIAutocomplete'
