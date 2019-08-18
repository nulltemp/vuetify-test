<template>
  <div>
    <v-container>
      <v-layout class="background">
        <v-flex xs2>
          <v-card color="white">
            none
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

    <v-container>
      <v-layout class="background" wrap>
        <v-flex xs2>
          <v-card color="white">
            wrap
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

<style scoped>
.background {
  background-color:grey;
}
</style>