import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { useLanguageCreate, useLanguageUpdate } from '@hooks/use-languages.hook'
import { createDialogHook } from '@hooks/create-dialog-hook.helper'
import { LanguageFormValues, LanguageProps } from './language.types'
import * as Styled from './language.styles'

const defaultValues: LanguageFormValues = {
  name: '',
  native_name: '',
  iso2: '',
}

const Language = ({ item, closeDialog }: LanguageProps) => {
  const { t } = useTranslation()
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm<LanguageFormValues>({
    defaultValues: item || defaultValues,
  })

  const [createLanguage, loading] = useLanguageCreate()
  const [updateLanguage, updating] = useLanguageUpdate()

  const onSubmit = (values: LanguageFormValues) => {
    const languageData = {
      iso2: values.iso2,
      name: values.name,
      native_name: values.native_name,
    }

    if (item) {
      updateLanguage({
        variables: {
          id: item.id,
          language: languageData,
        },
      }).then(closeDialog)
    } else {
      createLanguage({
        variables: {
          language: languageData,
        },
      }).then(closeDialog)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>
        {item ? t('Update language') : t('Create language')}
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
          {item ? t('Update') : t('Create')}
        </Button>
      </DialogActions>
    </form>
  )
}

export const useLanguageDialog = createDialogHook<LanguageProps>(
  (props) => () => <Language {...props} />,
  { maxWidth: 'sm', fullWidth: true }
)
