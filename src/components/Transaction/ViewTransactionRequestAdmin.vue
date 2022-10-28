<template>
  <div class="mt-[120px] mx-[177px]">
    <h1 class="text-namjaiblack font-semibold text-5xl">คำร้องถอนเงิน</h1>
    <div class="mt-4">
      <div class="w-16 border-4 border-t border-namjaired"></div>
    </div>

    <base-table>
      <th class="py-3 w-16">ลำดับ</th>
      <th class="py-3 px-7 text-left">ชื่อโครงการ</th>
      <th class="py-3 w-32">จำนวนเงิน</th>
      <th class="py-3 w-32 ">สถานะ</th>
      <th class="py-3 w-[170px]">วันที่ถอน</th>
      <th class="py-3 w-[170px]">วันที่อนุมัติ</th>
      <th class="py-3 px-6"></th>
    </base-table>

    <!-- <div name="table" class="w-full">
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr class="bg-[#E9F1F0] text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">ลำดับ</th>
            <th class="py-3 px-4 text-center md:text-left lg:px-6">ชื่อโครงการ</th>
            <th class="py-3 px-6 text-left">จำนวนเงิน</th>
            <th class="py-3 px-6 text-left">สถานะ</th>
            <th class="py-3 px-6 text-left">วันทีส่งคำขอ</th>
            <th class="py-3 px-6 text-left">วันที่อนุมัติ</th>
            <th class="py-3 px-6 text-left"></th>
          </tr>
        </thead>
        <transaction-request-list :requestProps="request"></transaction-request-list>
      </table>
    </div> -->

    <transaction-request-list :requestProps="request"></transaction-request-list>
  </div>
</template>

<script>
// import { ref } from "vue";
import BaseTable from "../_Bases/BaseTable.vue";
import BaseList from "../_Bases/BaseList.vue";
import VerificationStatus from "../Verification/VerificationStatus.vue";
import useTransaction from "./useTransaction";
import TransactionRequestList from "./TransactionRequestList.vue";

export default {
  components: {
    BaseTable,
    BaseList,
    VerificationStatus,
    TransactionRequestList,
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
