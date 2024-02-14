import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import GlobalStyle from './styles/GlobalStyle.styled';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemePrvoider } from "@mui/material/styles";
import Theme from './styles/Theme';
import ResetStyles from './styles/resetStyles';
import getMuiTheme from './styles/muiTheme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
// const muiTheme = getMuiTheme();

root.render(
    <React.StrictMode>
        <ResetStyles />
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
            {/* <MuiThemePrvoider theme={muiTheme}> */}
                <App />
            {/* </MuiThemePrvoider> */}
        </ThemeProvider>
    </React.StrictMode>
);