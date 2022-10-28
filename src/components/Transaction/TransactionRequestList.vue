<template>
    <div v-for="(requestProp, index) in requestProps" :key="index">
    <base-list class="text-sm">
      <th class="py-3 px-6">{{ index + 1 }}</th>
      <th>
        <p class="py-3 pl-8 w-[305px] text-left truncate">{{ requestProp.foundationProjectName }}</p>
      </th>
      <th class="py-3 px-16 w-36 truncate">{{ requestProp.totalAmount }}</th>
      <th class="py-3 px-">
        <verification-status :statusText="requestProp.status"></verification-status>
      </th>
      <th class="py-3 pl-8 w-[230px]">{{ requestProp.createDate.slice(0, 10) }}</th>
      <th class="py-3 pl-8 w-[230px]">{{ requestProp.approveDate ? requestProp.approveDate.slice(0, 10) : "-" }}</th>
      <th class="py-3 pl-3 w-[80px"> 
        <transaction-request-dialog class="w-28" buttonText="รายละเอียด" :id="requestProp.withdrawalUUID" :hiddenProp="true"></transaction-request-dialog> </th>
    </base-list>
    </div>
</template>

<script>
import BaseList from "../_Bases/BaseList.vue";
import VerificationStatus from "../Verification/VerificationStatus.vue";
import TransactionRequestDialog from './TransactionRequestDialog.vue';


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
th:first-child {
  border-radius: 10px 0 0 10px;
}

th:last-child {
  border-radius: 0 10px 10px 0;
}

</style>
