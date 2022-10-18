<template>
	<div class="mt-[120px] mx-[177px]">
		<h1 class="text-namjaiblack font-semibold text-5xl">คำร้องถอนเงิน</h1>
		<div class="mt-4">
			<div class="w-16 border-4 border-t border-namjaired"></div>
		</div>
		<base-table>
			<th class="py-3 px-10">ลำดับ</th>
			<th>
				<p class="py-3 w-[350px]">ชื่อโครงการ</p>
            </th>
			<th class="py-3 px-10">จำนวนเงิน</th>
            <th class="py-3 px-16">สถานะ</th>
			<th class="py-3 px-10">วันที่ถอน</th>
			<th class="py-3 px-10">วันที่อนุมัติ</th>
			</base-table
		>
		<!-- <approve-list :objectProps="fdnList"></approve-list> -->
	</div>
</template>

<script>
// import { ref } from "vue";
// import approveService from "./approve-service";
import BaseTable from "../_Bases/BaseTable.vue";
// import ApproveList from "./ApproveList.vue";

export default {
	components: {
		BaseTable,
		// ApproveList,
	},
	setup() {
		// const fdnList = ref([]);
		// const fetchFdnList = () => {
		// 	approveService.getFDNShortList().then((response) => {
		// 		fdnList.value = response.data;
		// 	});
		// };
		// fetchFdnList();

		// return { fdnList };
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
