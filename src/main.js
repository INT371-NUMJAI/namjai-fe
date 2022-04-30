import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import WaveUI from "wave-ui/src/wave-ui";
const app = createApp(App);

app.use(createPinia());
app.use(router);
new WaveUI(app, {
	// Some Wave UI options.
});
app.mount("#app");
