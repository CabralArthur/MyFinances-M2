import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import incomeImg from '../../assets/img/entradasSvg.svg'
import outcomeImg from '../../assets/img/saidasSvg.svg'
import { api } from '../../services/api'

import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransationModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransationModal({ isOpen, onRequestClose }: NewTransationModalProps) {

    const [value, setValue] = useState(0);
    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('');

    const [type, setType] = useState('deposit');
    
    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault(); //Previnir o funcionamento padrão do html
        
        const data = ({
            title,
            category,
            value,
            type
        })

        api.post('transactions', data)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />
                
                <TransactionTypeContainer>
                    <RadioBox
                    type="button"
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor = "green"
                    >
                        <img src={incomeImg} alt="Entradas" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                    type="button"
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saídas" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}