<template>
  <div class="h-56 md:h-72 lg:hidden">
    <div class="w-32 h-32 bg-namjaired rounded-full -ml-10 -mt-5"></div>
    <div class="w-32 h-32 border-2 border-namjaiyellow rounded-full"></div>
  </div>
  <div class="h-screen w-full md:h-[850px] bg-namjaiwhite rounded-2xl lg:bg-transparent">
		<div class="mx-8 mb-20 md:mx-20 lg:mx-0">
      <div class="flex justify-between">
      <h1 class=" pt-[30px] text-2xl lg:hidden md:block block font-semibold">เริ่มต้นเปลี่ยนสังคม</h1>
      <div class="w-24 h-20 md:w-28 md:h-24 bg-namjaiyellow rounded-b-full lg:hidden"></div>
      </div>
      <div class="">
        <w-form v-model="valid" name="donorForm" class="py-7 lg:py-10">
          <div class="space-y-8 lg:space-y-10">
            <div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
              <div class="space-y-2 lg:space-y-4">
                <label class="text-sm lg:text-base font-medium">ชื่อ</label>
                <w-input :validators="[validators.required]" color="black" placeholder="ชื่อ" v-model="user.firstName"></w-input>
              </div>
              <div class="space-y-2 lg:space-y-4">
                <label class="text-sm lg:text-base font-medium">นามสกุล</label>
                <w-input :validators="[validators.required]" color="black" placeholder="นามสกุล" v-model="user.lastName"></w-input>
              </div>
            </div>
            <div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
              <div class="space-y-2 lg:space-y-4">
                <label class="text-sm lg:text-base font-medium">อีเมล</label>
                <w-input :validators="[validators.required]" type="email" color="black" placeholder="อีเมล" v-model="user.email"></w-input>
              </div>
              <div class="space-y-2 lg:space-y-4">
                <label class="text-sm lg:text-base font-medium">หมายเลขโทรศัพท์</label>
                <w-input :validators="[validators.required, validators.phoneNoLength]" type="tel" color="black" placeholder="0812345678" v-model="user.phoneNumber"></w-input>
              </div>
            </div>
            <div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
              <div class="space-y-2 lg:space-y-4">
                <label class="text-sm lg:text-base font-medium">ชื่อผู้ใช้</label>
                <w-input :validators="[validators.required, validators.username]" color="black" placeholder="ชื่อผู้ใช้เป็นภาษาอังกฤษเท่านั้น" v-model="user.userName"></w-input>
              </div>
              <div class="space-y-2 lg:space-y-4">
                <label class="text-sm lg:text-base font-medium">รหัสผ่าน</label>
                <w-input :validators="[validators.required, validators.minLength]" type="password" color="black" placeholder="รหัสผ่าน" v-model="user.password"></w-input>
              </div>
              <div class="space-y-2 lg:space-y-4">
                <label class="text-sm lg:text-base font-medium">ยืนยันรหัสผ่าน</label>
                <w-input :validators="[validators.required, validators.minLength]" type="password" color="black" placeholder="รหัสผ่าน" v-model="confirmPassword"></w-input>
                <span class="text-namjaired" v-if="user.password.localeCompare(confirmPassword) != 0">Password incorrect</span>
              </div>
            </div>
          </div>
          <div class="lg:block lg:w-80 lg:mt-10 md:my-[60px] lg:pb-[60px] lg:mx-auto">
            <div class="md:mx-auto mx-auto flex justify-center mt-[30px] mb-5 bg-namjaigreen h-[60px] lg:w-80 my-10 rounded-xl">
              <w-button :disabled="valid === false" color="white" bg-color="transparent" class="text-white text-lg font-semibold" type="submit" @click="submitForm()"> ลงทะเบียน </w-button>
            </div>
            <!-- <span>{{ user }}</span> -->
            <div class="flex justify-center text-sm lg:text-base mb-[60px]">
              <p>ยังไม่มีบัญชีใช่หรือไม่?</p>
              <router-link to="/login">
                <button bg-color="transparent" class="ml-1 font-semibold">เข้าสู่ระบบ</button>
              </router-link>
            </div>
          </div>
        </w-form>
        <w-transition-slide left class="fixed right-[30px] top-[80px]">
          <w-alert class="w-[350px]" v-if="showAlert" v-model="showAlert" :success="checkSuccess" :error="checkError" border-right dismiss plain> {{ responseMessage }} </w-alert>
        </w-transition-slide>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import authService from "@/services/auth-service";
import { reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const { validators } = useValidation();
    const valid = ref(null);

    const showAlert = ref(false);
    const responseMessage = ref("");
    const checkSuccess = ref(false);
    const checkError = ref(false);

    const user = reactive({
      userName: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phoneNumber: "",
    });
    const confirmPassword = ref("");
    const submitForm = () => {
      authService
        .register(user)
        .then(() => {
          responseMessage.value = "Sign up successfully";
          checkSuccess.value = true;
          showAlert.value = true;
          router.push("/login");
        })
        .catch(() => {
          responseMessage.value = "Fail to sign up please try again";
          checkError.value = true;
          showAlert.value = true;
          setTimeout(() => router.push("/report"), 3000);
        });
    };

    return { valid, validators, user, confirmPassword, showAlert, checkSuccess, checkError, responseMessage, submitForm };
  },
};
</script>
