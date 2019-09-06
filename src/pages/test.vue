<template>
  <div>
    <div>this part is v-if and v-show test
      <p v-if="false">v-if no dom at all</p>
      <p v-show="false">v-show dispaly：none</p>
    </div>

  </div>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped>

</style>
