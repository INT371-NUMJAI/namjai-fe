<template>
  <div class="mx-[30px] md:mx-[40px] lg:mx-[177px] mt-[60px] lg:mt-[120px] h-auto">
    <h1 class="text-2xl lg:text-5xl mb-[40px]">ส่งโครงการ</h1>
    <div class="lg:mx-[183px] lg:mt-[60px]">
      <w-form v-model="valid">
        <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="ชื่อผู้รับผิดชอบโครงการ" label-color="black" placeholder=" " v-model="fdnProjectBody.responsiblePerson" />
        <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="ชื่อโครงการ" label-color="black" placeholder=" " v-model="fdnProjectBody.fdnProjectName" />
        <div class="flex space-x-[20px] lg:space-x-[30px]">
          <w-select :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm lg:w-[300px]" :items="categories" label="ประเภทโครงการ" label-color="black" placeholder=" " selection-color="grey" color="black" return-object multiple v-model="fdnProjectBody.targetCategoriesSet">
            <template #item="{ item, selected }">
              <w-icon v-if="selected" class="black">wi-check</w-icon>
              <span v-else></span>
              <div>{{ item.targetCategoriesName }}</div>
            </template>
          </w-select>
          <div>
            <p v-for="fdnCat in fdnProjectBody.targetCategoriesSet" :key="fdnCat.targetCategoriesID" class="text-namjaired">
              {{ fdnCat.targetCategoriesName }}
            </p>
          </div>
        </div>
        <div class="flex space-x-[20px] lg:space-x-[30px]">
          <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="number" color="black" label="ค่าใช้จ่าย" label-color="black" placeholder=" " v-model="fdnProjectBody.goal" />
          <w-select class="mb-10 lg:text-base md:text-base text-sm" :items="status" :validators="[validators.required]" label="สถานะโครงการ" label-color="black" placeholder=" " selection-color="grey" color="black" v-model="fdnProjectBody.status"> </w-select>
        </div>
        <div class="flex space-x-[20px] lg:space-x-[30px]">
          <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="date" color="black" label="วันที่เริ่มโครงการ" label-color="black" placeholder=" " v-model="fdnProjectBody.startDate" />
          <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="date" color="black" label="วันที่สิ้นสุดโครงการ" label-color="black" placeholder=" " v-model="fdnProjectBody.endDate" />
        </div>
        <w-textarea :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" outline rows="9" color="black" bg-color="white" label="สถานที่และเวลาดำเนินโครงการ" label-color="black" placeholder=" " no-autogrow v-model="fdnProjectBody.fdnProjectDetailPlace" />
        <w-textarea :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" outline rows="9" color="black" bg-color="white" label="รายละเอียดโครงการ" label-color="black" placeholder=" " no-autogrow v-model="fdnProjectBody.fdnProjectDetail" />
        <label class="lg:text-sm md:text-sm text-xs">รูปภาพประกอบ</label>
        <w-input :validators="[validators.limitFileSize]" v-model="fileUpload2[0]" @change="fileHandler2" type="file" class="w-20 h-20" color="amber" bg-color="amber-light1" :preview="false" outline>เลือกไฟล์</w-input>
        <div class="mb-[30px] bg-white lg:w-[30%] md:w-[40%] w-full">
          <img class="p-[10px]" v-if="url" :src="url" />
        </div>
        <!-- {{ fdnProjectBody }}
        {{ fileUpload }} -->
        <base-button class="px-9 py-2 mx-auto mt-[30px] mb-[80px]" buttonLabel="ยืนยัน" :isValid="valid === false" @click="submitProjectForm" />
      </w-form>
    </div>
    <w-transition-slide left class="fixed right-[30px] top-[80px]">
      <w-alert class="w-[350px]" v-if="showAlert" v-model="showAlert" :success="checkSuccess" :error="checkError" border-right dismiss plain>{{ responseMessage }} </w-alert>
    </w-transition-slide>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import { useStore } from "vuex";
