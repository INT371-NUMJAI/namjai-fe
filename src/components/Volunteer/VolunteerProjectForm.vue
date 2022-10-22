<template>
  <div
    class="mx-[30px] md:mx-[40px] my-[40px] h-auto"
  >
  {{ volunteerAttendanceBody }}
    <h1 class="text-2xl lg:text-2xl mb-[40px]">{{ volunteerNameProps }}</h1>
    <div class="lg:mt-[60px]">
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
        @click="submitunregisterVolunteerForm"
      />
    </w-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import volunteerService from './volunteer-service';

export default {
  props: {
		volunteerNameProps: {
			type: String,
		},
    volunteerUUIDProps: {
      type: String,
    }
	},
  setup(props) {
    const valid = ref(null);
    const { validators } = useValidation();

    const uuid = props.volunteerUUIDProps;

    const volunteerAttendanceBody = reactive({
      volunteerProjectUUID: uuid,
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
    });

    const submitunregisterVolunteerForm = () => {
      volunteerService.unregisterVolunteerApply(volunteerAttendanceBody);
    }

    return { validators, valid, volunteerAttendanceBody, submitunregisterVolunteerForm };
  },
};
</script>

<style scoped>
.namjai-green--bg {
  background-color: #00715d;
}
</style>
