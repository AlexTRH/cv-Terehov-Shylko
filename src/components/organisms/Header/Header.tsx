import { Container } from '@mui/material'
import * as Styled from './header.styles'
import SideMenu from '../side-menu/side-menu.organism'
import { UserMenu } from '../user-menu/user-menu'
import { LanguageSelect } from '../../molecules/language-select'

const Header = () => {
  return (
    <Styled.Header>
      <Container maxWidth="xl">
        <Styled.LeftPart>
          <SideMenu />
        </Styled.LeftPart>
        <Styled.RightPart>
          <LanguageSelect sx={{ mr: 6 }} />
          <UserMenu />
        </Styled.RightPart>
      </Container>
    </Styled.Header>
  )
}
export default Header
