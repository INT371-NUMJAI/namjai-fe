<template>
  <div
    class="mx-[30px] md:mx-[40px] lg:mx-[177px] mt-[60px] lg:mt-[120px] h-auto"
  >
    <h1 class="text-xl lg:text-5xl mb-[40px]">ส่งจิตอาสา</h1>
    <w-form v-model="valid">
      <!-- <label class="text-sm">ชื่อกิจกรรม</label> -->
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="ชื่อกิจกรรม"
        label-color="black"
        placeholder=" "
      />
      <!-- <label class="text-sm">ชื่อมูลนิธิ</label> -->
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="ชื่อมูลนิธิ"
        label-color="black"
        placeholder=" "
      />
      <!-- <label class="text-sm">ที่อยู่</label> -->
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="ที่อยู่"
        label-color="black"
        placeholder=" "
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
        />
      </div>
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="tel"
        color="black"
        label="เบอร์โทรศัพท์"
        label-color="black"
        placeholder=" "
      />
      <div class="flex space-x-[20px] lg:space-x-[30px]">
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="email"
          color="black"
          label="อีเมล"
          label-color="black"
          placeholder=" "
        />

        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="number"
          color="black"
          label="จำนวนจิตอาสา"
          label-color="black"
          placeholder=" "
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
        >
          <template #item="{ item, selected }">
            <w-icon v-if="selected" class="black">wi-check</w-icon>
            <span v-else></span>
            <div>{{ item.label }}</div>
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
        >
          <template #item="{ item, selected }">
            <w-icon v-if="selected" class="black">wi-check</w-icon>
            <span v-else></span>
            <div>{{ item.label }}</div>
          </template>
        </w-select>
      </div>
      <!-- <div class="flex space-x-[20px] lg:space-x-[30px]"> -->
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="date"
          color="black"
          label="วันที่จัดกิจกรรม"
          label-color="black"
          placeholder=" "
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
      <!-- </div> -->
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="คุณสมบัติ"
        label-color="black"
        placeholder=" "
      />
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="หน้าที่"
        label-color="black"
        placeholder=" "
      />
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
        class="w-[140px] mx-auto mt-[60px] mb-8"
        buttonLabel="ยืนยัน"
        :isValid="valid === false"
      />
    </w-form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useValidation } from "../Account/validator";

export default {
  setup() {
    const valid = ref(null);
    const { validators } = useValidation();
    const items = ref([
      { label: "Online", value: 1 },
      { label: "On-site", value: 2 },
    ]);
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
    return { validators, valid, items, categories };
  },
};
</script>

<style scoped>
.namjai-green--bg {
  background-color: #00715d;
}
</style>
