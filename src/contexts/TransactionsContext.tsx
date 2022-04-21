import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";

export interface TransactionBase {
  title: string;
  amount: string;
  type: "deposit" | "withdraw" | string;
  category: string;
}

export interface Transaction extends TransactionBase {
  id: string;
  created_at: Date;
}

interface TransactionsContextData {
  transactions: Transaction[];
  addTransaction: (transaction: TransactionBase) => Promise<void>;
  loadTransactions: () => void;
}

export const TransactionsContext = createContext({} as TransactionsContextData);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function loadTransactions() {
    api.get("/transactions").then(({ data, status }) => {
      if (status === 200) {
        setTransactions(data.transactions);
      }
    });
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  async function addTransaction(transaction: TransactionBase) {
    const response = await api.post("transactions", transaction);
    if (response.status === 201) {
      setTransactions([...transactions, response.data.transaction]);
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        loadTransactions,
        addTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
