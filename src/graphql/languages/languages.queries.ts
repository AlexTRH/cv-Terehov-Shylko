import { gql } from '@apollo/client'

export const getLanguagesQuery = gql`
  query Languages {
    languages {
      id
      iso2
      name
      native_name
    }
  }
`

export const getCreateLanguageMutation = gql`
  mutation CreateLanguage($language: LanguageInput!) {
    createLanguage(language: $language) {
      id
      iso2
      name
      native_name
    }
  }
`

export const getUpdateLanguageMutation = gql`
  mutation UpdateLanguage($id: ID!, $language: LanguageInput!) {
    updateLanguage(id: $id, language: $language) {
      id
      iso2
      name
      native_name
    }
  }
`

export const getDeleteLanguageMutation = gql`
  mutation DeleteLanguage($id: ID!) {
    deleteLanguage(id: $id) {
      affected
    }
  }
`
