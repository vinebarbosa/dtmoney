import { useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, TrasactionTypeContainer, RadioBox } from "./styles";
import { useTransactions } from "../../hooks/useTransactions/intex";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { addTransaction } = useTransactions();
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(event.target.value);
  }

  function handleCategoryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCategory(event.target.value);
  }

  function resetStates() {
    setTitle("");
    setAmount("");
    setCategory("");
    setType("deposit");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = {
      title,
      amount,
      type,
      category,
    };

    await addTransaction(data);
    onRequestClose();
    resetStates();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <Container onSubmit={handleSubmit}>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <h1>Nova Transação</h1>

        <input
          placeholder="Titulo"
          value={title}
          onChange={handleTitleChange}
        />

        <input
          type="number"
          placeholder="Preço"
          value={amount}
          onChange={handleAmountChange}
        />

        <TrasactionTypeContainer>
          <RadioBox
            type="button"
            active={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            active={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TrasactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={handleCategoryChange}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
