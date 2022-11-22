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
import BaseStatusButton from "../src/components/_Bases/BaseStatusButton.vue";
import Footer from "../src/components/NavBar/Footer.vue"

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);
// app.use(base);
app.component("base-button", BaseButton);
app.component("base-status-button", BaseStatusButton)
app.component("foo-ter", Footer)
app.mixin(globalMixins);
new WaveUI(app, {
	colors: {
		primary: "#9ac332",
		secondary: "#5d9a26",
	},
});
app.mount("#app");
