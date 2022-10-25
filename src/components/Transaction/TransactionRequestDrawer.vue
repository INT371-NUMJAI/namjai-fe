<template>
  <div class="">
    <button @click="showDrawer = true" class="flex items-center px-2 py-1 lg:px-3 lg:py-1.5 bg-green-500 space-x-2 rounded-md">
      <svg class="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 11.5V6.5M6.5 6.5V1.5M6.5 6.5H11.5M6.5 6.5H1.5" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>
      <h2 class="text-white text-sm lg:text-base">เพิ่มรายการถอน</h2>
    </button>
    <w-drawer v-model="showDrawer" bg-color="namjaigreen" width="590" class="z-50">
      <w-button class="m-2" @click="showDrawer = false" sm outline round absolute color="black" icon="wi-cross"></w-button>

      <div class="w-full mx-10 mt-12">
        <h1 class="text-[25px]">คำร้องถอนเงิน</h1>
        <w-form class="mt-[10px]">
          <h2 class="text-lg">โครงการ</h2>
          <w-select outline :items="province" color="black" class="h-[40px] mt-[5px]"></w-select>

          <!-- <select name="sort" id="sort" class="mt-5 w-full p-2 text-sm border border-[#9F9F9F] rounded-md">
            <option value="projectName">ชื่อโครงการ</option>
            <option value="status">เพื่อนสูงวัย ไปสุดจี๊ด</option>
            <option value="amount">จำนวนเงิน</option>
            <option value="audi">Audi</option>
          </select> -->

          <div class="text-center flex-wrap justify-center items-center mt-[15px] space-y-4">
            <h2 class="">จำนวนเงิน</h2>
            <div class="flex justify-center space-x-4 items-end">
              <h1 class="text-3xl text-namjaigreen">9,578,095</h1>
              <span class="text-sm">บาท</span>
            </div>
          </div>
          <div>
            <!-- <div>
              <h2 class="text-lg">บัญชี</h2>
              <select name="sort" id="sort" class="mt-5 w-full p-2 text-sm border border-[#9F9F9F] rounded-md">
                <option value="projectName">123-456789-0 - ธนาคารไทยพาณิชย์ | สมหญิง มั่นคงดุจภูผา</option>
                <option value="status">เพื่อนสูงวัย ไปสุดจี๊ด</option>
                <option value="amount">จำนวนเงิน</option>
                <option value="audi">เพิ่ม</option>
              </select>
            </div> -->

            <div class="items-center relative">
              <h2 class="text-lg">บัญชี</h2>
              <w-select outline :items="account" color="black" class="h-[40px] mt-[5px]"></w-select>
              <button class="mt-[20px] w-full text-center text-sm py-2 px-4 bg-namjaiyellow relative hover:bg-namjaibrown hover:text-white">
                  <span @click="showAddAccount = !showAddAccount">เพิ่มบัญชี +</span>
                </button>
              <!-- <div v-if="showAccount" class="absolute z-50 top-100 w-full rounded max-h-select overflow-y-auto shadow">
                <button class="w-full text-left text-sm py-2 px-4 border-b border-slate-300 bg-white relative hover:bg-gray-300 hover:text-white">
                  <span class="">123-456789-0 - ธนาคารไทยพาณิชย์ <br />สมหญิง มั่นคงดุจภูผา</span>
                </button>
                <button class="w-full text-left text-sm py-2 px-4 border-b border-slate-300 bg-white relative hover:bg-gray-300 hover:text-white">
                  <span class="">123-456789-0 - ธนาคารไทยพาณิชย์ <br />สมหญิง มั่นคงดุจภูผา</span>
                </button>
                <button class="w-full text-left text-sm py-2 px-4 border-b border-slate-300 bg-white relative hover:bg-gray-300 hover:text-white">
                  <span class="">123-456789-0 - ธนาคารไทยพาณิชย์ <br />สมหญิง มั่นคงดุจภูผา</span>
                </button>
                <button class="w-full text-center text-sm py-2 px-4 border-b border-slate-300 bg-white relative hover:bg-gray-300 hover:text-white">
                  <span @click="showAddAccount = !showAddAccount">เพิ่มบัญชี</span>
                </button>
              </div> -->
            </div>
          </div>
          <div v-if="showAddAccount">
          <w-form v-if="showAddAccount" v-model="valid" class="mt-[10px]">
            <div class="grid grid-cols-2 gap-[30px]">
              <div class="space-y-2">
                <label>ธนาคาร</label>
                <w-select :validators="[validators.required]" v-model="bankAccountBody.bankBrand" :items="bankBrand" color="black"></w-select>
              </div>
              <div class="space-y-2">
                <label>เลขที่บัญชี</label>
                <w-input :validators="[validators.required]" v-model="bankAccountBody.bankNumber" label-color="grey" color="black" label="123-456789-0" static-label> </w-input>
              </div>
            </div>
            <div class="mt-[20px] space-y-2">
              <label>ชื่อบัญชี</label>
              <w-input :validators="[validators.required]" v-model="bankAccountBody.accountName" label-color="grey" color="black" label="สมหญิง มั่นคงดุจภูผา" static-label> </w-input>
            </div>
            <div class="mt-5 md:mt-[18px] lg:flex justify-center">
              <w-button :disabled="valid === false" @click="submitBankAccount()" class="text-sm  w-full lg:w-1/5" bg-color="green-dark2" color="white" height="32"> เพิ่มบัญชี </w-button>
            </div>
            
          </w-form>
        </div>
          <div class="absolute w-full h-16 bg-[#E9F1F0] inset-x-0 bottom-0 p-5 flex space-x-4 justify-end">
            <!-- <w-button class="text-sm" bg-color="namjaired" color="white" width="80" height="30"> ยกเลิก </w-button> -->
            <w-button @click="showDialog = true" class="text-sm w-1/5" bg-color="green" color="white" height="32"> ส่งคำขอ </w-button>
          <!-- <w-dialog v-model="showDialog">
            <w-button class="m-2" @click="showDialog = false" sm outline round absolute color="black" icon="wi-cross"></w-button>
            <transaction-request-dialog></transaction-request-dialog>
          </w-dialog> -->
          </div>
        </w-form>
      </div>
    </w-drawer>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
