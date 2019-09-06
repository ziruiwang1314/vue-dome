<template>
  <childSlot :todos="slotData">
    <template v-slot="slotProps">
      <span v-if="slotProps.todo.isComplete">✓</span>
      <span>{{slotProps.todo.name}}</span>
    </template>
  </childSlot>
</template>

<script>
  import childSlot from '../components/childSlot'
  export default {
    data () {
      return {
        slotData: []
      }
    },

    components: {
      childSlot
    },
    created(){
      this.init();
    },
    methods:{
      init(){
        let self = this;
        this.$axios.get('../../static/mock/slot.json')
          .then(function (response) {
            self.slotData = response.data.res
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }



  }
</script>
