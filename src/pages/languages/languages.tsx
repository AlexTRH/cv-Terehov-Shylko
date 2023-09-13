import { createTable } from '../../components/templates/table'
import { LanguagesTableTool } from '../../components/organisms/languages-table-tool'
import { LanguagesTableHead } from '../../components/organisms/languages-table-head'
import { LanguagesTableRow } from '../../components/organisms/languages-table-row'
import { useLanguages } from '../../hooks/use-languages.hook'
import { ILanguage } from '../../interfaces/language.interface'

const Table = createTable<ILanguage>()

const Languages = () => {
  const [languages, loading] = useLanguages()

  return (
    <div>
      <Table
        items={languages}
        loading={loading}
        TableToolComponent={LanguagesTableTool}
        TableHeadComponent={LanguagesTableHead}
        TableRowComponent={LanguagesTableRow}
        searchBy={['name', 'native_name', 'iso2']}
        defaultSortBy="name"
      />
    </div>
  )
}

export default Languages
