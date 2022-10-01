<template>
  <div class="mt-[120px] mx-[177px]">
      <h1 class="text-5xl">เรื่องร้องเรียน</h1>
      <div
        class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4 lg:mb-[40px]"
      ></div>
      <base-table>
        <th class="py-3 w-[75px]">ลำดับ</th>
        <th>
          <p class="py-3 w-[300px]">เรื่องร้องเรียน</p>
        </th>
        <th class="py-3 w-[250px]">ประเภท</th>
        <th class="py-3 w-[250px]">สถานะ</th>
      </base-table>
    <report-list :reportProps="reportList" />
  </div>
</template>

<script>
import { ref } from "vue";
import BaseTable from "../_Bases/BaseTable.vue";
import ReportList from "./ReportList.vue";
import reportService from "./report-service";

export default {
  components: {
    BaseTable,
    ReportList
},
  setup() {
		const reportList = ref([]);
		const fetchReportList = () => {
			reportService.getReportList().then((response) => {
				reportList.value = response.data;
			});
		};
		fetchReportList();
    console.log(reportList);

		return { reportList };
	},
};
</script>

<style scoped>
th:first-child,
tbody:first-child tr:first-child td:first-child {
  border-radius: 10px 0 0 10px;
}

tr:last-child th:last-child,
tbody:last-child tr:last-child td:last-child {
  border-radius: 0 10px 10px 0;
}
</style>
