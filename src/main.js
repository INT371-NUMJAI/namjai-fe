import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import WaveUI from "wave-ui/src/wave-ui";
import store from "./stores";
import "./styles/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);
new WaveUI(app, {
	// Some Wave UI options.
});
app.mount("#app");
