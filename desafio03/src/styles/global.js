import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    bix-sizing: border-box;
}

body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
}
`;

export default GlobalStyle