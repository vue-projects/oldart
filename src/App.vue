<template>
  <div id="app">
    <login/>
  </div>
</template>

<script>
import Login from 'components/Login'
import Hello from 'components/Hello'

export default {
  name: 'app',
  components: {
    Login, Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
