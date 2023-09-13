import { MutationFunction, useMutation, useQuery } from '@apollo/client'
import {
  CreateLanguageResult,
  LanguagesResult,
  UpdateLanguageResult,
} from 'graphql/languages/languages.types'
import { ILanguage } from 'interfaces/language.interface'
import {
  getCreateLanguageMutation,
  getDeleteLanguageMutation,
  getLanguagesQuery,
  getUpdateLanguageMutation,
} from '../graphql/languages/languages.queries'

export const useLanguages = (): [ILanguage[], boolean] => {
  const { data, loading } = useQuery<LanguagesResult>(getLanguagesQuery)
  return [data?.languages || [], loading]
}

export const useLanguageCreate = (): [
  MutationFunction<CreateLanguageResult>,
  boolean,
] => {
  const [createLanguage, { loading }] = useMutation<CreateLanguageResult>(
    getCreateLanguageMutation,
    {
      refetchQueries: [getLanguagesQuery],
    }
  )
  return [createLanguage, loading]
}

export const useLanguageUpdate = (): [
  MutationFunction<UpdateLanguageResult>,
  boolean,
] => {
  const [updateLanguage, { loading }] = useMutation<UpdateLanguageResult>(
    getUpdateLanguageMutation,
    {
      refetchQueries: [getLanguagesQuery],
    }
  )
  return [updateLanguage, loading]
}

export const useLanguageDelete = (item: ILanguage) => {
  const [deleteLanguage] = useMutation(getDeleteLanguageMutation, {
    variables: {
      id: item.id,
    },
    update(cache) {
      const id = cache.identify({ id: item.id, __typename: 'Language' })
      cache.evict({ id })
      cache.gc()
    },
  })
  return [deleteLanguage]
}
