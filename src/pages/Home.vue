<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="12" lg="10">
        <v-card flat class="bg-transparent text-center"> 
          <div>
            <v-card-title class="title">A JOURNEY THROUGHOUT <br> PHILIPPINE HISTORY</v-card-title>
            <v-card-subtitle id="subtitle"> 
              This website aims to digitalize the Museum of the University of the Philippines Tacloban Leyte. 
              The producers of this website aims to make the website accessible for everyone. 
            </v-card-subtitle>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <div class="firstbuttons">
      <v-dialog
        v-model="dialog1"
        transition="dialog-bottom-transition"
        fullscreen
      >
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            prepend-icon="mdi-calendar-clock"
            size="large"
            text="View Availability"
            v-bind="activatorProps"
          ></v-btn>
        </template>
        
        <v-card class="d-flex flex-column bg-grey-lighten-4">
          <v-toolbar color="maroon" dark>
            <v-btn icon="mdi-close" @click="dialog1 = false"></v-btn>
            <v-toolbar-title>Museum Visit Availability</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn text="Close" variant="text" @click="dialog1 = false"></v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-card-text class="d-flex flex-column align-center justify-start pa-4 pa-sm-6 pa-md-8 fill-height overflow-y-auto">
            <div class="text-center mb-4">
              <h3 class="text-h4 font-weight-bold mb-2" style="font-family: 'Literata', serif;">
                Museum Schedule Calendar
              </h3>
              <p class="text-subtitle-1 text-grey-darken-1">
                Please check below to see which days are fully occupied or open for public visits.
              </p>
              
              <div class="d-flex justify-center gap-6 mt-2 flex-wrap align-center">
                <span class="d-flex align-center text-subtitle-1 font-weight-medium" style="color: #212121;">
                  <svg width="14" height="14" viewBox="0 0 12 12" style="margin-right: 8px; display: inline-block; vertical-align: middle;">
                    <circle cx="6" cy="6" r="6" fill="#4CAF50"/>
                  </svg>
                  Available
                </span>
                <span class="d-flex align-center text-subtitle-1 font-weight-medium" style="color: #212121;">
                  <svg width="14" height="14" viewBox="0 0 12 12" style="margin-right: 8px; display: inline-block; vertical-align: middle;">
                    <circle cx="6" cy="6" r="6" fill="#F44336"/>
                  </svg>
                  Fully Occupied / Closed / Past
                </span>
              </div>
            </div>
            
            <v-card class="calendar-container w-100 elevation-3 rounded-xl overflow-hidden">
              <v-date-picker
                v-model="displayDate"
                color="amber-darken-3"
                show-adjacent-months
                hide-header
                :min="minDate"
                :allowed-dates="isDateOpen"
                class="responsive-calendar"
                readonly
              ></v-date-picker>
            </v-card>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog2"
        transition="dialog-bottom-transition"
        fullscreen
        width="400"
        location="end"
      >
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            prepend-icon="mdi-eye"
            size="large"
            text="Visit Exhibits"
            v-bind="activatorProps"
          ></v-btn>
        </template>
        <v-card>
          <v-toolbar>
            <v-btn icon="mdi-close" @click="dialog2 = false"></v-btn>
            <v-toolbar-title>Exhibits</v-toolbar-title>
            <v-toolbar-items>
              <v-btn text="Close" variant="text" @click="dialog2 = false"></v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-card>
      </v-dialog>
    </div>
    
    <div class="firstbuttons">
      <v-bottom-sheet>
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="tbtn" v-bind="activatorProps" text="Contacts"></v-btn>
        </template>
      </v-bottom-sheet>

      <v-bottom-sheet>
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="tbtn" v-bind="activatorProps" text="Opening Hours/Schedule"></v-btn>
        </template>
      </v-bottom-sheet>

      <v-bottom-sheet>
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="tbtn" v-bind="activatorProps" text="Reviews"></v-btn>
        </template>
      </v-bottom-sheet>
    </div>

    <div class="space"></div>
  </v-container> 
</template>

<style scoped>
  .title {
    font-family: 'Literata';
    font-size: 3.6rem; 
    line-height: 1.2;
    white-space: normal !important;
    word-break: break-word;
    padding-top: 60px;
    margin-bottom: 1rem;
    color: black;
  }

  #subtitle {
    font-family: 'Graphik';
    font-size: 20px;   
    padding: 10px; 
    padding-top: 0px;
    padding-bottom: 20px;
    margin-top: 0px;
    width: 100%;
    white-space: normal;
    overflow-wrap: break-word;
    color: black;
  }

  .firstbuttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .gap-6 {
    gap: 24px;
  }

  .space {
    padding-top: 40px;
    border-bottom: 2px solid rgb(79, 22, 16); 
  }

  .calendar-container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .responsive-calendar {
    width: 100% !important;
    height: auto !important;
    min-height: 500px;
  }

  :deep(.responsive-calendar .v-picker__body) {
    width: 100% !important;
    grid-template-rows: auto 1fr !important;
  }

  :deep(.responsive-calendar .v-date-picker-month) {
    width: 100% !important;
    padding: 24px !important;
  }

  :deep(.responsive-calendar .v-date-picker-month__day--disabled) {
    opacity: 0.35;
    background-color: rgba(251, 63, 49, 0.79) !important;
    border-radius: 50%;
  }

  :deep(.responsive-calendar .v-date-picker-month__day--disabled .v-btn) {
    color: #b71c1c !important;
    text-decoration: line-through;
  }

  @media (min-width: 960px) {
    .responsive-calendar {
      min-height: 620px;
    }
    :deep(.responsive-calendar .v-date-picker-month__day .v-btn) {
      width: 48px !important;
      height: 48px !important;
      font-size: 1.1rem !important;
    }
    :deep(.responsive-calendar .v-date-picker-month__weekday) {
      font-size: 1.1rem !important;
      font-weight: bold;
      padding-bottom: 12px;
    }
  }

  @media (max-width: 960px) {
    .title {
      font-size: 45px;
      padding-top: 40px;
      color: black;
    }
    #subtitle {
      font-size: 18px;
      padding-bottom: 35px;
    }
  }

  @media (max-width: 600px) {
    .title {
      font-size: 32px;
      padding-top: 25px;
    }
    #subtitle {
      font-size: 16px;
      padding-bottom: 25px;
    }
    .space {
      padding-top: 40px;
      background-color: white;
    }
    .firstbuttons {
      gap: 20px; 
    }
    .responsive-calendar {
      min-height: 380px;
    }
    :deep(.responsive-calendar .v-date-picker-month) {
      padding: 8px !important;
    }
  }
  
  .tbtn{
    width: 12rem;
    height: 12rem;
  }
</style>

<script setup>
  import { ref, shallowRef, computed } from 'vue'

  const dialog1 = shallowRef(false)
  const dialog2 = shallowRef(false)
  const displayDate = ref(new Date())

  const minDate = computed(() => {
    const today = new Date()
    return today.toLocaleDateString('en-CA')
  })

  const occupiedDates = [
    '2026-06-12',
    '2026-06-15',
    '2026-06-16',
    '2026-06-25'
  ]

  const isDateOpen = (dateVal) => {
    const d = new Date(dateVal)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (d < today) return false
    if (d.getDay() === 0) return false
    
    const formattedDate = d.toLocaleDateString('en-CA') 
    return !occupiedDates.includes(formattedDate)
  }
</script>