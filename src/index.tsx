import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import GlobalStyle from './styles/GlobalStyle.styled';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import ResetStyles from './styles/resetStyles';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ResetStyles />
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);