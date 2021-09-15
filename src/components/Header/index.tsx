import { Container, Content } from "./styles";
import logoSource from '../../assets/img/logoSvg.svg';

export function Header(){
    return (
        <Container>
            <Content>
                <img src={logoSource} alt="Logo MyFinances" />
                <button type="button">Nova Transação</button>
            </Content>
        </Container>
    )
}