<template>
  <div class="lg:mt-[120px] mt-[60px] lg:mx-[177px] md:mx-[40px] mx-[30px]">
    <h1 class="lg:text-5xl text-2xl my-[40px]">อัพเดตความคืบหน้า</h1>
    <w-form v-model="valid">
      <div class="flex space-x-[30px]">
        <w-input v-model="projectProgressFormBody.title" :validators="[validators.required]" class="mb-[30px] lg:text-base md:text-base text-sm" type="text" color="black" label="หัวข้อความคืบหน้า" label-color="black" placeholder=" " />
        <w-input v-model="projectProgressFormBody.proceedDate" :validators="[validators.required]" class="mb-[30px] lg:text-base md:text-base text-sm" type="date" color="black" label="วันที่" label-color="black" placeholder="วันที่นำเงินไปใช้" />
      </div>
      <w-textarea v-model="projectProgressFormBody.detail" :validators="[validators.required]" class="mb-[30px] lg:text-base md:text-base text-sm" outline rows="9" color="black" bg-color="white" label="เนื้อหา" label-color="black" placeholder=" " no-autogrow />
      <label class="lg:text-sm md:text-sm text-xs">รูปภาพประกอบ</label>
      <w-input :validators="[validators.limitFileSize]" v-model="fileUpload[0]" @change="fileHandler" type="file" class="mt-[10px] lg:mt-[5px] w-20" label-color="white" color="white" bg-color="success-dark2" :preview="false" outline>เลือกไฟล์</w-input>
      <div class="mt-[30px] bg-white lg:w-[30%] md:w-[40%] w-full">
        <img class="p-[10px]" v-if="url" :src="url" />
      </div>
      <div class="flex justify-center">
        <base-button @click="submitProjectProgress(progressUUID)" :isValid="valid === false" class="py-2 px-9 mt-[60px]" buttonLabel="ยืนยัน"></base-button>
      </div>
    </w-form>
    <w-transition-slide left class="fixed right-[30px] top-[80px]">
      <w-alert class="w-[350px]" v-if="showAlert" v-model="showAlert" :success="checkSuccess" :error="checkError" border-right dismiss plain> {{ responseMessage }} </w-alert>
    </w-transition-slide>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import BaseButton from "../_Bases/BaseButton.vue";
import projectService from "./project-service";
import { useUtil } from "../../services/useUtil";
import { useRoute, useRouter } from "vue-router";
import utilService from "../../services/util-service";
import { useStore } from "vuex";

export default {
  components: { BaseButton },
  setup() {
    const valid = ref(false);
    const { validators } = useValidation();
    const route = useRoute();
    const store = useStore();
    const router = useRouter();

    const { generateFiveDigitsUUID } = useUtil();
    const projectProgressFormBody = reactive({
      foundationProjectProgressUUID: generateFiveDigitsUUID(),
      fdnProjectUUID: route.params.id,
      proceedDate: "",
      title: "",
      detail: "",
    });

    const showAlert = ref(false);
    const responseMessage = ref("");
    const checkSuccess = ref(false);
    const checkError = ref(false);

    const fileUpload = ref([]);
    const url = ref("");
    const fileHandler = (event) => {
      fileUpload[0] = event.target.files[0];
      url.value = URL.createObjectURL(fileUpload[0]);
    };

    const submitProjectProgress = () => {
      projectService
        .updateProjectProgress(projectProgressFormBody)
        .then((response) => {
          if (response.status === 200) {
            const bodyFormData = new FormData();
            bodyFormData.append("file", fileUpload[0]);
            bodyFormData.append("type", "progress");
            bodyFormData.append("userName", store.state.auth.user.userName);
            bodyFormData.append("uuid", `${route.params.id}:${projectProgressFormBody.foundationProjectProgressUUID}`);
            utilService.uploadImage(bodyFormData).then(() => {
              responseMessage.value = "Upload progression successfully";
              checkSuccess.value = true;
              showAlert.value = true;
              setTimeout(() => router.push(`/project/${projectProgressFormBody.fdnProjectUUID}`), 1000);
            });
          }
          responseMessage.value = "Upload progression successfully";
          checkSuccess.value = true;
          showAlert.value = true;
          setTimeout(() => router.push(`/project/${projectProgressFormBody.fdnProjectUUID}`), 1000);
        })
        .catch(() => {
          responseMessage.value = "Fail to upload progression, please try again later";
          checkError.value = true;
          showAlert.value = true;
        });
    };
    return { valid, validators, projectProgressFormBody, submitProjectProgress, showAlert, checkSuccess, checkError, fileHandler, fileUpload, url, responseMessage };
  },
};
</script>
