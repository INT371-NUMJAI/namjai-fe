import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import WaveUI from "wave-ui/src/wave-ui";
import store from "./stores";
import "./styles/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import globalMixins from "../src/services/Mixin";
import BaseButton from "../src/components/_Bases/BaseButton.vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.component("base-button", BaseButton);
app.mixin(globalMixins);
new WaveUI(app, {
	colors: {
		primary: "#9ac332",
		secondary: "#5d9a26",
	},
});
app.mount("#app");
