<template>
  <div class="mx-[30px] md:mx-[40px] my-[40px] h-auto">
    <h1 class="text-2xl lg:text-2xl mb-[40px]">{{ volunteerNameProps }}</h1>
    <div class="lg:mt-[60px]">
      <w-form v-model="valid">
        <div class="flex space-x-[20px] lg:space-x-[30px]">
          <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="ชื่อ" label-color="black" placeholder=" " v-model="volunteerAttendanceBody.firstName" />
          <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="นามสกุล" label-color="black" placeholder=" " v-model="volunteerAttendanceBody.lastName" />
        </div>
        <div class="flex space-x-[20px] lg:space-x-[30px]">
          <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="เบอร์โทรศัพท์" label-color="black" placeholder=" " v-model="volunteerAttendanceBody.contactNumber" />
          <!-- <label class="text-sm">แขวง</label> -->
          <w-input :validators="[validators.required]" class="mb-10 lg:text-base md:text-base text-sm" type="text" color="black" label="อีเมล" label-color="black" placeholder=" " v-model="volunteerAttendanceBody.email" />
        </div>
        <div class="flex justify-center">
          <base-button class="px-9 mt-[60px] mb-8 py-2" buttonLabel="ยืนยัน" :isValid="valid === false" @click="submitunregisterVolunteerForm()" />
        </div>
      </w-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import volunteerService from "./volunteer-service";

export default {
  props: {
    volunteerNameProps: {
      type: String,
    },
    volunteerUUIDProps: {
      type: String,
    },
  },
  emits: ["closeThisComp"],
  setup(props, { emit }) {
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

    const responseStatus = ref(false);
    const responseMessage = ref("");

    const submitunregisterVolunteerForm = () => {
      volunteerService
        .unregisterVolunteerApply(volunteerAttendanceBody)
        .then(() => {
          responseStatus.value = true;
          responseMessage.value = "Register successfully";
        })
        .catch((error) => {
          responseStatus.value = false;
          responseMessage.value = error.response.data.message;
        })
        .finally(() => {
          emit("closeThisComp", { status: responseStatus.value, message: responseMessage.value });
        });
    };

    return { validators, valid, volunteerAttendanceBody, submitunregisterVolunteerForm };
  },
};
</script>

<style scoped>
.namjai-green--bg {
  background-color: #00715d;
}
</style>
