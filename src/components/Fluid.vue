<template>
  <div>
    <v-container class="background">
      <v-layout>
        <v-flex>
          <v-card color="white">
            none
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="fluid-background">
      <v-layout>
        <v-flex>
          <v-card color="white">
            flued
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
.background {
  background-color:red;
}

.fluid-background {
  background-color:blue;
}
</style>