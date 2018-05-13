<template>
  <div id="app">
    <ul>
      <li v-for="item in items">
        <router-link :to="item.val">{{item.val}}</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      items: [
        {val: '/align'},
        {val: '/alignContent'},
        {val: '/dType'},
        {val: '/fluid'},
        {val: '/gridList'},
        {val: '/justify'},
        {val: '/rowcolumn'},
        {val: '/wrap'},
      ]
    }
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
  margin-top: 60px;
}
</style>
