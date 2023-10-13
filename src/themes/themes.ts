import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#151414',
    },
    secondary: {
      main: '#101010',
    },
    error: {
      main: '#c63031',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: 10,
          height: 10,
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#bdbdbd',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: '#f5f5f7',
        },
        html: {
          height: '100%',
          width: '100%',
        },
        body: {
          margin: 0,
          backgroundColor: '#f5f5f7',
          height: '100%',
          width: '100%',
        },
        '#root': {
          height: '100%',
          width: '100%',
          paddingTop: 128,
        },
        form: {
          '& > .MuiTextField-root': {
            marginBottom: 20,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0aa7f6',
          height: 64,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginTop: 'auto',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#f5f5f7',
          minWidth: 150,
          '&.active': {
            fontWeight: 600,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          '&:hover > fieldset': {
            borderColor: '#2e2e2e',
          },
        },
        input: {
          boxShadow: '0 0 0 30px #f5f5f7 inset !important',
        },
        notchedOutline: {
          borderWidth: '1px !important',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root': {
            top: 64 * 3,
          },
          '& .MuiTableCell-root:last-child': {
            width: 20,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          top: 'inherit',
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#f5f5f7',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingTop: '16px !important',
        },
      },
    },
  },
})

export default theme
