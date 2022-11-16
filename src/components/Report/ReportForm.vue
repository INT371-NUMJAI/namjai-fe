<template>
  <div class="mx-[30px] md:mx-[40px] lg:mx-[177px] mt-[60px] lg:mt-[120px] h-auto">
    <h1 class="text-2xl lg:text-5xl">ร้องเรียน</h1>
    <div class="mt-4 mb-[40px]">
      <div class="w-16 border-4 border-t border-namjaired"></div>
    </div>
    <div class="lg:mx-[183px] lg:mt-[60px]">
      <w-form v-model="valid">
        <w-input class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="อีเมลที่สามารถติดต่อได้" label-color="black" placeholder=" " v-model="reportBody.reporter" />
        <div class="flex space-x-[20px] lg:space-x-[30px]">
          <w-select v-model="reportBody.issueType" class="mb-10 lg:text-base md:text-base text-sm lg:w-[300px]" :items="categories" label="หัวข้อ" label-color="black" placeholder=" " selection-color="grey" color="black">
            <template #item="{ item, selected }">
              <w-icon v-if="selected" class="black">wi-check</w-icon>
              <span v-else></span>
              <div>{{ item.label }}</div>
            </template>
          </w-select>
        </div>
        <w-textarea v-model="reportBody.issueDetail" :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" outline rows="9" color="black" bg-color="white" label="รายละเอียด" label-color="black" placeholder=" " no-autogrow />
        <base-button class="w-[140px] mx-auto mt-[60px] mb-[60px] py-2" buttonLabel="ยืนยัน" :isValid="valid === false" @click="submitReportForm" />
      </w-form>
    </div>
    <w-transition-slide left class="fixed right-[30px] top-[80px]">
      <w-alert class="w-[350px]" v-if="showAlert" v-model="showAlert" :success="checkSuccess" :error="checkError" border-right dismiss plain> {{ responseMessage }} </w-alert>
    </w-transition-slide>
  </div>
</template>

<script>
import { useValidation } from "../Account/validator";
import { ref, reactive } from "vue";
import reportService from "./report-service";

export default {
  setup() {
    const valid = ref(null);
    const { validators } = useValidation();

    const categories = reactive([
      { label: "มูลนิธิ", value: "FDN_PROBLEM" },
      { label: "ผู้ใช้", value: "USER_PROBLEM" },
      { label: "การใช้งาน", value: "WEB_PROBLEM" },
      { label: "อื่น ๆ", value: "OTHERS" },
    ]);

    const showAlert = ref(false);
    const responseMessage = ref("");
    const checkSuccess = ref(false);
    const checkError = ref(false);

    const reportBody = reactive({
      issueType: "",
      issueDetail: "",
      reporter: "",
    });

    const submitReportForm = () => {
      reportService
        .addReport(reportBody)
        .then(() => {
            responseMessage.value = "Send report successfully"
            checkSuccess.value = true;
            showAlert.value = true;
        })
        .catch(() => {
          responseMessage.value = "Fail to send report, please try again later"
          checkError.value = true;
          showAlert.value = true;
        });
    };

    return { valid, categories, validators, reportBody, showAlert, checkSuccess, checkError, submitReportForm, responseMessage };
  },
};
</script>

<style scoped>
.namjai-green--bg {
  background-color: #00715d;
}
</style>
