<template>
	<div class="mt-[120px] mx-[177px]">
		<h1 class="text-namjaiblack font-semibold text-5xl">มูลนิธิ</h1>
		<div class="mt-4">
			<div class="w-16 border-4 border-t border-namjaired"></div>
		</div>
		<base-table>
			<th class="py-3 w-[75px]">ลำดับ</th>
			<th>
				<p class="py-3 w-[200px]">มูลนิธิ</p>
			</th>
			<th class="py-3 w-[250px]">ชื่อ-สกุล</th>
			<th class="py-3 w-[200px]">วันที่สมัคร</th>
			<th class="py-3 w-[100px]">สถานะ</th>
			<th class="py-3 w-[250px]">ผู้อนุมัติ</th></base-table
		>
		<approve-list :objectProps="fdnList"></approve-list>
	</div>
</template>

<script>
import { ref } from "vue";
import approveService from "./approve-service";
import BaseTable from "../_Bases/BaseTable.vue";
import ApproveList from "./ApproveList.vue";

export default {
	components: {
		BaseTable,
		ApproveList,
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

<style scoped>
th:first-child {
	border-radius: 10px 0 0 10px;
}

th:last-child {
	border-radius: 0 10px 10px 0;
}
</style>
