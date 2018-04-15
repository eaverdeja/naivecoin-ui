export const state = {
  balance: null,
  transactionPool: []
}

export const mutations = {
    updateBalance(state, { balance }) {
        state.balance = balance
    },
    updateTransactionPool(state, { transactionPool }) {
        state.transactionPool = transactionPool
    }
}
