import Vue from 'vue'
import App from './App.vue'

import Ionic from "@ionic/vue"
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"

// router
import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

// Vue Components
import MyProfile from "./components/MyProfile.vue";
import ScanCode from "./components/ScanCode.vue";
import SavedCodes from "./components/SavedCodes.vue";

const router = new IonicVueRouter({
  routes: [
    { path: "/", redirect: "/my-profile" },
    {
      path: "/my-profile",
      name: "my-profile",
      component: MyProfile
    },
    {
      path: "/scan-code",
      name: "scan-code",
      component: ScanCode
    },
    {
      path: "/saved-codes",
      name: "saved-codes",
      component: SavedCodes
    }
  ]
});

Vue.config.productionTip = false;
Vue.use(Ionic);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
