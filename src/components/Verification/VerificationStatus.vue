<template>
	<div class="text-namjaiwhite w-20 text-center rounded-xl py-1" :class="color">{{ setStatus }}</div>
</template>
<script>
import { computed, ref } from "vue";
export default {
	props: {
		statusText: {
			type: String,
		},
	},
	setup(props) {
		const color = ref("");

		const setStatus = computed(() => {
			const message = ref("");
			if ("VERIFIED" === props.statusText || "APPROVED" === props.statusText) {
				color.value = "bg-namjaigreen";
				return (message.value = "อนุมัติ");
			}
			if ("REJECTED" === props.statusText || "REJECT" === props.statusText) {
				color.value = "bg-namjaired";
				return (message.value = "ไม่อนุมัติ");
			}
			if ("PENDING" === props.statusText) {
				color.value = "bg-yellow-500";
				return (message.value = "รออนุมัติ");
			}
			// if (typeof props.statusText === "undefined") {
			// 	color.value = " bg-slate-400";
			// 	return (message.value = "UNDEFINED");
			// }
			//  else {
			// color.value = " bg-indigo-500";

			// console.log(typeof props.statusText);
			// console.log(typeof message.value);
			// console.log(message.value);
			// console.log(pendingStatus.value === props.statusText);
			return (message.value = "N/A");
			// }
		});
		return { setStatus, color };
	},
};
</script>
