<template>
	<div class="text-namjaiwhite w-20 text-center rounded-xl py-1 -mt-1" :class="[statusProps.statusColor]">
		{{ statusProps.statusText }}
	</div>
</template>
<script>
import { onMounted, onUpdated, reactive } from "vue";
export default {
	props: {
		statusText: {
			type: String,
		},
	},
	setup(props) {
		const statusText = props.statusText;
		const statusProps = reactive({ statusColor: "", statusText: "" });
		let statusWord = ["APPROVED", "REJECTED", "PENDING"];
		const setStatus = (status) => {
			if (statusWord[0].localeCompare(status) == 0) {
				statusProps.statusColor = "bg-namjaigreen";
				statusProps.statusText = "อนุมัติ";
			}
			if (statusWord[1].localeCompare(status) == 0) {
				statusProps.statusColor = "bg-namjaired";
				statusProps.statusText = "ไม่อนุมัติ";
			}
			if (statusWord[2].localeCompare(status) == 0) {
				statusProps.statusColor = "bg-yellow-500";
				statusProps.statusText = "รออนุมัติ";
			}
		};
		// onMounted(() => {
		setStatus(statusText);
		// });

		return { statusProps };
	},
};
</script>
