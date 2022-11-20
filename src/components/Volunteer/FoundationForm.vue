<template>
  <div class="mx-[30px] md:mx-[40px] lg:mx-[177px] mt-[60px] lg:mt-[120px] h-auto">
    <h1 class="text-xl lg:text-5xl mb-[40px]">ส่งจิตอาสา</h1>
    <w-form v-model="valid">
      <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="ชื่อกิจกรรม" label-color="black" placeholder=" " v-model="addVolunteerBody.volunteerProjectName" />
      <!-- <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="ชื่อมูลนิธิ"
        label-color="black"
        placeholder=" "
        v-model="addVolunteerBody.foundationName"
      /> -->
      <!-- <label class="text-sm">ที่อยู่</label> -->
      <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="ที่อยู่" label-color="black" placeholder=" " v-model="addVolunteerBody.locationDetail" />
      <div class="flex space-x-[20px] lg:space-x-[30px]">
        <!-- <label class="text-sm">แขวง</label> -->
        <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="แขวง" label-color="black" placeholder=" " v-model="addVolunteerBody.locationSubDistrict" />
        <!-- <label class="text-sm">เขต</label> -->
        <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="เขต" label-color="black" placeholder=" " v-model="addVolunteerBody.locationDistrict" />
      </div>
      <div class="flex space-x-[20px] lg:space-x-[30px]">
        <!-- <label class="text-sm">แขวง</label> -->
        <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="จังหวัด" label-color="black" placeholder=" " v-model="addVolunteerBody.locationProvince" />
        <!-- <label class="text-sm">เขต</label> -->
        <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="number" color="black" label="รหัสไปรษณีย์" label-color="black" placeholder=" " v-model="addVolunteerBody.locationPostalCode" />
      </div>
      <!-- <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="tel"
        color="black"
        label="เบอร์โทรศัพท์"
        label-color="black"
        placeholder=" "
        v-model="addVolunteerBody.tel"
      /> -->
      <div class="flex space-x-[20px] lg:space-x-[30px]">
        <!-- <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="email"
          color="black"
          label="อีเมล"
          label-color="black"
          placeholder=" "
          v-model="addVolunteerBody.email"
        /> -->

        <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="number" color="black" label="จำนวนจิตอาสา" label-color="black" placeholder=" " v-model="addVolunteerBody.peopleNeeded" />
      </div>
      <div class="flex space-x-[20px] lg:space-x-[30px]">
        <w-select class="mb-10 lg:text-base md:text-base text-sm" :items="items" label="ประเภทกิจกรรม" label-color="black" placeholder=" " selection-color="grey" color="black" v-model="addVolunteerBody.activityType"> </w-select>
        <w-select class="mb-10 lg:text-base md:text-base text-sm" :items="categories" label="หมวดหมู่" label-color="black" placeholder=" " selection-color="grey" color="black" return-object multiple v-model="addVolunteerBody.targetCategoriesSet">
          <template #item="{ item, selected }">
            <w-icon v-if="selected" class="black">wi-check</w-icon>
            <span v-else></span>
            <div>{{ item.targetCategoriesName }}</div>
          </template>
        </w-select>
      </div>
      <div class="flex space-x-[20px] lg:space-x-[30px]">
        <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="date" color="black" label="วันที่รับสมัคร *ไม่สามารถเลือกวันนี้หรือวันที่เก่ากว่าได้*" label-color="black" placeholder=" " v-model="addVolunteerBody.startDate" />
        <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="date" color="black" label="วันที่ปิดรับสมัคร *ไม่สามารถเลือกวันที่เก่ากว่าวันรับสมัครได้*" label-color="black" placeholder=" " v-model="addVolunteerBody.endDate" />
      </div>
      <div class="flex space-x-[20px] lg:space-x-[30px]">
        <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="date" color="black" label="วันที่เริ่มกิจกรรม *ไม่สามารถเลือกวันนี้หรือวันที่เก่ากว่าได้*" label-color="black" placeholder=" " v-model="addVolunteerBody.activityStartDate" />
        <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="date" color="black" label="วันที่สิ้นสุดกิจกรรม *ไม่สามารถเลือกวันที่เก่ากว่าวันเริ่มกิจกรรมได้*" label-color="black" placeholder=" " v-model="addVolunteerBody.activityEndDate" />
      </div>
      <div class="flex space-x-[30px]">
        <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="คุณสมบัติ" label-color="black" placeholder="ใส่ `,` ขั้นแต่ละุณสมบัติ เช่น คนเก่ง,คนดี" v-model="qualifyBefore" />
        <!-- {{ qualifyFormat }} -->
        <w-input class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="หน้าที่" label-color="black" placeholder="ใส่ `,` ขั้นแต่ละหน้าที่ เช่น ยกของ,ทาสี" v-model="dutyBefore" />
      </div>
      <w-textarea :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" outline rows="9" color="black" bg-color="white" label="รายละเอียดจิตอาสา" label-color="black" placeholder=" " no-autogrow v-model="addVolunteerBody.description" />
      <label class="lg:text-sm md:text-sm text-xs">รูปภาพประกอบ</label>
      <w-input :validators="[validators.limitFileSize]" v-model="fileUpload[0]" @change="fileHandler" type="file" class="w-20 h-20" color="amber" bg-color="amber-light1" :preview="false" outline>เลือกไฟล์</w-input>
      <div class="mt-[30px] bg-white lg:w-[30%] md:w-[40%] w-full">
        <img class="p-[10px]" v-if="url" :src="url" />
      </div>
      <div class="flex justify-center">
      <base-button @click="submitAddVolunteerForm()" class="px-9 mt-[60px] mb-[80px] py-2" buttonLabel="ยืนยัน" :isValid="valid === false" />
    </div>
    </w-form>
    <w-transition-slide left class="fixed right-[30px] top-[80px]">
      <w-alert class="w-[350px]" v-if="showAlert" v-model="showAlert" :success="checkSuccess" :error="checkError" border-right dismiss plain> {{ responseMessage }} </w-alert>
    </w-transition-slide>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import volunteerService from "./volunteer-service.js";
