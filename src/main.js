import Vue from 'vue';
import App from './App.vue';
import print from './data/run';
import { vue, js } from './data/data';

print(vue);
print(js);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
