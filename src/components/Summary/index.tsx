import { Container } from "./styles";
import entradasImg from '../../assets/img/entradasSvg.svg';
import saidasImg from '../../assets/img/saidasSvg.svg';
import totalImg from '../../assets/img/totalSvg.svg';
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
    const transactions = useContext(TransactionsContext);
    console.log(transactions);
    
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="Saídas" />
                </header>
                <strong>-R$ 500,00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}