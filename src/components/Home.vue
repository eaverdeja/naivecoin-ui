<template>
  <div>

    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active">
              <router-link to="/wallet">Wallet</router-link>  
            </li>
            <li>
              <router-link to="/explorer">Explorer</router-link>  
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <wallet :address="address" :balance="balance"></wallet>
    
    <hr>


    <hr>

    <transactionPool></transactionPool>

    <h3>Mine block</h3>
    <button v-on:click="mineBlock" class="btn btn-primary">Click to mine block</button>
    
    <hr>
    
  </div>
</template>

<script>
  import Wallet from './Wallet.vue'

  export default {
    name: 'Home',
    data() {
      return {
        'address': null,
        'balance': null,
        'transactionPool': [],
        'receiverAddress': null,
        'receiverAmount' : null
      }
    },
    created() {
      this.init();
    },
    components: {
      Wallet,
      SendTransaction,
      TransactionPool
    },
    methods: {
      init: function() {
        this.getAddress();
        this.getBalance();
      },
      getAddress: function () {
        this.$http.get('/api/address')
          .then(resp => {
            this.address = resp.data.address;
          })
      },
      getBalance: function () {
        this.$http.get('/api/balance')
          .then(resp => {
            this.balance = resp.data.balance;
          })
      },
      mineBlock: function() {
        this.$http.post('/api/mineBlock')
          .then(() => {
            this.init();
        })
      }
    }
  }
</script>


<style scoped>
  table {
    width: 100%;
  }
  .public-address {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 70%;
    max-width: 0;
  }
  .public-address + td {
    text-align: center;
  }
  .public-address + th {
    text-align: center;
  }
</style>
