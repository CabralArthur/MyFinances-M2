import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`

    header{
        display: flex;
        padding-bottom: 1rem;
        margin-bottom: .5rem;
        align-items: center;
        justify-content: space-between;

        h2{
            color: var(--text-title);
            font-size:1.5rem;
        }

        img{
            width: 50px;
            height: 50px;
            &:hover{
                cursor: pointer;
                filter: brightness(0.9);
            }
        }
    }

    input{
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        outline: none;

        &::placeholder{
            color: var(--text-body);
        }

        & + input{
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width:100%;
        padding: 0 1.5rem;
        height:4rem;

        background-color: var(--green);
        color: var(--shape);

        border-radius: 0.25rem;
        border: 0;

        font-size: 1rem;
        
        margin-top: 1rem;

        &:hover{
            filter: brightness(0.9)
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    
    grid-template-columns: 1fr 1fr;

    gap: .5rem;

`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const color = {
    green: '#33cc95',
    red: '#e25e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive 
    ? transparentize(0.9,color[props.activeColor]) 
    : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: border-color .2s;
    
    &:hover{
        ${darken(0.1, '#d7d7d7')}
    }

    img{
        width: 20px;
        height: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`