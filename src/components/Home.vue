<template>
  <div class="home">
    <nav-bar></nav-bar>
    <el-row class="content" type="flex" align="top">
      <el-col :span="3">
        <side-bar ></side-bar>
      </el-col>
      <el-col :span="20"></el-col>
    </el-row>
</div>
</template>

<script>
import NavBar from './NavBar'
import SideBar from './SideBar'

export default {
  name: 'home',
  data () {
    return { }
  },
  components: { NavBar, SideBar }
}
</script>

<style lang="less" scoped>
  .content {
    .el-menu {

    }
  }

</style>
