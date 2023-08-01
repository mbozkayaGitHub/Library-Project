//create global styles

//create global styles

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-transform: uppercase;
        font-family: "Shantell Sans", cursive;

    }

    body {
        font-size: 1.5rem;
        background: ${({ theme }) => theme.colors.mainColor};
    }
`;
