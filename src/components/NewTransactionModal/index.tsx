import Modal from 'react-modal'

interface NewTransationModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransationModal({isOpen,onRequestClose}: NewTransationModalProps) {
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}>
            <h2>Cadastrar Transação</h2>
        </Modal>
    )
}