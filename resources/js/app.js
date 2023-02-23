
// import { createApp, h } from "vue";
// import { createInertiaApp, Link,  Head } from "@inertiajs/inertia-vue3";
// import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
// import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

// createInertiaApp({
//   title: (title) => `${title} - ${appName}`,
//   resolve: (name) =>
//     resolvePageComponent(
//       `./pages/${name}.vue`,
//       import.meta.glob("./pages/**/*.vue")
//     ),
//   setup({ el, app, props, plugin }) {
//     return createApp({ render: () => h(app, props) })
//       .use(plugin)
      // .use(ZiggyVue, Ziggy)
//       .component('Link', Link)
//       .component('Head', Head)
//       .mount(el);
//   },
// });

import "./bootstrap";
import "../css/app.css";

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}.vue`,
      import.meta.glob("./pages/**/*.vue")
    ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue, Ziggy)
      .mount(el)
  },
})