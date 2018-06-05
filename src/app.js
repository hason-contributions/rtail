import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import 'highlight.js/styles/default.css';

import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import VueProgressBar from 'vue-progressbar';
import VueMaterial from 'vue-material';
import VueHighlightJS from 'vue-highlightjs';

import App from './app.vue';
import router from './router';
import store from './store';

const options = {
  color: '#fff',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
};
Vue.use(VueProgressBar, options);
Vue.use(VueMaterial);
Vue.use(VueHighlightJS);
Vue.use(VueSocketio, 'http://localhost:8888', store);

window.app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
