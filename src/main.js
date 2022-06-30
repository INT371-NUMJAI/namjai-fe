import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import WaveUI from "wave-ui/src/wave-ui";
import { defineComponent } from "vue";
import store from "./stores";
import "./styles/index.css";

const app = createApp(App);

app.use(router);
app.use(store);
new WaveUI(app, {
	// Some Wave UI options.
});
app.mount("#app");
