<template>
  <div>
    <w-button @click="showDialog = true" class="text-sm mr-[30px] w-4/5" bg-color="green" color="white" height="32"> {{ buttonText }} </w-button>
    <w-dialog v-model="showDialog">
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-black bg-opacity-25 transition-opacity"></div>
      <div class="fixed inset-x-0 inset-y-20 z-10 overflow-y-auto">
        <div class="flex items-center justify-center p-4 text-center">
          <div class="relative max-w-xl px-8 lg:px-20 py-5 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
          <w-button class="m-2" @click="showDialog = false" sm outline round absolute color="black" icon="wi-cross"></w-button>
            <div class="mt-3">
              <h2 class="text-lg text-center font-medium leading-6 text-gray-900" id="modal-title">ตรวจสอบความถูกต้อง</h2>
              <div class="mt-5 space-y-3 md:space-y-5 text-sm leading-relaxed">
                <h2 class="text-base">คำขอถอนเงิน</h2>
                <div class="grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-6">
                  <h2 class="col-span-1 lg:col-span-2">หมายเลขคำขอ</h2>
                  <h3 class="col-span-2 lg:col-span-5">#{{ requestDetail.withdrawalUUID }}</h3>
                </div>
                <div class="grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-6">
                  <h2 class="col-span-1 lg:col-span-2">มูลนิธิ</h2>
                  <h3 class="col-span-2 lg:col-span-5">{{ requestDetail.fdnName }}</h3>
                </div>
                <div class="grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-6">
                  <h2 class="col-span-1 lg:col-span-2">โครงการ</h2>
                  <h3 class="col-span-2 lg:col-span-5">{{ requestDetail.foundationProjectName }}</h3>
                </div>
                <div class="grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-6">
                  <h2 class="col-span-1 lg:col-span-2">จำนวนเงิน</h2>
                  <div class="space-x-2 col-span-2 lg:col-span-5 flex">
                    <h3 class="">{{ requestDetail.totalAmount }}</h3>
                    <span> บาท</span>
                  </div>
                </div>
                <div class="grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-6">
                  <h2 class="col-span-1 lg:col-span-2">บัญชี</h2>
                  <h3 class="col-span-2 lg:col-span-5">
                    {{ requestDetail.bankNumber }} - {{ requestDetail.bankAccountBrand }} <br />
                    {{ requestDetail.bankAccountName }}
                  </h3>
                </div>
              </div>
            </div>
            <div v-if="hiddenProp" class="md:mt-5 py-5 flex justify-center space-x-5">
              <w-button class="text-sm" bg-color="namjaired" color="white" width="80" height="30"> ไม่อนุมัติ </w-button>
              <w-button @click="setFDNEmailAndApprove(requestDetail.fdnEmail);submitWithdrawApprove()" class="text-sm" bg-color="namjaigreen" color="white" width="80" height="30"> อนุมัติ </w-button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </w-dialog>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import useTransaction from "./useTransaction";
import transactionService from './transaction-service';
import { useAuth } from '../../services/auth-middleware';
  
  export default {
    props: {
      buttonText: {
        type: String,
      },
      id: {
        type: String,
      },
      hiddenProp: {
        type: Boolean,
      }
    },
    setup(props) {
      const showDialog = ref(false);
      const use_auth = useAuth();

      const { requestDetail, fdnEmail, getRequestDetailByWithDrawalUUID } = useTransaction();
      getRequestDetailByWithDrawalUUID(props.id);
      // console.log(props.id);

      const withdrawApproveBody = reactive({
        withdrawalUUID: props.id,
        fdnEmail: fdnEmail,
        status: "APPROVED",
        message: "",
      });

      const setFDNEmailAndApprove = (email) => {
        withdrawApproveBody.fdnEmail = email;
      }

      const submitWithdrawApprove = () => {
        transactionService.approveWithdrawRequest(withdrawApproveBody).then(response => {
          if (response.status === 200) {
            showDialog.value = false;
          }
        });
      }
  
      return { showDialog, requestDetail, withdrawApproveBody, fdnEmail, submitWithdrawApprove, setFDNEmailAndApprove };
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