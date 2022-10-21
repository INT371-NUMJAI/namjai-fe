<template>
  <div
    class="mx-[30px] md:mx-[40px] lg:mx-[177px] mt-[60px] lg:mt-[120px] h-auto"
  >
    {{ addVolunteerBody }}
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
          return-object
          v-model="addVolunteerBody.activityType"
        >
          <template #item="{ item, selected }">
            <w-icon v-if="selected" class="black">wi-check</w-icon>
            <span v-else></span>
            <div>{{ item.activityType }}</div>
          </template>
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
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="คุณสมบัติ"
        label-color="black"
        placeholder=" "
        v-model="addVolunteerBody.volunteerProjectQualifies"
      />
      <div id="room_fileds" class="space-x-[30px]">
        <div class="flex content row">
      <input
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="หน้าที่"
        label-color="black"
        placeholder=" "
        v-model="addVolunteerBody.dutyDetail"
      />
      <w-button type="button" id="more_fields" @click="add_fields" value="Add More">+</w-button>
    </div>
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
        @click="addVolunteerBody"
        class="w-[140px] mx-auto mt-[60px] mb-8 py-3"
        buttonLabel="ยืนยัน"
        :isValid="valid === false"
      />
    </w-form>
    

    
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import volunteerService from "./volunteer-service.js";
import { v4 as uuidv4 } from "uuid";

export default {
  setup() {
    const valid = ref(null);
    const { validators } = useValidation();
    const items = ref([
      { activityType: "Online", value: 1 },
      { activityType: "On-site", value: 2 },
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

    const addVolunteerBody = reactive({
      volunteerProjectsUUID: uuidv4(),
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
      volunteerProjectQualifies: [],
      volunteerProjectDuties: [{dutyDetail}],
    });

    const submitAddVolunteerForm = () => {
      volunteerService.addVolunteer(addVolunteerBody);
    };
    
    const add_fields = () => {
    var objTo = document.getElementById('room_fileds')
    var divtest = document.createElement("div");
    divtest.innerHTML = '<div class="content"><input class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="หน้าที่" label-color="black" placeholder=" " v-model="addVolunteerBody.volunteerProjectDuties" /></div>';
    
    objTo.appendChild(divtest)
};
     const parseStringtoObj = () => {
      let result = [...document.querySelectorAll('.row')].map( div => ({text:div.children[0].value, float:div.children[1].value}) )
      console.log(result);
     }
    return {
      validators,
      valid,
      items,
      categories,
      addVolunteerBody,
      submitAddVolunteerForm,
      add_fields,
      parseStringtoObj
    };
  },
};
</script>

<style scoped>
.namjai-green--bg {
  background-color: #00715d;
}
</style>
