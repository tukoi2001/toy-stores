import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import Vue2Editor from "vue2-editor";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import { auth } from "./configs/firebase";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(VueCompositionAPI);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuelidate)
Vue.use(Vue2Editor);
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import vuetify from './plugins/vuetify'

/* add icons to the library */
library.add(faUserSecret)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */

Vue.config.productionTip = false


// new Vue({
//     router,
//     store,
//     vuetify,
//     render: h => h(App)
// }).$mount('#app')
let _app;

auth.onAuthStateChanged(() => {
    if (!_app) {
      new Vue({
        router,
        store,
        vuetify,
        render: (h) => h(App),
      }).$mount("#app");
    }
  });