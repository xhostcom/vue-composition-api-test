<template>
  <div id="app">
    <SearchBrews />
  </div>
</template>
<script>
import SearchBrews from '@/components/SearchBrews'

export default {
  name: 'App',
  components: {
    SearchBrews
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
