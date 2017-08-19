import Vue from 'vue'
import App from './assets/components/app.vue'

require('./app.style.scss')

new Vue({
    el: '#app',
    render: h => h(App)
})
