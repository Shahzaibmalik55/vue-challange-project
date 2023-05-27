<style lang="less">
@import url(./flight-selection.module.less);
</style>

<script lang="ts" setup>

import { useRouter } from 'vue-router';
import FlightRoute from './flight-route.vue'

const router = useRouter()

function onBack() {
  router.back()
}

</script>

<template>
  <v-card :elevation="0">
    <v-layout>
      <!-- Top Bar -->
      <v-app-bar class="text-center bg-orange" :elevation="0" :flat="false">
        <template v-slot:prepend>
          <v-icon class="text-white" @click="onBack()">mdi-arrow-left</v-icon>
        </template>
        <v-app-bar-title class="text-white">
          Flight Selection
        </v-app-bar-title>
      </v-app-bar>


      <!-- Main Content -->
      <v-main class="selection-main">
        <v-row>
          <v-col cols="12">
            <div class="page-selection-title pb-4">
              Compare and select your most suitable flight option
            </div>
          </v-col>
        </v-row>

        <v-card class="flight-details-card px-5 py-6" elevation="0">
          <v-row>
            <v-col cols="12" class="py-0">
              <p class="city-and-country-name">
                Karachi - Jeddah
              </p>
            </v-col>
            <v-col cols="12" class="py-0 flight-info-col">
              <span>
                3h 15 in flight
              </span>
              <v-icon size="40">mdi-circle-small</v-icon>
              <span>
                1 stop
              </span>
              <v-icon size="40">mdi-circle-small</v-icon>
              <span>
                Economy
              </span>
            </v-col>

            <v-col cols="12" class="airline-info-col">
              <img width="20" height="20" src="images/emirates-airline-logo.jpeg" />
              <v-icon size="40">mdi-circle-small</v-icon>
              <span>Emirates,</span>
              <span>EK1456</span>
              <span class="flight-duration px-2">2h 15m</span>
            </v-col>

            <FlightRoute :departure-date="new Date()" :departure-time="new Date()" :arrival-date="new Date()"
              :arrival-time="new Date()" origin-city="Karachi" origin-city-code="KHI" destination-city="Dubai"
              destination-city-code="DXB" />

            <v-col class="12">
              <v-btn block prepend-icon="mdi-sync" disabled class="layover-info">
                Layover 2 hours
              </v-btn>
            </v-col>


            <FlightRoute :departure-date="new Date()" :departure-time="new Date()" :arrival-date="new Date()"
              :arrival-time="new Date()" origin-city="Dubai" origin-city-code="DXB" destination-city="Jeddah"
              destination-city-code="JED" />

          </v-row>
        </v-card>

      </v-main>

    </v-layout>
  </v-card>
</template>