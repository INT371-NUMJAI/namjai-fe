<template>
  <div>
    <div class="">
      <div class="my-10 mx-6">
        <div class="flex space-x-5">
          <svg class="w-6 h-5" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2ZM2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V3H15V2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H2ZM15 5H1V10C1 10.2652 1.10536 10.5196 1.29289 10.7071C1.48043 10.8946 1.73478 11 2 11H14C14.2652 11 14.5196 10.8946 14.7071 10.7071C14.8946 10.5196 15 10.2652 15 10V5Z"
              fill="#363636"
            />
            <path d="M2 8C2 7.73478 2.10536 7.48043 2.29289 7.29289C2.48043 7.10536 2.73478 7 3 7H4C4.26522 7 4.51957 7.10536 4.70711 7.29289C4.89464 7.48043 5 7.73478 5 8V9C5 9.26522 4.89464 9.51957 4.70711 9.70711C4.51957 9.89464 4.26522 10 4 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V8Z" fill="#363636" />
          </svg>
          <div class="">
            <h2 class="w-11/12 truncate text-sm text-namjaidarkgray">{{ projectName }}</h2>
            <h3 class="text-xs text-gray-400">#Invoice : {{ uuid.slice(0, 23) }}</h3>
          </div>
        </div>
        <w-form v-model="valid" class="pt-5 space-y-6">
          <div>
            <label class="text-sm text-gray-00">เลขที่บัตร</label>
            <w-input :validators="[validators.required]" type="text" color="teal-dark2" placeholder="ใส่เฉพาะเลขที่บัตร เช่น 4242-4242-42" inner-icon-right="fa fa-cc-visa" outline></w-input>
          </div>
          <div>
            <label class="text-sm text-gray-600">ชื่อบนบัตร</label>
            <w-input :validators="[validators.required]" type="text" color="teal-dark2" placeholder="Jennie Kim" outline></w-input>
          </div>
          <div class="grid grid-flow-col gap-8">
            <div>
              <label class="text-sm text-gray-600">วันที่หมดอายุ</label>
              <div class="flex">
                <w-input :validators="[validators.required]" type="text" color="teal-dark2" class="text-center w-8" placeholder="เดือน"></w-input>
                <span>/</span>
                <w-input :validators="[validators.required]" type="text" color="teal-dark2" class="text-center w-8" placeholder="ปี"></w-input>
              </div>
              
            </div>
            <div>
              <label class="text-sm text-gray-600">Security code</label>
              <w-input :validators="[validators.required, validators.SecurityDigits]" type="password" color="teal-dark2" outline></w-input>
            </div>
          </div>
          <w-flex class="pt-3">
            <w-button @click="submitPaymentForm()" class="grow" bg-color="green-dark2" height="35">
              <span class="text-white"> Checkout ฿{{ amountProp }}</span>
            </w-button>
          </w-flex>
        </w-form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useValidation } from "../Account/validator";
import { v4 as uuidv4 } from "uuid";
import projectService from "../Project/project-service";

export default {
  props: {
    amountProp: {
      type: Number,
    },
    projectName: {
      type: String,
    },
    validForShow: {
      type: Boolean,
    },
    foundationProject: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const valid = ref(null);
    const { validators } = useValidation();
    const isValid = ref(false);

    const uuid = uuidv4();

    const showDialog = ref(false);

    const paymentBody = reactive({
      fdnProjectUUID: props.foundationProject,
      amount: props.amountProp,
    });

    const showCreditCard = ref(true);

    const submitPaymentForm = () => {
      projectService.createPayment(paymentBody).then((response) => {
        if (response.status === 200) {
          emit("closeThisComp", false);
          window.location.reload();
        }
      });
    };

    return { showDialog, valid, validators, uuid, isValid, paymentBody, showCreditCard, submitPaymentForm };
  },
};
</script>
