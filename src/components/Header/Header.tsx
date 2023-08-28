import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledToolbar, StyledIconButton } from './header.styles';

const Header = () => {

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <StyledToolbar>
                <Box sx={{ width: 34 }}></Box>
                 <StyledIconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            onClick={() => console.log("cick")}
          >
            <MenuIcon />
          </StyledIconButton>
          </StyledToolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header