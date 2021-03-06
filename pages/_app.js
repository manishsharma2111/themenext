import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { ThemeContextProvider } from '../theme/themeContext';

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  background-color: var(--background);
  color: var(--text-color);
  transition: background-color 200ms, color 200ms;
}

body {
  --background: #faf4f8;
  --text-color: rgba(0, 0, 0, 0.87);
  --link: #3182ce;
}

body.dark {
  --background: #1a202c;
  --text-color: #f7fafc;
  --link: #63b3ed;
}

a {
  text-decoration: none;
  color: var(--link);
}

button:focus {
  box-shadow: 0 0 0 3px rgba(237, 137, 54, 0.5);
}

`;

function App({ Component, pageProps }) {
    return (
        <>
            <ThemeContextProvider>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeContextProvider>
        </>
    );
}

export default App;
