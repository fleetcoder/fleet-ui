// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import MintUI from 'mint-ui'
import * as MUI from 'mint-ui'
import FileUpload from 'v-file-upload'
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'
import AudioRecorder from 'vue-audio-recorder'
import PrismEditor from 'vue-prism-editor'
Vue.use(MintUI)
Vue.use(FileUpload)
Vue.use(AudioRecorder)
Vue.use(VueRouter)
import "vue-prism-editor/dist/VuePrismEditor.css"
Vue.component("prism-editor", PrismEditor)
Vue.component(MUI.Radio.name, MUI.Radio)
Vue.config.productionTip = false
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
const http = Vue.http
export default http
window.Vue = Vue
window.http = http
window.MintUI = MintUI
window.VueRouter = VueRouter
window.FileUpload = FileUpload
window.AudioRecorder = AudioRecorder
window.PrismEditor = PrismEditor