<template>
  <div v-if="route.params.id === use_auth.store_auth.user.email" class="container mx-auto p-5 md:py-8 lg:py-7 md:px-[34px] lg:px-[34px] bg-white rounded-lg space-y-5">
    <div class="flex justify-between items-center">
      <h2 class="text-sm lg:text-base">รายการโครงการ</h2>
      <transaction-request-drawer v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && use_auth.store_auth.user.status === `ACTIVE`" />
      <!-- <router-link to="/trd">
      <button class="flex justify-center items-center px-2 py-1 lg:px-4 lg:py-2 bg-green-500 space-x-2 rounded-md">
        <svg class="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 11.5V6.5M6.5 6.5V1.5M6.5 6.5H11.5M6.5 6.5H1.5" stroke="white" stroke-width="2" stroke-linecap="round" />
        </svg>
        <h2 class="text-white text-sm lg:text-base">เพิ่มรายการถอน</h2>
      </button></router-link> -->
    </div>
    <hr />
    <span v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && use_auth.store_auth.user.status != `ACTIVE`">
        <p class="text-center mt-[40px]">กรุณาติดต่อเราเพื่อทำการยืนยันมูลนิธิของท่าน</p>
      </span>
    <div v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && use_auth.store_auth.user.status === `ACTIVE`">
      <div class="flex">
          <base-search v-if="!isFiltered" @update:modelValue="submitInputSearch" class="flex-auto justify-end" />
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

      <div name="table" class="w-full">
        <div class="bg-white overflow-x-auto shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-[#E9F1F0] text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-4 text-center md:text-left lg:px-6">ชื่อโครงการ</th>
                <th class="py-3 px-6 text-left">จำนวนเงิน</th>
                <th class="py-3 px-6 text-left">สถานะ</th>
                <th class="py-3 px-6 text-left">วันทีส่งคำขอ</th>
                <th class="py-3 px-6 text-left">วันที่อนุมัติ</th>
                <th class="py-3 px-6 text-left"></th>
              </tr>
            </thead>
            <tbody v-for="request in searchProjectList" :key="request.withdrawalUUID" class="text-gray-600 text-sm font-light">
              <tr @click="showDialog = true" class="border-b border-gray-200 hover:bg-gray-100 odd:bg-white even:bg-gray-100 cursor-pointer">
                <td class="py-4 text-left whitespace-nowrap">
                  <p class="px-4 lg:px-6 w-[300px] md:w-[250px] lg:w-[300px] truncate font-medium">{{ request.foundationProjectName }}</p>
                </td>
                <td class="h py-4 px-6 text-left">
                  <span>{{ request.totalAmount }}</span>
                </td>
                <td class="py-4 px-6 text-left">
                  <span> <verification-status :statusText="request.status"></verification-status> </span>
                </td>
                <td class="py-4 px-6 text-left">
                  <span>{{ request.createDate.slice(0, 10) }}</span>
                </td>
                <td class="py-4 px-6 text-left">
                  <span>{{ request.approveDate ? request.approveDate.slice(0, 10) : "-" }}</span>
                </td>
                <td class="py-4 px-3 text-left">
                 <transaction-request-dialog buttonText="รายละเอียด" :id="request.withdrawalUUID" :hiddenProp="false"></transaction-request-dialog>
                </td>
              </tr>
            </tbody>
            <div v-if="!isFiltered">
            <tbody v-for="request in filteredList" :key="request.withdrawalUUID" class="text-gray-600 text-sm font-light">
              <tr @click="showDialog = true" class="border-b border-gray-200 hover:bg-gray-100 odd:bg-white even:bg-gray-100 cursor-pointer">
                <td class="py-4 text-left whitespace-nowrap">
                  <p class="px-4 lg:px-6 w-[300px] md:w-[250px] lg:w-[300px] truncate font-medium">{{ request.foundationProjectName }}</p>
                </td>
                <td class="h py-4 px-6 text-left">
                  <span>{{ request.totalAmount }}</span>
                </td>
                <td class="py-4 px-6 text-left">
                  <span> <verification-status :statusText="request.status"></verification-status> </span>
                </td>
                <td class="py-4 px-6 text-left">
                  <span>{{ request.createDate.slice(0, 10) }}</span>
                </td>
                <td class="py-4 px-6 text-left">
                  <span>{{ request.approveDate ? request.approveDate.slice(0, 10) : "-" }}</span>
                </td>
                <td class="py-4 px-3 text-left">
                 <transaction-request-dialog buttonText="รายละเอียด" :id="request.withdrawalUUID" :hiddenProp="false"></transaction-request-dialog>
                </td>
              </tr>
            </tbody>
          </div>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TransactionRequestDrawer from "@/components/Transaction/TransactionRequestDrawer.vue";
