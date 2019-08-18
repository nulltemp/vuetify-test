<template>
  <div id="app">
    <v-toolbar class="toolbar">
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn v-for="(item, index) in items" :key="index" :to="item.val" flat>
          {{item.val}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      items: [
        {val: 'align'},
        {val: 'alignContent'},
        {val: 'dType'},
        {val: 'fluid'},
        {val: 'gridList'},
        {val: 'justify'},
        {val: 'rowcolumn'},
        {val: 'wrap'},
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
}

.toolbar {
  margin-bottom: 2em;
}
</style>
