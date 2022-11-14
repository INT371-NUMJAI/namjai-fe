<template>
  <div class="mt-[120px] mx-[177px]">
    <div class="container max-w-6xl w-full mx-auto">
      <h1 class="text-namjaiblack font-semibold text-5xl">คำร้องถอนเงิน</h1>
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
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">ชื่อโครงการ</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">จำนวนเงิน</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">สถานะ</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">วันที่ถอน</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">วันที่อนุมัติ</li>
            </template>
          </BaseFilter>
        </div>
        <base-table>
          <th class="py-3 w-16">ลำดับ</th>
          <th class="py-3 px-6 text-center w-[300px]">ชื่อโครงการ</th>
          <th class="py-3 px-6 text-left w-32">จำนวนเงิน</th>
          <th class="py-3 px-8 text-left w-32">สถานะ</th>
          <th class="py-3 px-8 text-left w-36">วันที่ถอน</th>
          <th class="py-3 px-8 text-left w-40">วันที่อนุมัติ</th>
          <th class="py-3 px-6 w-[90px]"></th>
        </base-table>
        <transaction-request-list :requestProps="request"></transaction-request-list>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import BaseTable from "../_Bases/BaseTable.vue";
import BaseList from "../_Bases/BaseList.vue";
import VerificationStatus from "../Verification/VerificationStatus.vue";
import useTransaction from "./useTransaction";
import TransactionRequestList from "./TransactionRequestList.vue";
import BaseSearch from "../_Bases/BaseSearch.vue";
import BaseFilter from "../_Bases/BaseFilter.vue";

export default {
  components: {
    BaseTable,
    BaseList,
    VerificationStatus,
    TransactionRequestList,
    BaseSearch,
    BaseFilter,
  },
  setup() {
    const { request, getRequestWithdraw } = useTransaction();
    getRequestWithdraw();

    return { request };
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
