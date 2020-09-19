import DefaultLayout from "~/layouts/Default.vue";

import Header from "~/components/v-header.vue";

import settings from "../data/theme.json";


export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("v-header", Header);

  

  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
