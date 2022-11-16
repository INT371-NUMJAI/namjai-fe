<template>
  <div class="mt-[120px] mx-[177px]">
    <div class="container max-w-6xl w-full mx-auto">
      <h1 class="text-namjaiblack font-semibold text-5xl">มูลนิธิ</h1>
      <div class="mt-4">
        <div class="w-16 border-4 border-t border-namjaired"></div>
      </div>
      <div class="mt-10 p-5 bg-white rounded-lg space-y-5">
        <div class="flex">
          <base-search v-if="!isFiltered" @update:modelValue="submitInputSearch" class="flex-auto justify-end" />
          <BaseFilter class="flex justify-end mb-2">
            <template #show><span>default</span></template>
            <template #choice>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterFoundationList('name')">ชื่อมูลนิธิ</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterFoundationList('date-asc')">วันที่สมัครเก่า-ใหม่</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterFoundationList('date-dsc')">วันที่สมัครใหม่-เก่า</li>
              <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option" @click="filterFoundationList('status-pending')">รออนุมัติ</li>
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
        <approve-list v-if="!isFiltered" :objectProps="searchFoundationList"></approve-list>
        <!-- search -->
        <approve-list :objectProps="filteredList"></approve-list>
        <!-- filter -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
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
        if (response.data.length > 0) {
          fdnList.value = response.data;
        }
      });
    };
    fetchFdnList();

    const searchText = ref("");

    const submitInputSearch = (value) => {
      searchText.value = value;
    };

    const isFound = ref(false);
    const foundFoundationList = ref([]);
    const searchFoundationList = computed(() => {
      fdnList.value = fdnList.value.length > 0 ? fdnList.value : [];
      isFound.value = false;
      if (searchText.value === "") {
        return fdnList.value;
      } else if (fdnList.value.length > 0 && searchText.value != "") {
        foundFoundationList.value = fdnList.value.filter((f) => f.fdnName.toLowerCase().includes(searchText.value.toLowerCase()));
        if (foundFoundationList === "") {
          isFound.value = true;
          return " ";
        }
        return foundFoundationList.value;
      }
    });

    const isFiltered = ref(false);
    const filteredList = ref([]);
    const filterFoundationList = (type) => {
      isFiltered.value = true;
      filteredList.value = fdnList.value.length > 0 ? fdnList.value : [];
      switch (type) {
        case "name":
          filteredList.value = fdnList.value.sort((a, b) => {
            if (a.fdnName < b.fdnName) {
              return -1;
            }
            if (a.fdnName > b.fdnName) {
              return 1;
            }
            return 0;
          });
          break;
        case "date-asc":
          filteredList.value = fdnList.value.sort((a, b) => {
            a = a.createDate.split("/").reverse().join("");
            b = b.createDate.split("/").reverse().join("");
            return a > b ? 1 : a < b ? -1 : 0;
          });
          break;
        case "date-dsc":
          filteredList.value = fdnList.value.sort((a, b) => {
            a = a.createDate.split("/").reverse().join("");
            b = b.createDate.split("/").reverse().join("");
            return b > a ? 1 : b < a ? -1 : 0;
          });
          break;
        case "status-pending":
          filteredList.value = fdnList.value.filter((f) => f.status.includes("PENDING"));
          break;
      }
    };

    return { submitInputSearch, searchFoundationList, filterFoundationList, filteredList, isFiltered };
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
