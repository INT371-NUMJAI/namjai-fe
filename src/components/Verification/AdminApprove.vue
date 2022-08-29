<template>
	<div class="mt-[120px]">
		<div class="mx-[177px]">
			<h1 class="text-namjaiblack font-semibold text-5xl">มูลนิธิ</h1>
			<div class="mt-4">
				<div class="w-16 border-4 border-t border-namjaired"></div>
			</div>
		</div>
		<base-table />
		<router-link to="/fdn"> <base-list :objectProps="fdnList" /></router-link>
	</div>
</template>

<script>
import BaseList from "@/components/_Bases/BaseList.vue";
import BaseTable from "@/components/_Bases/BaseTable.vue";
import { reactive } from "vue";

export default {
	components: {
		BaseList,
		BaseTable,
	},
	setup() {
		const fdnList = reactive([
			{ order: 1, name: "jane", realName: "jane doe", registedDate: "00/00/00", status: "PENDING", approval: "JIMMY" },
			{ order: 2, name: "jane2", realName: "jane doe2", registedDate: "00/00/002", status: "REJECTED", approval: "JIMMY2" },
		]);
		return { fdnList };
	},
};
</script>
