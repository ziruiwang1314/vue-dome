<template>
  <div>
    <header-top></header-top>
    <ul class="testLess">
      <li v-for="(item,index) in lists">
        <img v-lazy="item" >
      </li>
    </ul>
    <footer-bottom></footer-bottom>
  </div>

</template>

<script>
    import headerTop from '../components/top'
    import footerBottom from '../components/bottom'
    export default {
        name: "lazyLoad",
        components:{
          headerTop,
          footerBottom
        },
        data(){
          return{
            lists:[
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png',
              '../../static/img/logo.png'

            ]
          }
        }
    }
</script>

<style scoped>

</style>
