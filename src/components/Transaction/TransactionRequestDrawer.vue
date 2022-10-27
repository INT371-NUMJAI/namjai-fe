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
          <w-select outline v-model="withdrawRequestBody.fdnProjectUUID" :items="projects" color="black" class="h-[40px] mt-[5px]"></w-select>
          <div class="text-center flex-wrap justify-center items-center mt-[15px] space-y-4">
            <h2 class="">จำนวนเงิน</h2>
            <div v-if="withdrawRequestBody.fdnProjectUUID != undefined" class="flex justify-center space-x-4 items-end">
              <h1 class="text-3xl text-namjaigreen">{{ projects.find((x) => x.value === withdrawRequestBody.fdnProjectUUID) ? projects.find((x) => x.value === withdrawRequestBody.fdnProjectUUID).totalAmount : "-" }}</h1>
              <span class="text-sm">บาท</span>
            </div>
          </div>
          <div>
            <div class="items-center relative">
              <h2 class="text-lg">บัญชี</h2>
              <w-select outline v-model="withdrawRequestBody.bankAccountUUID" :items="bankAccount" color="black" class="h-[40px] mt-[5px]"></w-select>
              <button class="mt-[20px] w-full text-center text-sm py-2 px-4 bg-namjaiyellow relative hover:bg-namjaibrown hover:text-white">
                  <span @click="showAddAccount = !showAddAccount">เพิ่มบัญชี +</span>
                </button>
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
          <div class="absolute w-full h-16 bg-[#E9F1F0] inset-x-0 bottom-0 flex space-x-4 justify-end">
            <!-- <w-button class="text-sm" bg-color="namjaired" color="white" width="80" height="30"> ยกเลิก </w-button> -->
            <w-button @click="submitWithdrawRequest()" class="text-sm w-1/5" bg-color="green" color="white" height="32"> ส่งคำขอ </w-button>
            <!-- <w-button class="m-[4]" @click="showDialog = false" sm outline round absolute color="black" icon="wi-cross"></w-button> -->
          </div>
        </w-form>
      </div>
    </w-drawer>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import TransactionRequestDialog from './TransactionRequestDialog.vue';
import { useStore } from "vuex";
import transactionService from "./transaction-service"
import { useUtil } from '../../services/useUtil';
import { useValidation } from "../Account/validator";
import useTransaction from "./useTransaction";

export default {
  components: { TransactionRequestDialog },
  setup() {
    const valid = ref(null);
    const { validators } = useValidation();
    const showDrawer = ref(false);
    const showAccount = ref(false);
    const showAddAccount = ref(false);
    const { bankAccount , getBankAccountByFDNUUID, projects, getClosedProjectByFDNUUID } = useTransaction()

    const bankBrand = reactive([
      { label: "กรุงไทย" },
      { label: "กสิกรไทย" },
      { label: "ไทยพาณิชย์" },
      { label: "กรุงเทพ" },
      { label: "ออมสิน" },
      { label: "ทีเอ็มบีธนชาต" },
      { label: "กรุงศรี" },
    ]);      

    const store = useStore();

    const fdnUUID_store = store.state.fdn.fdn_uuid.UUID;
    console.log(fdnUUID_store);

    getBankAccountByFDNUUID(fdnUUID_store);

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
          let newBankAccount = { value: bankAccountBody.bankAccountUUID, bankBrand: bankAccountBody.bankBrand, bankNumber: bankAccountBody.bankNumber, accountName: bankAccountBody.accountName, label: `${bankAccountBody.bankNumber} ${bankAccountBody.bankBrand} ${bankAccountBody.accountName}` }
          bankAccount.value.push(newBankAccount);
          showAddAccount.value = false;
        }
      })
    }

    getClosedProjectByFDNUUID(fdnUUID_store);

    const fdnProjectCloned = projects

    const withdrawRequestBody = reactive({
      withdrawalRequestUUID: generateFiveDigitsUUID(),
      fdnProjectUUID: "",
      bankAccountUUID: "",
    })

    const submitWithdrawRequest = () => {
      transactionService.createWithdrawRequest(withdrawRequestBody).then(response => {
        if (response.status === 200) {
          showDrawer.value = false;
        }
      });
    }

    // const selectedFDNProject = computed((id) => {
    //   return projects.find((x) => {
    //     x.value === id;
    //   })
    // })


    return { showDrawer, showAccount, showAddAccount, fdnUUID_store, bankAccountBody, bankBrand, valid, validators, bankAccount, withdrawRequestBody, projects, submitBankAccount, submitWithdrawRequest };
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