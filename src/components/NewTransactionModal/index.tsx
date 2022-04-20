import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h1>Cadastrar Transação</h1>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Preço" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Modal>
    </Container>
  );
}
