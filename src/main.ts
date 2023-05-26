import { createApp } from 'vue'

// default styles
import './style.css'

// font styles
import '@mdi/font/css/materialdesignicons.css'

// main component
import App from './App.vue'

// routing
import { router } from '../src/router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
})

// adding router
app.use(router);

// adding UI lib
app.use(vuetify);

app.mount('#app')