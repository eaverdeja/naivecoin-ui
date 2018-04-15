<template>
  <div>
      <h3>Transaction pool</h3>
    <div class="panel panel-default" v-for="tx in transactionPool" :key="tx.id">
      <div class="panel-heading">
        <span><strong>TxId: </strong>{{ tx.id }}</span>
      </div>
      <div class="panel-body">

        <table class="table table-hover">
          <caption>Transaction Inputs (TxIn)</caption>
          <thead>
            <tr>
              <th>TxOutId</th>
              <th>TxOutIndex</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="txIn in tx.txIns" :key="txIn.id">
              <td v-if="txIn.signature === ''">
                Coinbase</td>
              <td v-else>{{ txIn.txOutId }}</td>
              <td>{{ txIn.txOutIndex }}</td>
            </tr>
          </tbody>
        </table>

        <table>
          <caption>Transaction Outputs (TxOut)</caption>
          <thead>
            <tr>
              <th class="public-address">Address</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="txOut in tx.txOuts" :key="txOut.id">
              <td class="public-address">{{ txOut.address }}</td>
              <td>{{ txOut.amount}}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>

    <div v-if="transactionPool.length === 0">
      <span>No transactions in transaction pool</span>
    </div>
    
  </div>
</template>

<script>
import { mapMutations } from 'vuex' 

export default {
  computed: {
    transactionPool() {
        return $this.store.state.transactionPool
    }
  },
  methods: {
    init() {
        this.getTransactionPool()
    },
    getTransactionPool() {
        this.$http
            .get('/api/transactionPool')
            .then(resp => this.updateTransactionPool(resp.data))
    },
    ...mapMutations([
        'updateTransactionPool'
    ])
  },
  created() {
    this.init()
  }
}
</script>
