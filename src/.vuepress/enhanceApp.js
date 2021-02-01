import "./styles/animate.css";
import "./styles/sweetalert2.css";

import VueSweetalert2 from "vue-sweetalert2";
import VueMoment from "vue-moment";
import Element from "element-ui";
import VueTablerIcons from 'vue-tabler-icons';
import Vuetify from 'vuetify'

import store from "./store";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify);
  Vue.use(VueTablerIcons);
  Vue.use(VueSweetalert2);
  Vue.use(Element);
  Vue.use(VueMoment);
  Vue.mixin({ store });
  // ...apply enhancements for the site.
}
