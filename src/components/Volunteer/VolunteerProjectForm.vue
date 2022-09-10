<template>
  <div
    class="mx-[30px] md:mx-[40px] lg:mx-[177px] mt-[60px] lg:mt-[120px] h-auto"
  >
  {{ volunteerAttendanceBody }}
    <h1 class="text-2xl lg:text-2xl mb-[40px]">อาสาจัดเต็มช่วยขนย้ายสิ่งของและต้อนรับผู้บริจาค</h1>
    <div class="lg:mx-[183px] lg:mt-[60px]">
    <w-form v-model="valid">
      <div class="flex space-x-[20px] lg:space-x-[30px]">
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="ชื่อ"
        label-color="black"
        placeholder=" "
        v-model="volunteerAttendanceBody.fname"
      />
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="นามสกุล"
        label-color="black"
        placeholder=" "
        v-model="volunteerAttendanceBody.lname"
      />
      </div>
      <div class="flex space-x-[20px] lg:space-x-[30px]">
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="ชื่อเล่น"
        label-color="black"
        placeholder=" "
        v-model="volunteerAttendanceBody.nickname"
      />
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="text"
          color="black"
          label="อายุ"
          label-color="black"
          placeholder=" "
          v-model="volunteerAttendanceBody.age"
        />
        </div>
        <div class="flex space-x-[20px] lg:space-x-[30px]">
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="text"
          color="black"
          label="เบอร์โทรศัพท์"
          label-color="black"
          placeholder=" "
          v-model="volunteerAttendanceBody.phoneNumber"
        />
        <!-- <label class="text-sm">แขวง</label> -->
        <w-input
          :validators="[validators.required]"
          class="mb-10 lg:text-base md:text-base text-sm"
          type="text"
          color="black"
          label="อีเมล"
          label-color="black"
          placeholder=" "
          v-model="volunteerAttendanceBody.email"
        />
        </div>
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
    const volunteerAttendanceBody = reactive({
      fname: "",
      lname: "",
      nickname: "",
      age: "",
      phoneNumber: "",
      email: "",
    });
    return { validators, valid, volunteerAttendanceBody };
  },
};
</script>

<style scoped>
.namjai-green--bg {
  background-color: #00715d;
}
</style>
