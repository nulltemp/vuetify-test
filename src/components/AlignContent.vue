<template>
  <div>
    <v-container v-for="item in items" :key="item.val">
      <v-layout :class="item.val" style="height:5em;background-color:grey" wrap>
        <v-flex xs2>
          <v-card color="white">
            {{item.val}}
          </v-card>
        </v-flex>
        <v-flex xs5>
          <v-card color="red">
            red
          </v-card>
        </v-flex>
        <v-flex xs5>
          <v-card color="blue">
            blue
          </v-card>
        </v-flex>
        <v-flex xs5>
          <v-card color="yellow">
            yellow
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {val: 'align-content-center'},
        {val: 'align-content-start'},
        {val: 'align-content-end'},
        {val: 'align-content-space-around'},
        {val: 'align-content-space-between'}
      ]
    }
  }
}
</script>
