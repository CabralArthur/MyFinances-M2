import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    table{
        width: 100%;
        border-spacing: 0 0.5rem; //Muito utilizada para esp. entre itens
        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
            &:first-child{
                color: var(--text-title);
            }

            &.deposit{
                color: var(--green);
            }

            &.withdraw{
                color: var(--red);
            }

        }

        @media screen and (max-width: 600px) {
            thead {
                border: none;
                clip: rect(0 0 0 0);
                height: 1px;
                margin: -1px;
                overflow: hidden;
                padding: 0;
                position: absolute;
                width: 1px;
            }
            
            tr {
                border-bottom: 3px solid #ddd;
                display: block;
                margin-bottom: .625em;
            }
            
            td {
                border-bottom: 1px solid #ddd;
                display: block;
                font-size: .8em;
                text-align: right;
            }
            
            td::before {
                content: attr(data-label);
                float: left;
                font-weight: bold;
                text-transform: uppercase;
            }
            
            td:last-child {
                border-bottom: 0;
            }
        }
    }

    
`;