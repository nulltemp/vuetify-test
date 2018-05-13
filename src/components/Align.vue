<template>
  <div>
    <v-container v-for="item in items" :key="item.val">
      <v-layout :class="item.val">
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
        {val: 'align-baseline'},
        {val: 'align-start'},
        {val: 'align-center'},
        {val: 'align-end'}
      ]
    }
  }
}
</script>
