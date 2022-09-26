<template>
	<div class="mt-[120px]">
		<div class="mx-[177px]">
			<h1 class="text-namjaiblack font-semibold text-5xl">มูลนิธิ</h1>
			<div class="mt-4">
				<div class="w-16 border-4 border-t border-namjaired"></div>
			</div>
		</div>
		<base-table> <th class="py-3 w-[250px]">ผู้อนุมัติ2</th></base-table>
		<base-list :objectProps="fdnList" />
	</div>
</template>

<script>
import BaseList from "@/components/_Bases/BaseList.vue";
import BaseTable from "@/components/_Bases/BaseTable.vue";
import { ref } from "vue";
import approveService from "./approve-service";
export default {
	components: {
		BaseList,
		BaseTable,
	},
	setup() {
		const fdnList = ref([]);
		const fetchFdnList = () => {
			approveService.getFDNShortList().then((response) => {
				fdnList.value = response.data;
			});
		};
		fetchFdnList();

		return { fdnList };
	},
};
</script>
