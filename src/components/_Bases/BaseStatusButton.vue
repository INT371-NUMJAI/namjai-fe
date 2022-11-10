<template>
	<div class="text-namjaiwhite w-20 text-center rounded-lg py-1 -mt-1" :class="color">{{ setStatus }}</div>
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
			if ("OPEN" === props.statusText) {
			color.value = "bg-green-500";
			return (message.value = "เปิดอยู่")
		}
		if ("CLOSED" === props.statusText) {
			color.value = "bg-namjaidarkgray";
			return (message.value = "ปิดรับ");
		}
		if ("NOT_SHOWING" === props.statusText) {
			color.value = "bg-yellow-500";
			return (message.value = "ไม่แสดง")
		}
			return (message.value = "N/A");
		});
		return { setStatus, color };
	},
};
</script>
