<template>
  <div
    class="mx-[30px] md:mx-[40px] lg:mx-[177px] mt-[60px] lg:mt-[120px] h-auto"
  >
    <h1 class="text-xl lg:text-5xl mb-[40px]">ส่งจิตอาสา</h1>
    <w-form v-model="valid">
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="ชื่อกิจกรรม"
        label-color="black"
        placeholder=" "
        v-model="addVolunteerBody.volunteerProjectName"
      />
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
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="ที่อยู่"
        label-color="black"
        placeholder=" "
        v-model="addVolunteerBody.locationDetail"
      />
      <div class="flex space-x-[20px] lg:space-x-[30px]">
        <!-- <label class="text-sm">แขวง</label> -->
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="text"
          color="black"
          label="แขวง"
          label-color="black"
          placeholder=" "
          v-model="addVolunteerBody.locationSubDistrict"
        />
        <!-- <label class="text-sm">เขต</label> -->
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="text"
          color="black"
          label="เขต"
          label-color="black"
          placeholder=" "
          v-model="addVolunteerBody.locationDistrict"
        />
      </div>
      <div class="flex space-x-[20px] lg:space-x-[30px]">
        <!-- <label class="text-sm">แขวง</label> -->
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="text"
          color="black"
          label="จังหวัด"
          label-color="black"
          placeholder=" "
          v-model="addVolunteerBody.locationProvince"
        />
        <!-- <label class="text-sm">เขต</label> -->
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="number"
          color="black"
          label="รหัสไปรษณีย์"
          label-color="black"
          placeholder=" "
          v-model="addVolunteerBody.locationPostalCode"
        />
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

        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="number"
          color="black"
          label="จำนวนจิตอาสา"
          label-color="black"
          placeholder=" "
          v-model="addVolunteerBody.peopleNeeded"
        />
      </div>
      <div class="flex space-x-[20px] lg:space-x-[30px]">
        <w-select
          class="mb-10 lg:text-base md:text-base text-sm"
          :items="items"
          label="ประเภทกิจกรรม"
          label-color="black"
          placeholder=" "
          selection-color="grey"
          color="black"
          v-model="addVolunteerBody.activityType"
        >
        </w-select>
        <w-select
          class="mb-10 lg:text-base md:text-base text-sm"
          :items="categories"
          label="หมวดหมู่"
          label-color="black"
          placeholder=" "
          selection-color="grey"
          color="black"
          return-object
          multiple
          v-model="addVolunteerBody.targetCategoriesSet"
        >
          <template #item="{ item, selected }">
            <w-icon v-if="selected" class="black">wi-check</w-icon>
            <span v-else></span>
            <div>{{ item.targetCategoriesName }}</div>
          </template>
        </w-select>
      </div>
      <div class="flex space-x-[20px] lg:space-x-[30px]">
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="date"
          color="black"
          label="วันที่เริ่มกิจกรรม"
          label-color="black"
          placeholder=" "
          v-model="addVolunteerBody.activityStartDate"
        />
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="date"
          color="black"
          label="วันที่สิ้นสุดกิจกรรม"
          label-color="black"
          placeholder=" "
          v-model="addVolunteerBody.activityEndDate"
        />
        <!-- <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="time"
          color="black"
          label="เวลา"
          label-color="black"
          placeholder=" "
        /> -->
      </div>
      <div class="flex space-x-[30px]">
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="คุณสมบัติ"
        label-color="black"
        placeholder="ใส่ `,` ขั้นแต่ละุณสมบัติ เช่น คนเก่ง,คนดี"
        v-model="qualifyBefore"
      />
      <!-- {{ qualifyFormat }} -->
      <w-input
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="หน้าที่"
        label-color="black"
        placeholder="ใส่ `,` ขั้นแต่ละหน้าที่ เช่น ยกของ,ทาสี"
        v-model="dutyBefore"
      />
    </div>
<!-- 
<div id="room_fileds">
    <div>
     <div class='label'>Room 1:</div>
     <div class="content">
         <w-input type="text" style="width:48px;" name="width[]" value=""></w-input>
         <w-input type="text" style="width:48px;" name="length[]" value=""></w-input>
     </div>
    </div>
 </div> -->
      <w-textarea
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        outline
        rows="9"
        color="black"
        bg-color="white"
        label="รายละเอียดจิตอาสา"
        label-color="black"
        placeholder=" "
        no-autogrow
        v-model="addVolunteerBody.description"
      />
      <label class="lg:text-sm md:text-sm text-xs">รูปภาพประกอบ</label>
      <!-- <w-input
        :validators="[validators.required]"
        class="mb-10 mt-2 w-20 h-10 pl-2 pb-2 lg:text-base md:text-base text-sm bg-namjaigreen rounded-md"
        type="file"
        color="namjai-green"
        label="เลือกไฟล์"
        label-color="white"
        :preview="false"
      /> -->
      <w-input
        type="file"
        class="w-20 h-20"
        color="amber"
        bg-color="amber-light1"
        :preview="false"
        outline
        >เลือกไฟล์</w-input
      >
      <base-button
        @click="submitAddVolunteerForm"
        class="w-[140px] mx-auto mt-[60px] mb-8 py-3"
        buttonLabel="ยืนยัน"
        :isValid="valid === false"
      />
      {{ addVolunteerBody }}
    </w-form>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import volunteerService from "./volunteer-service.js";
import { useStore } from "vuex";
import { useAuth } from "../../services/auth-middleware";
import { useUtil } from "../../services/useUtil";


export default {
  setup() {
    const valid = ref(null);
    const { validators } = useValidation();
    const store = useStore();
    const store_fdn = store.state.fdn.fdn_uuid;
    // const store_fdn = store.state.fdn.fdn_uuid.UUID;
    

    // console.log(`From FoundationForm ${store_fdn}`)

    const items = ref([
      { label: "Online", },
      { label: "On-site" },
    ]);
    const categories = ref([
      { targetCategoriesName: "โควิด-19", targetCategoriesID: 1 },
      { targetCategoriesName: "เด็กและเยาวชน", targetCategoriesID: 2 },
      { targetCategoriesName: "ผู้สูงอายุ", targetCategoriesID: 3 },
      { targetCategoriesName: "ผู้พิการและผู้ป่วย", targetCategoriesID: 4 },
      { targetCategoriesName: "กลุ่มคนเปราะบาง", targetCategoriesID: 5 },
      { targetCategoriesName: "สัตว์", targetCategoriesID: 6 },
      { targetCategoriesName: "สิ่งแวดล้อม", targetCategoriesID: 7 },
      { targetCategoriesName: "ภัยพิบัติ", targetCategoriesID: 8 },
    ]);

    // const foundationName =
    const qualifyBefore = ref("");
    const qualifyFormat = computed(() => {
      return `<li> ${qualifyBefore.value.replace(/,/g, '</li><li>')} </li>`
    });

    const dutyBefore = ref("");
    const dutyFormat = computed(() => {
      return `<li> ${dutyBefore.value.replace(/,/g, '</li><li>')} </li>`
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
      qualify: qualifyFormat,
      duty: dutyFormat,
      foundationUUID: store_fdn.UUID,
      userUUID: null,
      
    });

    const submitAddVolunteerForm = () => {
      volunteerService.addVolunteer(addVolunteerBody);
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
    };
  },
};
</script>

<style scoped>
.namjai-green--bg {
  background-color: #00715d;
}
</style>
