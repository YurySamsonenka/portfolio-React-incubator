import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { MyTheme } from './styles/Theme.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={MyTheme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>
);

reportWebVitals();
