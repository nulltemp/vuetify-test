<template>
  <div>
    <v-container v-for="item in items" :key="item.val" style="background-color:gray">
      <v-layout :class="item.val">
        <v-flex xs2>
          <v-card color="white">
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
        {val: 'justify-start'},
        {val: 'justify-center'},
        {val: 'justify-end'},
        {val: 'justify-space-around'},
        {val: 'justify-space-between'}
      ]
    }
  }
}
</script>
