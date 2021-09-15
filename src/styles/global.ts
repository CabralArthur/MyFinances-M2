import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    //Variáveis CSS
    :root{
        --background: #f0f2f5;
        --dark: #011627;
        --orange: #ff9f1c;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;

        --red: #e52e4d;
        --green: #33cc95;
    }
    
    //Reset CSS
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    //Tamanho de fonte padrão => 16px (Desktop)
    html{

        @media(max-width:1080px){
            font-size: 93.75%; //15px
        }

        @media(max-width:720px){
            font-size: 87.5%; //14px
        }

        //REM -> 1rem = font-size
    } //Importante para acessibilidade

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    //Definição de fontes e weight padrão
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`