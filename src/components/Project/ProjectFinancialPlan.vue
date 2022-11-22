<template>
  <div>
    <base-button v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user.email === fdnOwnerProjectProp" @click="showForm = true" class="py-2 px-3 text-[14px] lg:mx-0 md:mx-0 mx-0" buttonLabel="+ เพิ่มแผนการใช้เงิน"></base-button>
    <w-form v-model="valid" v-if="showForm" class="mt-[50px]">
      <div class="flex space-x-[30px]">
        <w-input v-model="projectFinancialFormBody.detail" :validators="[validators.required]" class="mb-[30px] lg:text-base md:text-base text-sm" type="text" color="black" label="ชื่อรายการ" label-color="black" placeholder=" " />
        <w-input v-model="projectFinancialFormBody.quantity" :validators="[validators.required]" class="mb-[30px] lg:text-base md:text-base text-sm" type="text" color="black" label="จำนวน" label-color="black" placeholder=" " />
      </div>
      <div class="grid grid-cols-2 gap-[30px]">
        <w-input v-model="projectFinancialFormBody.amount" :validators="[validators.required]" class="mb-[30px] lg:text-base md:text-base text-sm" type="number" color="black" label="ยอดรวม" label-color="black" placeholder=" " />
      </div>
      <div class="flex gap-6">
        <base-button @click="showForm = false" class="py-2 px-9 my-[30px]" buttonLabel="ยกเลิก" buttonColor="bg-namjaired"></base-button>
        <base-button @click="submitProjectFinancial()" :isValid="valid === false" class="py-2 px-9 my-[30px]" buttonLabel="ยืนยัน"></base-button>
      </div>
    </w-form>
    <w-transition-slide left class="fixed right-[30px] top-[80px]">
      <w-alert class="w-[350px]" v-if="showAlert" v-model="showAlert" :success="checkSuccess" :error="checkError" border-right dismiss plain> {{ responseMessage }} </w-alert>
    </w-transition-slide>
    <h1 class="text-sm lg:text-base">รายละเอียดแผนการใช้เงิน</h1>
    <div class="italic text-center my-[30px]" v-if="financials.length === 0">ยังไม่มีแผนการใช้เงิน</div>
    <div v-else-if="financials.length != 0" name="table" class="w-full">
      <div class="bg-white overflow-x-auto shadow-md rounded my-6">
        <table class="min-w-max w-full table-auto">
          <thead>
            <tr class="bg-[#D8EFEB] text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-4 text-center md:text-left lg:px-6">ลำดับ</th>
              <th class="py-3 px-6 text-center">รายการ</th>
              <th class="py-3 px-6 text-center">จำนวน</th>
              <th class="py-3 px-6 text-center">จำนวนเงิน (บาท)</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
            <tr v-for="(financial, index) in financials" :key="index" class="border-b border-gray-200 odd:bg-white even:bg-[#dce8e7]">
              <td class="py-4 text-center whitespace-nowrap">
                <p class="px-4 lg:px-6 w-[70px] font-medium">{{ index + 1 }}</p>
              </td>
              <td class="h py-4 px-6 text-left w-[250px] break-all">
                <span>{{ financial.detail }}</span>
              </td>
              <td class="h py-4 px-6 text-left w-[120px]">
                <span>{{ financial.quantity }}</span>
              </td>
              <td class="py-4 px-6 text-center">
                <span>{{ financial.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 class="text-right text-xl">
          <b>ยอดรวม:</b>
          {{
            financials
              .reduce(function (old, current) {
                return old + current.amount;
              }, 0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }}
          บาท
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { onUpdated, reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import projectService from "./project-service";
import { useUtil } from "../../services/useUtil";
import useProjects from "./useProject";
import { useAuth } from "../../services/auth-middleware";

export default {
  props: {
    foundationProjectUUIDProp: {
      type: String,
    },
    fdnOwnerProjectProp: {
      type: String,
    },
  },
  setup(props) {
    const valid = ref(false);
    const { validators } = useValidation();
    const showForm = ref(false);
    const use_auth = useAuth();

    const { generateFiveDigitsUUID } = useUtil();

    const { financials, getProjectFinancial } = useProjects();
    getProjectFinancial(props.foundationProjectUUIDProp);

    const showAlert = ref(false);
    const responseMessage = ref("");
    const checkSuccess = ref(false);
    const checkError = ref(false);

    const projectFinancialFormBody = reactive({
      fdnProjectUUID: props.foundationProjectUUIDProp,
      financialPlanUUID: generateFiveDigitsUUID(),
      detail: "",
      quantity: "",
      amount: 0,
    });

    const submitProjectFinancial = () => {
      projectService
        .updateProjectFinancial(projectFinancialFormBody)
        .then(() => {
          financials.value.push({ ...projectFinancialFormBody });
          responseMessage.value = "Upload financial plan successfully"
          checkSuccess.value = true;
          checkError.value = false;
          showAlert.value = true;
          Object.keys(projectFinancialFormBody).forEach((i) => (projectFinancialFormBody[i] = null));
          projectFinancialFormBody.financialPlanUUID = generateFiveDigitsUUID();
          projectFinancialFormBody.fdnProjectUUID = props.foundationProjectUUIDProp;
        })
        .catch(() => {
          responseMessage.value = "Fail to upload financial plan, please try again later"
          checkError.value = true;
          showAlert.value = true;
        });
    };

    return { valid, validators, showAlert, checkSuccess, checkError, projectFinancialFormBody, showForm, financials, use_auth, submitProjectFinancial, responseMessage };
  },
};
</script>
