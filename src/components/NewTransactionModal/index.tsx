import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import CloseButtonImg from '../../assets/img/CloseSvg.svg'
import outcomeImg from '../../assets/img/saidasSvg.svg'
import incomeImg from '../../assets/img/entradasSvg.svg'
import { useTransactions } from '../../hooks/useTransactions'

import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransationModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransationModal({ isOpen, onRequestClose }: NewTransationModalProps) {
    const { createTransaction } = useTransactions();

    const [amount, setAmount] = useState(0);
    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('');

    const [type, setType] = useState('deposit');
    
    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault(); //Previnir o funcionamento padrão do html
        
        await createTransaction({
            title,
            amount,
            category,
            type
        })
        
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')

        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'>

            <Container onSubmit={handleCreateNewTransaction}>

                <header>
                    <h2>Cadastrar Transação</h2>
                    <img src={CloseButtonImg} alt="Fechar" onClick={onRequestClose} />
                </header>


                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
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