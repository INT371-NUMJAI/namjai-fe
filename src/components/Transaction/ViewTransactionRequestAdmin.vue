<template>
  <div class="mt-[120px] mx-[177px]">
    <div class="container max-w-6xl w-full mx-auto">
      <h1 class="text-namjaiblack font-semibold text-5xl">คำร้องถอนเงิน</h1>
      <div class="mt-4">
        <div class="w-16 border-4 border-t border-namjaired"></div>
      </div>
      <div class="mt-10 p-5 bg-white rounded-lg space-y-5">
        <div class="flex">
          <BaseSearch v-if="!isFiltered" @update:modelValue="submitInputSearch" class="flex-auto" />
          <BaseFilter class="flex justify-end mb-2">
            <template #show><span>default</span></template>
            <template #choice>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterProjectList('name')">ชื่อโครงการ</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterProjectList('amount-dsc')">จำนวนเงินมาก-น้อย</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterProjectList('amount-asc')">จำนวนเงินน้อย-มาก</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterProjectList('date-asc')">วันที่ส่งคำร้องเก่า-ใหม่</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterProjectList('date-dsc')">วันที่ส่งคำร้องใหม่-เก่า</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterProjectList('status-pending')">สถานะ</li>
            </template>
          </BaseFilter>
        </div>
        <base-table>
          <th class="py-3 w-16">ลำดับ</th>
          <th class="py-3 px-6 text-center w-[300px]">ชื่อโครงการ</th>
          <th class="py-3 px-6 text-left w-32">จำนวนเงิน</th>
          <th class="py-3 px-8 text-left w-32">สถานะ</th>
          <th class="py-3 px-8 text-left w-36">วันที่ส่งคำร้อง</th>
          <th class="py-3 px-8 text-left w-40">วันที่อนุมัติ</th>
          <th class="py-3 px-6 w-[90px]"></th>
        </base-table>
        <transaction-request-list v-if="!isFiltered" :requestProps="searchProjectList"></transaction-request-list>
        <transaction-request-list :requestProps="filteredList"></transaction-request-list>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
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

    const searchText = ref("");

    const submitInputSearch = (value) => {
      searchText.value = value;
    };

    const isFound = ref(false);
    const foundProjectList = ref([]);
    const searchProjectList = computed(() => {
      request.value = request.value.length > 0 ? request.value : [];
      isFound.value = false;
      if (searchText.value === "") {
        return request.value;
      } else if (request.value.length > 0 && searchText.value != "") {
        foundProjectList.value = request.value.filter((f) => f.foundationProjectName.toLowerCase().includes(searchText.value.toLowerCase()));
        if (foundProjectList === "") {
          isFound.value = true;
          return " ";
        }
        return foundProjectList.value;
      }
    });

    const isFiltered = ref(false);
    const filteredList = ref([]);
    const filterProjectList = (type) => {
      isFiltered.value = true;
      filteredList.value = request.value.length > 0 ? request.value : [];
      switch (type) {
        case "name":
          filteredList.value = request.value.sort((a, b) => {
            if (a.foundationProjectName < b.foundationProjectName) {
              return -1;
            }
            if (a.foundationProjectName > b.foundationProjectName) {
              return 1;
            }
            return 0;
          });
          break;
        case "date-asc":
          filteredList.value = request.value.sort((a, b) => {
            a = a.createDate.slice(0, 10).split("-").reverse().join("");
            b = b.createDate.slice(0, 10).split("-").reverse().join("");
            return a > b ? 1 : a < b ? -1 : 0;
          });
          break;
        case "date-dsc":
          filteredList.value = request.value.sort((a, b) => {
            a = a.createDate.slice(0, 10).split("-").reverse().join("");
            b = b.createDate.slice(0, 10).split("-").reverse().join("");
            return b > a ? 1 : b < a ? -1 : 0;
          });
          break;
        case "status-pending":
          filteredList.value = request.value.filter((f) => f.status.includes("PENDING"));
          break;
        case "amount-dsc":
          filteredList.value = request.value.sort((a, b) => {
            return b.totalAmount - a.totalAmount;
          })
          break;
          case "amount-asc":
          filteredList.value = request.value.sort((a, b) => {
            return a.totalAmount - b.totalAmount;
          })
          break;
      }
    };

    return { request, searchProjectList, filterProjectList, submitInputSearch, foundProjectList, isFiltered, isFound, filteredList };
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
