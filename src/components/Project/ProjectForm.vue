<template>
  <div
    class="mx-[30px] md:mx-[40px] lg:mx-[177px] mt-[60px] lg:mt-[120px] h-auto"
  >
    <h1 class="text-2xl lg:text-5xl mb-[40px]">ส่งโครงการ</h1>
    <div class="lg:mx-[183px] lg:mt-[60px]">
      {{ fdnProjectBody }}
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
          v-model="fdnProjectBody.foundationProjectName"
        />
        <div class="flex space-x-[20px] lg:space-x-[30px]">
        <w-select
          class="mb-10 lg:text-base md:text-base text-sm"
          :items="categories"
          label="ประเภทกิจกรรม"
          label-color="black"
          placeholder=" "
          selection-color="grey"
          color="black"
          return-object
          multiple
          v-model="fdnProjectBody.categories"
        >
          <template #item="{ item, selected }">
            <w-icon v-if="selected" class="black">wi-check</w-icon>
            <span v-else></span>
            <div>{{ item.label }}</div>
          </template>
        </w-select>
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
        </div>
        <div class="flex space-x-[20px] lg:space-x-[30px]">
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
        </div>
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
        v-model="fdnProjectBody.placeAndProjectDate"
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
        v-model="fdnProjectBody.projectDetail"
      />
      <label class="lg:text-sm md:text-sm text-xs">รูปภาพประกอบ</label>
      <w-input
        type="file"
        class="w-20 h-20"
        color="amber"
        bg-color="amber-light1"
        :preview="false"
        outline
        >เลือกไฟล์</w-input
      >
      <label class="lg:text-sm md:text-sm text-xs">คิวอาร์โค้ดพร้อมเพย์</label>
      <w-input
        type="file"
        class="w-20 h-20"
        :validators="[validators.required]"
        color="amber"
        bg-color="amber-light1"
        :preview="false"
        outline
        >เลือกไฟล์</w-input
      >
        <base-button
          class="w-[140px] mx-auto mt-[60px] mb-8"
          buttonLabel="ยืนยัน"
          :isValid="valid === false"
        />
      </w-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useValidation } from "../Account/validator";

export default {
  setup() {
    const valid = ref(null);
    const { validators } = useValidation();
    const categories = ref([
      { label: "โควิด-19", id: 1 },
      { label: "เด็กและเยาวชน", id: 2 },
      { label: "ผู้สูงอายุ", id: 3 },
      { label: "ผู้พิการและผู้ป่วย", id: 4 },
      { label: "กลุ่มคนเปราะบาง", id: 5 },
      { label: "สัตว์", id: 6 },
      { label: "สิ่งแวดล้อม", id: 7 },
      { label: "ภัยพิบัติ", id: 8 },
    ]);
    const fdnProjectBody = reactive({
      responsiblePerson: "",
      foundationProjectName: "",
      categories: "",
      goal: "",
      startDate: "",
      endDate: "",
      placeAndProjectDate: "",
      projectDetail: "",
    })
    return { validators, valid, categories, fdnProjectBody };
  },
};
</script>

<style scoped>
.namjai-green--bg {
  background-color: #00715d;
}
</style>
