<template>
  <div
    class="mx-[30px] md:mx-[40px] lg:mx-[177px] mt-[60px] lg:mt-[120px] h-auto"
  >
    <h1 class="text-2xl lg:text-5xl mb-[40px]">ส่งโครงการ</h1>
    <div class="lg:mx-[183px] lg:mt-[60px]">
      <w-form v-model="valid">
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="text"
          color="black"
          label="ชื่อผู้รับผิดชอบโครงการ"
          label-color="black"
          placeholder=" "
          v-model="fdnProjectBody.responsiblePerson"
        />
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="text"
          color="black"
          label="ชื่อโครงการ"
          label-color="black"
          placeholder=" "
          v-model="fdnProjectBody.fdnProjectName"
        />
        <div class="flex space-x-[20px] lg:space-x-[30px]">
          <w-select
            class="mb-10 lg:text-base md:text-base text-sm lg:w-[300px]"
            :items="categories"
            label="ประเภทกิจกรรม"
            label-color="black"
            placeholder=" "
            selection-color="grey"
            color="black"
            return-object
            multiple
            v-model="fdnProjectBody.targetCategoriesSet"
          >
            <template #item="{ item, selected }">
              <w-icon v-if="selected" class="black">wi-check</w-icon>
              <span v-else></span>
              <div>{{ item.targetCategoriesName }}</div>
            </template>
          </w-select>
          <div>
            <p
              v-for="fdnCat in fdnProjectBody.targetCategoriesSet"
              :key="fdnCat.targetCategoriesID"
              class="text-namjaired"
            >
              {{ fdnCat.targetCategoriesName }}
            </p>
          </div>
        </div>
        <div class="flex space-x-[20px] lg:space-x-[30px]">
          <w-input
            :validators="[validators.required]"
            class="mb-10 lg:text-base md:text-base text-sm"
            type="number"
            color="black"
            label="ค่าใช้จ่าย"
            label-color="black"
            placeholder=" "
            v-model="fdnProjectBody.goal"
          />
          <w-input
            :validators="[validators.required]"
            class="mb-10 lg:text-base md:text-base text-sm"
            type="date"
            color="black"
            label="วันที่เริ่มโครงการ"
            label-color="black"
            placeholder=" "
            v-model="fdnProjectBody.startDate"
          />
        </div>
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="date"
          color="black"
          label="วันที่สิ้นสุดโครงการ"
          label-color="black"
          placeholder=" "
          v-model="fdnProjectBody.endDate"
        />
        <w-textarea
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          outline
          rows="9"
          color="black"
          bg-color="white"
          label="สถานที่และเวลาดำเนินโครงการ"
          label-color="black"
          placeholder=" "
          no-autogrow
          v-model="fdnProjectBody.fdnProjectDetailPlace"
        />
        <w-textarea
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          outline
          rows="9"
          color="black"
          bg-color="white"
          label="รายละเอียดโครงการ"
          label-color="black"
          placeholder=" "
          no-autogrow
          v-model="fdnProjectBody.fdnProjectDetail"
        />
        <label class="lg:text-sm md:text-sm text-xs">รูปภาพประกอบ</label>
        <w-input
          v-model="fileUpload2[0]"
          @change="fileHandler2"
          type="file"
          class="w-20 h-20"
          color="amber"
          bg-color="amber-light1"
          :preview="false"
          outline
          >เลือกไฟล์</w-input
        >
        <label class="lg:text-sm md:text-sm text-xs"
          >คิวอาร์โค้ดพร้อมเพย์</label
        >
        <w-input
          v-model="fileUpload[0]"
          @change="fileHandler"
          type="file"
          class="w-20 h-20"
          color="amber"
          bg-color="amber-light1"
          :preview="false"
          outline
          >เลือกไฟล์</w-input
        >
        {{ fdnProjectBody }}
        {{ fileUpload }}
        <base-button
          class="w-[140px] mx-auto mt-[60px] mb-8"
          buttonLabel="ยืนยัน"
          :isValid="valid === false"
          @click="submitProjectForm"
        />
      </w-form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { onMounted, reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import { useStore } from "vuex";
import foundationProjectService from "./project-service";

export default {
  setup() {
    const valid = ref(null);
    const { validators } = useValidation();

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

    const foundationUUID = JSON.parse(localStorage.getItem("uuid"));
    // onMounted(() => (foundationUUID.value = store.state.fdn.UUID));
    const fdnProjectBody = reactive({
      fdnUUID: foundationUUID.UUID,
      fdnProjectUUID: uuidv4(),
      fdnProjectName: "",
      startDate: "",
      endDate: "",
      goal: 0,
      fdnProjectDetail: "",
      fdnProjectDetailPlace: "",
      targetCategoriesSet: [],
      responsiblePerson: "",
    });

    const fileUpload = ref([]);
    const fileHandler = (event) => {
      fileUpload[0] = event.target.files[0];
      // console.log(input);
      // fileUpload = input;
    };

    const fileUpload2 = ref([]);
    const fileHandler2 = (event) => {
      fileUpload2[0] = event.target.files[0];
      // console.log(input);
      // fileUpload = input;
    }; 

    const store = useStore();
    const foundationName = store.state.auth.user.userName;

    const submitProjectForm = () => {
      foundationProjectService.addProject(fdnProjectBody);

      const bodyFormData = new FormData();
      bodyFormData.append("file", fileUpload[0]);
      bodyFormData.append("fdnName", foundationName);
      bodyFormData.append("fdnUUID", foundationUUID.UUID);
      foundationProjectService.uploadQRCodePicture(bodyFormData);

      const bodyFormData2 = new FormData();
      bodyFormData2.append("file", fileUpload2[0]);
      bodyFormData2.append("fdnName", foundationName);
      bodyFormData2.append("fdnProjectUUID", fdnProjectBody.fdnProjectUUID); 
      foundationProjectService.uploadPicturePathFoundationProject(bodyFormData2);

      // console.log(bodyFormData);
    };

    return {
      validators,
      valid,
      categories,
      fdnProjectBody,
      submitProjectForm,
      fileUpload,
      fileHandler,
      fileUpload2,
      fileHandler2
    };
  },
};
</script>

<style scoped>
.namjai-green--bg {
  background-color: #00715d;
}
</style>
