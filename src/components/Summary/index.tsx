import { useEffect, useState } from "react";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions/intex";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();
  const [values, setValues] = useState({
    incomes: 0,
    outcomes: 0,
  });

  useEffect(() => {
    if (transactions.length) {
      let incomes = 0;
      let outcomes = 0;

      transactions.forEach((transaction) => {
        if (transaction.type === "deposit") {
          incomes += Number(transaction.amount);
        } else {
          outcomes += Number(transaction.amount);
        }
      });

      setValues({
        incomes,
        outcomes,
      });
    }
  }, [transactions]);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(values.incomes)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="Saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(values.outcomes)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(values.incomes - values.outcomes)}
        </strong>
      </div>
    </Container>
  );
}
