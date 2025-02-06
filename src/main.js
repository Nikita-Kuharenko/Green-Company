

import { createApp } from 'vue'
import './assets/style/main.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)

const app = createApp(App)

app
.component('fa', FontAwesomeIcon)
.mount('#app')
