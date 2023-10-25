import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import {
  useLanguageCreate,
  useLanguageUpdate,
} from '../../../hooks/use-languages.hook'
import { createDialogHook } from '../../../hooks/create-dialog-hook.helper'
import { LanguageFormValues, LanguageProps } from './language.types'
import { Notifications } from '../../features/notifications'
import * as Styled from './language.styles'

const defaultValues: LanguageFormValues = {
  name: '',
  native_name: '',
  iso2: '',
}

const Language = ({ languageItem, closeDialog }: LanguageProps) => {
  const { t } = useTranslation()
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm<LanguageFormValues>({
    defaultValues: languageItem || defaultValues,
  })

  const [errorMessage, setErrorMessage] = useState('')
  const [createLanguage, loading] = useLanguageCreate()
  const [updateLanguage, updating] = useLanguageUpdate()

  const onSubmit = (values: LanguageFormValues) => {
    const languageData = {
      iso2: values.iso2,
      name: values.name,
      native_name: values.native_name,
    }

    if (languageItem) {
      updateLanguage({
        variables: {
          id: languageItem.id,
          language: languageData,
        },
      })
        .then(closeDialog)
        .catch((error) => {
          console.error('An error occurred during language update:', error)
          setErrorMessage('Failed to update language. Please try again.')
        })
    } else {
      createLanguage({
        variables: {
          language: languageData,
        },
      })
        .then(closeDialog)
        .catch((error) => {
          console.error('An error occurred during language creation:', error)
          setErrorMessage('Failed to create language. Please try again.')
        })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>

        {languageItem ? t('Update language') : t('Create language')}
      </DialogTitle>
      <Styled.Column>
        <TextField
          {...register('name', { required: true })}
          autoFocus
          label={t('Name')}
          error={!!errors.name}
        />
        <TextField
          {...register('native_name')}
          label={t('Native Name')}
          error={!!errors.native_name}
        />
        <TextField
          {...register('iso2', { required: true, minLength: 2, maxLength: 2 })}
          label="ISO2"
          error={!!errors.iso2}
        />
      </Styled.Column>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={closeDialog}>
          {t('Cancel')}
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading || updating || !isDirty}
        >
          {languageItem ? t('Update') : t('Create')}
        </Button>
      </DialogActions>
      {errorMessage && <Notifications message={errorMessage} show={true} />}
    </form>
  )
}

export const useLanguageDialog = createDialogHook<LanguageProps>(
  (props) => () => <Language {...props} />,
  { maxWidth: 'sm', fullWidth: true }
)
