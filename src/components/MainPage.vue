<template>
    <v-card class="mx-auto align-center justify-center" image="https://en.wikipedia.org/wiki/File:UP_Visayas_horizontal_logotype_with_seal.png">
        Title
    </v-card>
  <v-sheet
    class="position-relative"
    min-height="450"
  >
    <div class="position-absolute d-flex align-center justify-center w-50 h-50">
      <v-btn
        color="deep-purple-darken-2"
        size="x-large"
        @click="schedule = !schedule"
      >
        Open Schedule
      </v-btn>
    </div>

    <v-fade-transition hide-on-leave>
      <v-card
        v-if="schedule"
        append-icon="$close"
        class="mx-auto"
        elevation="4"
        max-width="500"
        title="Send a receipt"
      >
        <template v-slot:append>
          <v-btn icon="$close" variant="text" @click="schedule = false"></v-btn>
        </template>

        <v-divider></v-divider>

        <div class="py-12 text-center">
          <v-icon
            class="mb-6"
            color="success"
            icon="mdi-check-circle-outline"
            size="128"
          ></v-icon>

          <div class="text-headline-large font-weight-bold">This is the schedule</div>
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
          <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            variant="outlined"
            rounded
            @click="schedule = false"
          >
            Close
          </v-btn>
        </div>
      </v-card>
    </v-fade-transition>
  </v-sheet>
  
</template>
<script setup>
  import { ref } from 'vue'

  const schedule = ref(true)
</script>

