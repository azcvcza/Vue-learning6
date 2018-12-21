// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.config.errorHandler = function(error, component, source) {
    console.log(`Global Error Handler:${error},${component},${source}`);
}
import "bootstrap/dist/css/bootstrap.min.css";
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})