import { useStore } from "vuex";
import { useAuth } from "../../services/auth-middleware";
import { useUtil } from "../../services/useUtil";
import utilService from "../../services/util-service";

export default {
  setup() {
    const valid = ref(false);
    const { validators } = useValidation();
    const store = useStore();
    const store_fdn = store.state.fdn.fdn_uuid;
    // const store_fdn = store.state.fdn.fdn_uuid.UUID;

    // console.log(`From FoundationForm ${store_fdn}`)

    const items = ref([{ label: "Online" }, { label: "On-site" }]);
    const categories = ref([
    { targetCategoriesNameEn:"medical", targetCategoriesName: "การแพทย์", targetCategoriesID: "1" },
      { targetCategoriesNameEn:"education", targetCategoriesName: "การศึกษา", targetCategoriesID: "2" },
      { targetCategoriesNameEn:"child", targetCategoriesName: "เด็กและสตรี", targetCategoriesID: "3" },
      { targetCategoriesNameEn:"disaster", targetCategoriesName: "บรรเทาสาธารณะภัย", targetCategoriesID: "4" },
      { targetCategoriesNameEn:"handicapped", targetCategoriesName: "ผู้พิการ", targetCategoriesID: "5" },
      { targetCategoriesNameEn:"elder", targetCategoriesName: "ผู้สูงอายุ", targetCategoriesID: "6" },
      { targetCategoriesNameEn:"valley", targetCategoriesName: "พัฒนาชุมชน", targetCategoriesID: "7" },
      { targetCategoriesNameEn:"art", targetCategoriesName: "ศิลปะและวัฒนธรรม", targetCategoriesID: "8" },
      { targetCategoriesNameEn:"animal", targetCategoriesName: "สัตว์", targetCategoriesID: "9" },
      { targetCategoriesNameEn:"environment", targetCategoriesName: "สิ่งแวดล้อม", targetCategoriesID: "10" },
      { targetCategoriesNameEn:"human", targetCategoriesName: "สิทธิมนุษยชน", targetCategoriesID: "11" },
    ]);

    // const foundationName =
    const qualifyBefore = ref("");
    const qualifyFormat = computed(() => {
      return `<li> ${qualifyBefore.value.replace(/,/g, "</li><li>")} </li>`;
    });

    const dutyBefore = ref("");
    const dutyFormat = computed(() => {
      return `<li> ${dutyBefore.value.replace(/,/g, "</li><li>")} </li>`;
    });

    const { generateFiveDigitsUUID } = useUtil();
    const addVolunteerBody = reactive({
      volunteerProjectsUUID: generateFiveDigitsUUID(),
      volunteerProjectName: "",
      peopleNeeded: 0,
      description: "",
      activityType: "",
      startDate: "",
      endDate: "",
      activityStartDate: "",
      activityEndDate: "",
      locationDetail: "",
      locationDistrict: "",
      locationSubDistrict: "",
      locationProvince: "",
      locationPostalCode: "",
      targetCategoriesSet: [],
      duty: dutyFormat,
      qualify: qualifyFormat,
      status: "OPEN",
      foundationUUID: store_fdn.UUID,
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

    const submitAddVolunteerForm = () => {
      volunteerService
        .addVolunteer(addVolunteerBody)
        .then(() => {
          const bodyFormData = new FormData();
          bodyFormData.append("file", fileUpload[0]);
          bodyFormData.append("type", "volunteer");
          bodyFormData.append("userName", store.state.auth.user.userName);
          bodyFormData.append("uuid", addVolunteerBody.volunteerProjectsUUID);
          utilService.uploadImage(bodyFormData).then(() => {
            responseMessage.value = "Upload volunteer successfully"
            checkSuccess.value = true;
            showAlert.value = true;
          });
        })
        .catch(() => {
          responseMessage.value = "Fail to upload volunteer, please try again later"
          checkError.value = true;
          showAlert.value = true;
        });
    };

    return {
      validators,
      valid,
      items,
      categories,
      addVolunteerBody,
      submitAddVolunteerForm,
      qualifyBefore,
      dutyBefore,
      qualifyFormat,
      dutyFormat,
      showAlert,
      checkSuccess,
      checkError,
      fileUpload,
      fileHandler,
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
