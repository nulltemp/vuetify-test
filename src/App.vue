<template>
  <v-app id="app">
    <v-toolbar class="toolbar">
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn v-for="(item, index) in items" :key="index" :to="item.val" flat>
          {{item.val}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer dark>
      <v-spacer />
      <privacy-policy />
    </v-footer>
  </v-app>
</template>

<script>
import PrivacyPolicy from "./components/modal/PrivacyPolicy";

export default {
  name: 'App',
  components: {
    PrivacyPolicy
  },
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