// import TransactionRequestDialog from './TransactionRequestDialog.vue';
import { useStore } from "vuex";
import transactionService from "./transaction-service"
import { useUtil } from '../../services/useUtil';
import { useValidation } from "../Account/validator";

export default {
  // components: { TransactionRequestDialog },
  setup() {
    const showDrawer = ref(false);
    const showAccount = ref(false);
    const showAddAccount = ref(false);
    const showDialog = ref(false);

    const province = reactive([{ label: "กระบี่" },{ label: "กรุงเทพมหานคร" }, { label: "กาญจนบุรี" }]);

    const account = reactive([{ label: "123-456789-0 ธนาคารไทยพาณิชย์ สมหญิง มั่นคงดุจภูผา" },{ label: "123-456789-0 - ธนาคารไทยพาณิชย์ สมหญิง มั่นคงดุจภูผา" },{ label: "123-456789-0 - ธนาคารไทยพาณิชย์ สมหญิง มั่นคงดุจภูผา" }])

    const bankBrand = reactive([{ label: "กรุงไทย"}, { label: "กสิกรไทย"}, { label: "ไทยพาณิชย์"}, { label: "กรุงเทพ"}, { label: "ออมสิน"}, { label: "ทีเอ็มบีธนชาต"}, { label: "กรุงศรี"},])

    const store = useStore();

    const fdnUUID_store = store.state.fdn.fdn_uuid.UUID;

    // const bankAccountList = reactive([]);

    const { generateFiveDigitsUUID } = useUtil();
    const bankAccountBody = reactive({
    bankAccountUUID: generateFiveDigitsUUID(),
    bankBrand:"",
    bankNumber:"",
    accountName:"",
    fdnUUID: fdnUUID_store,
    })

    const submitBankAccount = () => {
      transactionService.addFDNBankAccount(bankAccountBody).then(response => {
        if (response.status === 200) {
          let newBankAccount = { label: `${bankAccountBody.bankNumber} ${bankAccountBody.bankBrand} ${bankAccountBody.accountName}` }
          account.push(newBankAccount);
          showAddAccount.value = false;
        }
      })
    }

    const valid = ref(null);
    const { validators } = useValidation();

    return { showDrawer, showAccount, showAddAccount, province, account, showDialog, fdnUUID_store, bankAccountBody, bankBrand, valid, validators, submitBankAccount };
  },
};
</script>

<style scoped>
  .namjaigreen--bg {
    background-color: #00715d;
  }
  
  .namjaired--bg {
    background-color: #d45343;
  }
  </style>