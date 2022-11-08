<template>
  <div class="mt-[120px] mx-[177px]">
    <div class="container max-w-6xl w-full mx-auto">
      <h1 class="text-namjaiblack font-semibold text-5xl">มูลนิธิ</h1>
      <div class="mt-4">
        <div class="w-16 border-4 border-t border-namjaired"></div>
      </div>
      <div class="mt-10 p-5 bg-white rounded-lg space-y-5">
        <div class="flex">
          <BaseSearch class="flex-auto" />
          <BaseFilter class="flex justify-end mb-2">
            <template #show><span>default</span></template>
            <template #choice>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">ลำดับ</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">ชื่อมูลนิธิ</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">วันที่สมัคร</li>
			  <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">สถานะ</li>
			  <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">ผู้อนุมัติ</li>
            </template>
          </BaseFilter>
        </div>

        <base-table>
          <th class="py-3 w-24">ลำดับ</th>
          <th class="py-3 px-6 text-center w-2/5">มูลนิธิ</th>
          <th class="py-3 px-6 text-center w-40">วันที่สมัคร</th>
          <th class="py-3 px-8 text-center w-44">สถานะ</th>
          <th class="py-3 px-8 text-center">ผู้อนุมัติ</th>
        </base-table>
        <approve-list :objectProps="fdnList"></approve-list>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import approveService from "./approve-service";
import BaseTable from "../_Bases/BaseTable.vue";
import ApproveList from "./ApproveList.vue";
import BaseSearch from "../_Bases/BaseSearch.vue";
import BaseFilter from "../_Bases/BaseFilter.vue";

export default {
  components: {
    BaseTable,
    ApproveList,
    BaseSearch,
    BaseFilter,
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
