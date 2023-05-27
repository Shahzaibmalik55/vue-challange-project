import { createRouter, createWebHistory } from 'vue-router';

// components
import FlightSelectionPage from '../components/flight-selection/flight-selection.vue';
import VisaRequirementsPage from '../components/visa-requirements/visa-requirements.vue';

const routes = [
  {
    path: '/',
    component: VisaRequirementsPage
  },
  {
    path: '/flight-selection',
    component: FlightSelectionPage
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})