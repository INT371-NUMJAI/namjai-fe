import BaseButton from "./BaseButton.vue";
export default {
	install: (app, options) => {
		Vue.component("base-button", BaseButton);
	},
};
// export default {
//     install: (app, options) => {
//         function translate(key) {
//             return key.split(".").reduce((o, i) => {
//                 if (o) return o[i];
//             }, options);
//         }

//         app.config.globalProperties.$translate = translate;

//         app.provide("i18n", {translate});
//     }
// };
