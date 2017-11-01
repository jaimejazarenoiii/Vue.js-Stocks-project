<template>
  <div class='col-sm-6 col-md-4'>
    <div class='panel panel-success'>
      <div class='panel-heading'>
        <h3 class='panel-title'>
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class='panel-body'>
        <div class='pull-left'>
          <input type='number' class='form-control' placholder='Quantity'
          v-model='quantity' :class='{danger: insuficientFunds}'>
        </div>
        <div class='pull-right'>
          <button class='btn btn-success' @click='buyStock'
            :disabled='insuficientFunds || quantity<=0 || parseInt(quantity) === NaN'>{{ insuficientFunds ? "Lack of Funds" : "Buy" }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      stock: {
      }
    },
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insuficientFunds() {
        return this.quantity * this.stock.price > this.$store.getters.funds;
      }
    },
    methods: {
      buyStock() {
        const order = { stockId: this.stock.id, quantity: this.quantity, stockPrice: this.stock.price };
        this.$store.dispatch('buyStock', order)
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
  .danger{
    border: 1px solid red;
  }
</style>
