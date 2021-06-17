import React, { useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ThemeContext } from '../context/themeContext';

// export const COLORS = {
//     text: {
//         light: 'hsl(0deg, 0%, 10%)', // white
//         dark: 'hsl(0deg, 0%, 100%)', // near-black
//     },
//     background: {
//         light: 'hsl(0deg, 0%, 100%)', // white
//         dark: 'hsl(250deg, 70%, 7%)', // navy navy blue
//     },
// };
// export const COLOR_MODE_KEY = 'color-mode';
// export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

// export const GlobalStyle = createGlobalStyle`
// [data-theme="dark"] {
// 		--color-text:'#fffafa' ;
//         --color-background:'#36454F'
//         }
//         [data-theme="light"] {
// 		--color-text:'#36454F' ;
//         --color-background:'#fffafa'
//         }

// :root{
//     --color-background: rgb(255, 255, 255);
// }
//  * {
//     margin: 0;
//     padding: 0;
//     background: var(--color-background);
//     color:  var(--color-text);
//     font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
//     transition: all 0.30s linear;
//   }

//  `;

// const StyledTheme = ({ children }) => {
//     const { theme } = useContext(ThemeContext);

//     return (
//         <ThemeProvider theme={themes[theme]}>
//             <GlobalStyle />
//             {children}
//         </ThemeProvider>
//     );
// };

// export default StyledTheme;
