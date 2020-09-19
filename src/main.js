import DefaultLayout from "~/layouts/Default.vue";

import Header from "~/components/v-header.vue";
import vImageLoader from '~/components/v-image-loader.vue'
import vCenteredContainer from '~/components/v-centered-container.vue'

import settings from "../data/theme.json";


export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("v-header", Header);
  Vue.component("v-image-loader", vImageLoader);
  Vue.component("v-centered-container", vCenteredContainer);



  

  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
