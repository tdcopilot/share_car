import { createApp } from 'vue'

import "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";
import "bootstrap";

import App from './App.vue'
import i18n from '../src/plugins/localizations'
import pinia from '../src/plugins/pinia'
import router from './plugins/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import InlineSvg from "vue-inline-svg";
import ElementPlus from 'element-plus'
import VueApexCharts from 'vue3-apexcharts';


const app = createApp(App)

app.use(i18n)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(VueApexCharts)
app.use(VueAxios, axios)
app.component('inline-svg', InlineSvg);
app.mount('#app')
