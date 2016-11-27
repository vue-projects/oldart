<template>
  <el-menu default-active="1">
    <template v-for="item in menuItems">
      <el-menu-item :index="item.index">{{item.title}}</el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'side-bar',
  data () {
    return {
      menuItems: [{
        title: '健康评估',
        index: '1'
      }, {
        title: '老人管理',
        index: '2'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
