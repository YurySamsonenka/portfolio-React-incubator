import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { MyTheme } from './styles/Theme.styled';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={MyTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>
);

reportWebVitals();
