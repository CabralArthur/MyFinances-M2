import { Container, Content } from "./styles";
import logoSource from '../../assets/img/logoSvg.svg';

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoSource} alt="Logo MyFinances" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}