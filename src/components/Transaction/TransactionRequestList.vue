<template>
  <span v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && use_auth.store_auth.user.status != `ACTIVE`">
    <p class="text-center mt-[80px]">กรุณาติดต่อเราเพื่อทำการยืนยันมูลนิธิของท่าน</p>
  </span>
  <div v-for="(requestProp, index) in requestProps" :key="index">
    <base-list>
      <td class="py-3 text-center w-16">{{ index + 1 }}</td>
      <td class="py-3 pl-6 pr-6 text-left whitespace-nowrap w-[220px]">
        <p class="overflow-hidden truncate w-[270px]">{{ requestProp.foundationProjectName }}</p>
      </td>
      <td class="py-3 px-6 w-32">{{ requestProp.totalAmount }}</td>
      <td class="py-3 px-6 w-28">
        <verification-status :statusText="requestProp.status"></verification-status>
      </td>
      <td class="py-3 text-center w-40">{{ requestProp.createDate.slice(0, 10) }}</td>
      <td class="py-3 px-8 text-center w-40">{{ requestProp.approveDate ? requestProp.approveDate.slice(0, 10) : "-" }}</td>
      <td class="py-3 pl-3 w-[90px]">
        <transaction-request-dialog class="w-28" buttonText="รายละเอียด" :id="requestProp.withdrawalUUID" :hiddenProp="true"></transaction-request-dialog>
      </td>
    </base-list>
  </div>
</template>

<script>
import BaseList from "../_Bases/BaseList.vue";
import VerificationStatus from "../Verification/VerificationStatus.vue";
import TransactionRequestDialog from "./TransactionRequestDialog.vue";

export default {
  components: {
    BaseList,
    VerificationStatus,
    TransactionRequestDialog,
  },
  props: {
    requestProps: {
      type: Array,
    },
  },
};
</script>

<style scoped>
td:first-child {
  border-radius: 10px 0 0 10px;
}

td:last-child {
  border-radius: 0 10px 10px 0;
}
</style>
