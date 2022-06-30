import { createStore } from "vuex";

export default createStore({
	state: {
		counter: 0,
	},
	mutations: {
		increaseCounter(state) {
			state.counter++;
		},
		decreaseCounter(state) {
			state.counter--;
		},
	},
	actions: {},
	getters: {
		getCounter() {
			return this.counter;
		},
	},
	modules: {},
});
