import { createMuiTheme } from "@material-ui/core/styles";


export const MyTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#90CA70',
      },
      secondary: {
        main: '#8FD5DC',
      },
      background: '#fafafa',
    },
    typography: {
      fontFamily: ""
    },
    overrides: {
      MuiMenuItem: {
        root: {
          background: '#fff',
        },
        selected: {
          background: '#fff',
        }
      },
      MuiExpansionPanel: {
        root: {
          background: 'white',
        }
      },
      MuiCardContent:{
        root: {
          background: 'white',
        }
      },
      MuiList: {
        root: {
          width: '100%'
        },
        padding: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }
    }
  });