import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Countdown from "vue3-flip-countdown";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import '@splidejs/vue-splide/css'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

// Vuetify imports
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

export default createVuetify({
  icons: {
    defaultSet: "mdi",
  },
});

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: "#A47166", // Classic rosewood brown
    secondary: "#2F5061", // Deep slate blue (lebih kalem dari sebelumnya)
    background: "#FAF8F5", // Warm off-white, kesan vintage
    surface: "#FFFFFF", // Tetap bersih
    text: "#2D2D2D", // Sedikit lebih lembut dari hitam murni
  },
};

// Vuetify instance
const vuetify = createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
  components,
  directives,
});

// Styles
import "./assets/main.css";

AOS.init({
  duration: 1000,
});

const app = createApp(App);
app.component('Splide', Splide)
app.component('SplideSlide', SplideSlide)
app.use(vuetify);
app.use(router);
app.use(Countdown);
app.mount("#app");
