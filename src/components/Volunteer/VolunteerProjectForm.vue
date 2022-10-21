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
        v-model="volunteerAttendanceBody.firstName"
      />
      <w-input
        :validators="[validators.required]"
        class="mb-10 lg:text-base md:text-base text-sm"
        type="text"
        color="black"
        label="นามสกุล"
        label-color="black"
        placeholder=" "
        v-model="volunteerAttendanceBody.lastName"
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
          v-model="volunteerAttendanceBody.contactNumber"
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
        class="w-[140px] mx-auto mt-[60px] mb-8 py-3"
        buttonLabel="ยืนยัน"
        :isValid="valid === false"
        @click="submitRegisterVolunteerForm"
      />
    </w-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import volunteerService from './volunteer-service';
import { useStore } from 'vuex';

export default {
  setup() {
    const valid = ref(null);
    const { validators } = useValidation();

    const store = useStore();
    const fname = store.state.auth.user.firstName;
    console.log(fname)

    const volunteerAttendanceBody = reactive({
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
    });

    const submitRegisterVolunteerForm = () => {
      volunteerService.unregisterVolunteerApply(volunteerAttendanceBody);
    }

    return { validators, valid, volunteerAttendanceBody, submitRegisterVolunteerForm, fname };
  },
};
</script>

<style scoped>
.namjai-green--bg {
  background-color: #00715d;
}
</style>
