import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import WaveUI from "wave-ui/src/wave-ui";
import store from "./stores";
import "./styles/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import base from "../src/components/_Bases/base";
import globalMixins from "../src/services/Mixin";
import BaseButton from "../src/components/_Bases/BaseButton.vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);
// app.use(base);
app.component("base-button", BaseButton);
app.mixin(globalMixins);
new WaveUI(app, {
	colors: {
		primary: "#ff8149",
		secondary: "#5d9a26",
	},
});
app.mount("#app");