import foundationProjectService from "./project-service";
import { useUtil } from "../../services/useUtil";
import { useRouter } from "vue-router";
import utilService from "../../services/util-service";

export default {
  setup() {
    const valid = ref(null);
    const { validators } = useValidation();
    const store = useStore();

    const categories = reactive([
      { targetCategoriesName: "การแพทย์", targetCategoriesID: "1" },
      { targetCategoriesName: "การศึกษา", targetCategoriesID: "2" },
      { targetCategoriesName: "เด็กและสตรี", targetCategoriesID: "3" },
      { targetCategoriesName: "บรรเทาสาธารณะภัย", targetCategoriesID: "4" },
      { targetCategoriesName: "ผู้พิการ", targetCategoriesID: "5" },
      { targetCategoriesName: "ผู้สูงอายุ", targetCategoriesID: "6" },
      { targetCategoriesName: "พัฒนาชุมชน", targetCategoriesID: "7" },
      { targetCategoriesName: "ศิลปะและวัฒนธรรม", targetCategoriesID: "8" },
      { targetCategoriesName: "สัตว์", targetCategoriesID: "9" },
      { targetCategoriesName: "สิ่งแวดล้อม", targetCategoriesID: "10" },
      { targetCategoriesName: "สิทธิมนุษยชน", targetCategoriesID: "11" },
    ]);
    const status = reactive([{ label: "OPEN" }, { label: "NOT_SHOWING" }, { label: "CLOSED" }]);

    const showAlert = ref(false);
    const responseMessage = ref("");
    const checkSuccess = ref(false);
    const checkError = ref(false);

    const { generateFiveDigitsUUID } = useUtil();
    // onMounted(() => (foundationUUID.value = store.state.fdn.UUID));
    const fdnProjectBody = reactive({
      fdnUUID: store.state.fdn.fdn_uuid.UUID,
      fdnProjectUUID: generateFiveDigitsUUID(),
      fdnProjectName: "",
      startDate: "",
      endDate: "",
      goal: 0,
      fdnProjectDetail: "",
      fdnProjectDetailPlace: "",
      targetCategoriesSet: [],
      responsiblePerson: "",
      status: "",
    });

    const fileUpload = ref([]);
    const fileHandler = (event) => {
      fileUpload[0] = event.target.files[0];
      // console.log(input);
      // fileUpload = input;
    };

    const fileUpload2 = ref([]);
    const url = ref("");
    const fileHandler2 = (event) => {
      fileUpload2[0] = event.target.files[0];
      url.value = URL.createObjectURL(fileUpload2[0]);
      // console.log(input);
      // fileUpload = input;
    };

    const foundationName = store.state.auth.user.userName;

    const router = useRouter();

    const submitProjectForm = () => {
      foundationProjectService
        .addProject(fdnProjectBody)
        .then((response) => {
          if (response.status === 200) {
            // router.push("/projects");
            const bodyFormData2 = new FormData();
            bodyFormData2.append("file", fileUpload2[0]);
            bodyFormData2.append("type", "project");
            bodyFormData2.append("userName", store.state.auth.user.userName);
            bodyFormData2.append("uuid", fdnProjectBody.fdnProjectUUID);
            utilService.uploadImage(bodyFormData2).then(() => {
              responseMessage.value = "Upload project successfully"
              checkSuccess.value = true;
              showAlert.value = true;
            });
          }
        })
        .catch(() => {
          responseMessage.value = "Fail to upload project, please try again later"
          checkError.value = true;
          showAlert.value = true;
        });
    };

    console.log(store.state.auth.user.userName);

    return {
      validators,
      valid,
      categories,
      fdnProjectBody,
      submitProjectForm,
      fileUpload,
      fileHandler,
      fileUpload2,
      fileHandler2,
      status,
      showAlert,
      checkSuccess,
      checkError,
      url,
      responseMessage,
    };
  },
};
</script>

<style scoped>
.namjai-green--bg {
  background-color: #00715d;
}
</style>
