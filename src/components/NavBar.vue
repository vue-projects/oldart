<template>
  <el-row class="nav" type="flex" align="middle">
    <el-col :span="4"><img src="../assets/logo.png"/></el-col>
    <el-col :span="12">
      <el-menu mode="horizontal" default-active="1">
        <template v-for="item in menuItems">
          <el-menu-item :index="item.index">{{item.title}}</el-menu-item>
        </template>
      </el-menu>
    </el-col>
    <el-col :span="2"><p><b>姓名: </b>院长</p></el-col>
    <el-col :span="2"><p><b>角色: </b>管理员</p></el-col>
    <el-col :span="2"><p>0个消息</p></el-col>
    <el-col :span="2"><p>安全退出</p></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      menuItems: [{
        title: '院长',
        index: '1',
        route: '#'
      }, {
        title: '后勤',
        index: '2',
        route: '#'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
  .nav {
    background-color: #20A0FF;

    .el-menu {
      background-color: #20A0FF;
    }
    .el-menu-item {
      font-size: 18px;
      color: white;
    }

    p {
      font-size: 13px;
      color: white;
    }

    img {
      max-height: 26px;
    }
  }
</style>
