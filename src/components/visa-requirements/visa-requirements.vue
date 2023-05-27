
<style>
@import url(./visa-requirements.module.less);
</style>


<script lang="ts">

import { countriesDocumentInfo, bottomNavigation } from '../../utils/constants.js';

export default {
  data: () => ({
    selectedCountry: countriesDocumentInfo[0],
    countriesDocumentInfo: countriesDocumentInfo,
    bottomNavigation: bottomNavigation,
    activeTab: 'visaRequests'
  }),
  methods: {
    onSelectCountry(country: any) {
      this.selectedCountry = country
    },
    onStartVisaRequest() {
      this.$router.push('/flight-selection')
    },
    onTabSelect(tab: string) {
      this.activeTab = tab
    }
  }
}
</script>

<template>
  <v-card :elevation="0">
    <v-layout>
      <!-- Top Bar -->
      <v-app-bar class="text-center bg-orange" :elevation="0" :flat="false">
        <v-app-bar-title class="text-white">
          Visa Requirements
        </v-app-bar-title>
      </v-app-bar>

      <!-- Main Content -->
      <v-main>
        <v-sheet class="mx-auto sticky-element" :elevation="1">
          <v-tabs center-active centered stacked :height="90">
            <v-tab v-for="item in countriesDocumentInfo" :key="item.id" :value="item.id" @click="onSelectCountry(item)">
              <v-avatar :image="'images/' + item.image" />
              <div class="pt-3 text-capitalize tab-country-name">{{ item.name }}</div>
            </v-tab>
          </v-tabs>
        </v-sheet>

        <v-expand-transition>
          <v-row no-gutters class="content-row">
            <!-- Banner -->
            <v-col cols="12">
              <v-banner :avatar="'images/' + selectedCountry.image" icon="$vuetify" :text="selectedCountry.name"
                class="align-center" />
            </v-col>

            <!-- Disclaimer -->
            <v-col cols="12" class="px-2 py-2">
              <v-row align="center">
                <v-col cols="1">
                  <v-icon color="orange">
                    mdi-information-slab-symbol
                  </v-icon>
                </v-col>
                <v-col>
                  <span class="request-disclaimer">{{ selectedCountry.disclaimer }}</span>
                </v-col>
              </v-row>
            </v-col>

            <!-- Content -->
            <v-col cols="12" class="px-2 py-2">
              <v-row v-for="docAndRequirement in selectedCountry.docAndRequirements" :key="docAndRequirement.title">
                <v-col cols="12"
                  v-if="docAndRequirement.docs.length || docAndRequirement.disclaimers.length || docAndRequirement.points.length"
                  class="py-4">
                  <v-row no-gutters align="center">
                    <v-col cols="1">
                      <v-icon color="orange" size="22">
                        {{ docAndRequirement.icon }}
                      </v-icon>
                    </v-col>
                    <v-col>
                      <span class="doc-title">{{ docAndRequirement.title }}</span>
                    </v-col>
                  </v-row>
                </v-col>

                <!-- Expandable Docs -->
                <v-col cols="12" v-if="docAndRequirement.docs.length" class="py-0">
                  <v-expansion-panels>
                    <v-expansion-panel v-for="item in docAndRequirement.docs" :key="docAndRequirement.title">
                      <v-expansion-panel-title>
                        {{ item.title }}
                        <template v-slot:actions="{ expanded }">
                          <v-icon color="orange"
                            :icon="expanded ? 'mdi-arrow-up-drop-circle-outline' : 'mdi-arrow-down-drop-circle-outline'" />
                        </template>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>
                        {{ item.description }}
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>

                <!-- Points -->
                <v-col cols="12" class="py-0" v-if="docAndRequirement.points.length">
                  <v-list-item v-for="(item, i) in docAndRequirement.points" :key="i" class="px-0">
                    <template v-slot:prepend>
                      <v-icon icon="mdi-menu-right" class="mr-0"></v-icon>
                    </template>

                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item>
                </v-col>

                <!-- Disclaimers -->
                <v-col cols="12" class="py-0" v-if="docAndRequirement.disclaimers.length">
                  <v-list-item v-for="(item, i) in docAndRequirement.disclaimers" :key="i" class="px-0">
                    <template v-slot:prepend>
                      <v-icon icon="mdi-alert" class="mr-2" size="15"></v-icon>
                    </template>

                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-expand-transition>


        <v-row class="start-visa-btn-section">
          <v-col cols="12">
            <v-btn block @click="onStartVisaRequest()">
              Start Visa Request
            </v-btn>
          </v-col>
        </v-row>
      </v-main>


      <!-- Footer Button -->

      <!-- Bottom Navigation Bar -->
      <v-bottom-navigation>
        <v-btn v-for="item in bottomNavigation" :value="item.value" :key="item.value" :active="activeTab === item.value"
          @click="onTabSelect(item.value)">
          <v-icon size="25">{{ item.icon }}</v-icon>
          <span class="navigation-page-name">
            {{ item.name }}
          </span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </v-card>
</template>