<template>
  <div class="mt-[120px] mx-[177px]">
    <h1 class="text-5xl">เรื่องร้องเรียน</h1>
    <div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4 lg:mb-[40px]"></div>
    <!-- <button @click="testComputed('message')" type="text">test</button> -->
    <!-- {{ testComputed('hello') }} -->
    <div class="flex">
      <base-search v-if="!isFiltered" @update:modelValue="submitInputSearch" class="flex-auto justify-end" />
      <BaseFilter class="flex justify-end mb-2">
        <template #show><span>default</span></template>
        <template #choice>
          <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterReportList('name')">เรื่องร้องเรียน</li>
          <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterReportList('type-web')">การใช้งาน</li>
          <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterReportList('type-fdn')">มูลนิธิ</li>
          <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterReportList('type-user')">ผู้ใช้</li>
          <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterReportList('type-other')">อื่น ๆ</li>
          <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterReportList('status-unsolved')">รอการแก้ไข</li>
        </template>
      </BaseFilter>
    </div>
    <base-table>
      <th class="py-3 w-[75px]">ลำดับ</th>
      <th>
        <p class="py-3 w-[300px]">เรื่องร้องเรียน</p>
      </th>
      <th class="py-3 w-[250px]">ประเภท</th>
      <th class="py-3 w-[250px]">สถานะ</th>
    </base-table>
    <report-list v-if="!isFiltered" :reportProps="searchReportList" />
	<report-list :reportProps="filteredList" />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import BaseTable from "../_Bases/BaseTable.vue";
import ReportList from "./ReportList.vue";
import reportService from "./report-service";
import BaseSearch from "../_Bases/BaseSearch.vue";
import BaseFilter from "../_Bases/BaseFilter.vue";

export default {
  components: {
    BaseTable,
    ReportList,
    BaseFilter,
    BaseSearch,
  },
  setup() {
    const reportList = ref([]);
    const fetchReportList = () => {
      reportService.getReportList().then((response) => {
        reportList.value = response.data;
      });
    };
    fetchReportList();

    const searchText = ref("");

    const submitInputSearch = (value) => {
      searchText.value = value;
    };

    const isFound = ref(false);
    const foundReportList = ref([]);
    const searchReportList = computed(() => {
      reportList.value = reportList.value.length > 0 ? reportList.value : [];
      isFound.value = false;
      if (searchText.value === "") {
        return reportList.value;
      } else if (reportList.value.length > 0 && searchText.value != "") {
        foundReportList.value = reportList.value.filter((f) => f.detail.toLowerCase().includes(searchText.value.toLowerCase()));
        if (foundReportList === "") {
          isFound.value = true;
          return " ";
        }
        return foundReportList.value;
      }
    });

    const isFiltered = ref(false);
    const filteredList = ref([]);
    const filterReportList = (type) => {
      isFiltered.value = true;
      filteredList.value = reportList.value.length > 0 ? reportList.value : [];
      switch (type) {
        case "name":
          filteredList.value = reportList.value.sort((a, b) => {
            if (a.detail < b.detail) {
              return -1;
            }
            if (a.detail > b.detail) {
              return 1;
            }
            return 0;
          });
          break;
        case "type-web":
          filteredList.value = reportList.value.filter((f) => f.issueType.includes("WEB_PROBLEM"));
          break;
        case "type-fdn":
          filteredList.value = reportList.value.filter((f) => f.issueType.includes("FDN_PROBLEM"));
          break;
        case "type-user":
          filteredList.value = reportList.value.filter((f) => f.issueType.includes("USER_PROBLEM"));
          break;
		  case "type-other":
		filteredList.value = reportList.value.filter((f) => f.issueType.includes("OTHERS"));
          break;
        case "status-pending":
          filteredList.value = reportList.value.filter((f) => f.status.includes("PENDING"));
          break;
      }
    };

    // const test = ref("testFunction");
    // const testComputed = computed(() => {
    // 	return msg => { return `${msg} ${test.value}`};
    // })

    return { reportList, searchReportList, submitInputSearch, filterReportList, filteredList, isFiltered };
  },
};
</script>

<style scoped>
.table tr {
  border-radius: 20px;
}
th:first-child,
tbody:first-child tr:first-child td:first-child {
  border-radius: 10px 0 0 10px;
}

tr:last-child th:last-child,
tbody:last-child tr:last-child td:last-child {
  border-radius: 0 10px 10px 0;
}
</style>
