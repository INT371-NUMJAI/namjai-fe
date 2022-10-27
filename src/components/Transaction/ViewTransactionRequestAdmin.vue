<template>
  <div class="mt-[120px] mx-[177px]">
    <h1 class="text-namjaiblack font-semibold text-5xl">คำร้องถอนเงิน</h1>
    <div class="mt-4">
      <div class="w-16 border-4 border-t border-namjaired"></div>
    </div>
    <base-table>
      <th class="py-3 w-[75px]">ลำดับ</th>
      <th>
        <p class="py-3 w-[350px]">ชื่อโครงการ</p>
      </th>
      <th class="py-3 w-[150px]">จำนวนเงิน</th>
      <th class="py-3 w-[100px]">สถานะ</th>
      <th class="py-3 w-[200px]">วันที่ถอน</th>
      <th class="py-3 w-[200px]">วันที่อนุมัติ</th>
      <th class="py-3 w-[200px]"></th>
    </base-table>
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
