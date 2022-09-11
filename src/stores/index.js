import { createStore } from "vuex";
import { auth } from "../components/Account/auth-module.js";
import { fdn } from "../components/Foundation/fdn-module.js";

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		auth,
		fdn
	},
});
