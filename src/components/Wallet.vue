<template>

<div>
    <div class="panel panel-default">
        <div class="panel-heading">
            Your public address
        </div>
        <div class="panel-body">
            {{ address }}
        </div>
    </div>

    <div class="panel panel-default">
        <div class="panel-heading">
            Your balance
        </div>
        <div class="panel-body">
            {{ balance }} coins
        </div>
    </div>
</div>

</template>

<script>
export default {
  props: [
      'address',
      'balance'
  ]
}
</script>

