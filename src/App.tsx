import { useState } from "react"

import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { GlobalStyle } from "./styles/global"

import Modal from "react-modal"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { TransactionsProvider } from "./TransactionsContext"

Modal.setAppElement("#root")

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
