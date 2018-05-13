<template>
  <div>
    <v-container v-for="item in items" :key="item.val" :class="item.val">
      <v-layout>
        <v-flex xs2>
          <v-card>
            {{item.val}}
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card color="red">
            red
          </v-card>
        </v-flex>

        <v-flex xs2>
          <v-card color="blue" style="font-size:3em">
            blue
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
        {val: 'grid-list-xs'},
        {val: 'grid-list-sm'},
        {val: 'grid-list-md'},
        {val: 'grid-list-lg'},
        {val: 'grid-list-xl'}
      ]
    }
  }
}
</script>
