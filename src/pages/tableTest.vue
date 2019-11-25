<template>
<div>
  <header-top></header-top>
  <el-table
    :data="tableData"
    stripe
    height="500"
    style="width: 100%;">


    <el-table-column
      prop="ID"
      label="ID"
      align="center">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      align="center">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      align="center">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      align="center">
    </el-table-column>
    <el-table-column
      prop="race"
      label="种族"
      align="center">
    </el-table-column>
    <el-table-column
      prop="appearance"
      label="颜值"
      align="center">
    </el-table-column>

    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="描述">
            <span>{{ props.row.describe }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>

  </el-table>



  <footer-bottom></footer-bottom>
</div>
</template>
<script>
    import headerTop from '../components/top'
    import footerBottom from "../components/bottom";

    export default {
      name: "tableTest",
      components:{
        headerTop,
        footerBottom
      },
      data() {
        return{
          tableData:[]
        }
      },
      mounted() {
          this.init();
      },
      methods:{
          init(){
            let self = this;
              this.$api.table({
              })
              .then(function (response) {
                self.tableData = response.data.res;
              })
              .catch(function (error) {
                console.log(error)
              })
          }
      }
    }
</script>

<style scoped>

</style>
