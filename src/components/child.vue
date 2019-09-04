<template>
  <div>
    <p @click="valueToFatherFn">点击给父元素传值</p>
    <ul>
      <li v-for="li in valueFromFather">{{li}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "child",
      data(){
        return{
          "valueFromFather":[],
          "valueToFather":"这是传给父组件的值"
        }
      },
      props:['parentToChild'],
      created() {
        this.valueFromFather = this.parentToChild;
      },
      methods:{
        valueToFatherFn(){
          this.$emit('getValueFromChild',this.valueToFather);
        }
      }

    }
</script>

<style scoped>

</style>