import TransactionRequestDialog from "./TransactionRequestDialog.vue";
import { ref, computed } from '@vue/reactivity';
import useTransaction from './useTransaction';
import { useAuth } from '../../services/auth-middleware';
import VerificationStatus from '../Verification/VerificationStatus.vue';
import { useRoute } from 'vue-router';
import BaseSearch from '../_Bases/BaseSearch.vue';
import BaseFilter from '../_Bases/BaseFilter.vue';


export default {
  components: {
    TransactionRequestDrawer,
    TransactionRequestDialog,
    VerificationStatus,
    BaseFilter,
    BaseSearch,
},
  setup() {
    const showDialog = ref(false);
    const use_auth = useAuth();
    const route = useRoute();

    const { requestByFDNEmail, getRequestByFDNEmail } = useTransaction();
    getRequestByFDNEmail(route.params.id);

    const searchText = ref("");

    const submitInputSearch = (value) => {
      searchText.value = value;
    };

    const isFound = ref(false);
    const foundProjectList = ref([]);
    const searchProjectList = computed(() => {
      requestByFDNEmail.value = requestByFDNEmail.value.length > 0 ? requestByFDNEmail.value : [];
      isFound.value = false;
      if (searchText.value === "") {
        return requestByFDNEmail.value;
      } else if (requestByFDNEmail.value.length > 0 && searchText.value != "") {
        foundProjectList.value = requestByFDNEmail.value.filter((f) => f.foundationProjectName.toLowerCase().includes(searchText.value.toLowerCase()));
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
      filteredList.value = requestByFDNEmail.value.length > 0 ? requestByFDNEmail.value : [];
      switch (type) {
        case "name":
          filteredList.value = requestByFDNEmail.value.sort((a, b) => {
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
          filteredList.value = requestByFDNEmail.value.sort((a, b) => {
            a = a.createDate.slice(0, 10).split("-").reverse().join("");
            b = b.createDate.slice(0, 10).split("-").reverse().join("");
            return a > b ? 1 : a < b ? -1 : 0;
          });
          break;
        case "date-dsc":
          filteredList.value = requestByFDNEmail.value.sort((a, b) => {
            a = a.createDate.slice(0, 10).split("-").reverse().join("");
            b = b.createDate.slice(0, 10).split("-").reverse().join("");
            return b > a ? 1 : b < a ? -1 : 0;
          });
          break;
        case "status-pending":
          filteredList.value = requestByFDNEmail.value.filter((f) => f.status.includes("PENDING"));
          break;
        case "amount-dsc":
          filteredList.value = requestByFDNEmail.value.sort((a, b) => {
            return b.totalAmount - a.totalAmount;
          })
          break;
          case "amount-asc":
          filteredList.value = requestByFDNEmail.value.sort((a, b) => {
            return a.totalAmount - b.totalAmount;
          })
          break;
      }
    };

    return { showDialog, requestByFDNEmail, route, use_auth, searchProjectList, filterProjectList, submitInputSearch, foundProjectList, isFiltered, isFound, filteredList };
  },
};
</script>
