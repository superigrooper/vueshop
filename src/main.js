import Vue from 'vue';
import App from './App.vue';
import { vue, js } from './data';
import print from './run';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

print(vue);
print(js);
