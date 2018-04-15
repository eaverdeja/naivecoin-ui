<template>
<div>
    <h3>Send coins</h3>
    <form class="form-inline">
      <div class="form-group">

        <label for="receiverAddress">Receiver address</label>
        <div class="input-group">
          <input v-model="receiverAddress" class="form-control" type="text" placeholder="04f72a4541275aeb4344a8b04..." id="receiverAddress">
        </div>
      
        <label for="amount">Amount</label>
        <div class="input-group">
          <input v-model="receiverAmount" class="form-control" type="number" placeholder="0" id="amount">
        </div>
      
      </div>
      <button v-on:click="sendTransaction" class="btn btn-primary">Send</button>
    </form>
</div>
</template>

<script>
export default {
  data() {
    return {
        receiverAddress: null,
        receiverAmount: null
    }
  },
  methods: {
      sendTransaction() {
        this.$http.post('/api/sendTransaction', {
            amount: parseInt(this.receiverAmount),
            address: this.receiverAddress
        })
        .then(() => {
            this.receiverAmount = null
            this.receiverAddress = null
        })
      }
  }
}
</script>

