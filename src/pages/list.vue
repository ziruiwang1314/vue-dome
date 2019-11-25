<template>
  <div id="list">
    <header-top></header-top>
    <ul>
      <li v-for="item in listData">
        <router-link :to="'/listDetail/'+item.number">{{item.number}}</router-link>
      </li>
      <router-view></router-view>
    </ul>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
    import headerTop from '../components/top'
    import footerBottom from '../components/bottom'

    export default {
        name: "list",
        components: {
            headerTop,
            footerBottom
        },
        data() {
            return {
                listData: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let that = this
                this.$api.list({})
                    .then(res => {
                        that.listData = res.data.res
                    })
                    .catch(error => {

                    })
            }
        }
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
</style>
