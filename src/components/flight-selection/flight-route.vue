<style>
@import url(./flight-selection.module.less);
</style>

<script lang="ts">
export default {
  props: {
    departureTime: Date,
    departureDate: Date,
    arrivalTime: Date,
    arrivalDate: Date,
    originCity: String,
    originCityCode: String,
    destinationCity: String,
    destinationCityCode: String
  }
}
</script>

<template>
  <v-col cols="12" class="flight-route">
    <v-row>
      <v-col cols="3" class="pb-1">
        <span class="time">
          {{ departureTime?.getHours() }}:{{ departureTime?.getMinutes() }}
        </span>
      </v-col>
      <v-col cols="9" class="pb-0">
        <span class="city">
          {{ originCityCode }}, {{ originCity }}
        </span>
        <p class="date">{{ departureDate?.toDateString() }}</p>
      </v-col>
      <v-col cols="7" class="ml-9 vertical-line-col"></v-col>
    </v-row>
    <v-row>
      <v-col cols="3" class="pb-1">
        <span class="time">
          {{ arrivalTime?.getHours() }}:{{ arrivalTime?.getMinutes() }}
        </span>
      </v-col>
      <v-col cols="9">
        <span class="city">
          {{ destinationCityCode }}, {{ destinationCity }}
        </span>
        <p class="date">{{ arrivalDate?.toDateString() }}</p>
      </v-col>
    </v-row>
  </v-col>
</template>