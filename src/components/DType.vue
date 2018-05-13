<template>
  <div>
    <v-container v-for="item in items" :key="item.val">
      <v-layout :class="item.val">
        <v-flex>
          <v-card>
            {{item.val}}
          </v-card>
        </v-flex>

        <v-flex>
          <v-card color="red">
            red
          </v-card>
        </v-flex>

        <v-flex>
          <v-card color="blue">
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
        {val: 'd-inline-flex'},
        {val: 'd-flex'},
        {val: 'd-inline-block'},
        // {val: 'd-block'},
        // {val: 'd-inline'}
      ]
    }
  }
}
</script>
