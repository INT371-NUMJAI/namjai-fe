<template>
  <div class="">
    <div class="h-56 md:h-72 lg:hidden">
      <div class="w-32 h-32 bg-namjaired rounded-full -ml-10 -mt-5"></div>
      <div class="w-32 h-32 border-2 border-namjaiyellow rounded-full"></div>
    </div>
    <div
      class="h-screen w-full md:h-[850px] bg-namjaiwhite rounded-2xl lg:bg-transparent"
    >
      <div class="mx-8 mb-20 md:mx-20 lg:mx-44">
        <div class="flex justify-between">
          <h1 class="mt-10 text-2xl lg:text-5xl lg:mt-[120px] font-semibold">
            เริ่มต้นเปลี่ยนสังคม
          </h1>
          <div
            class="w-24 h-20 md:w-28 md:h-24 bg-namjaiyellow rounded-b-full lg:hidden"
          ></div>
        </div>
        <hr class="w-16 border-4 border-t border-namjaired md:-mt-4 lg:mt-2" />
        <div class="lg:grid lg:grid-cols-4 lg:gap-8 lg:mt-3">
          <div name="formContent" class="lg:col-span-3 lg:mt-8 lg:space-y-4">
            <div class="hidden md:hidden lg:block lg:font-medium">
              ประเภทผู้ใช้
            </div>
            <!-- <h1 class="text-[20px] text-namjaidarkgray lg:text-[20px]">ประภทผู้ใช้</h1> -->
            <div>
              <signup-user class="lg:hidden" />
              <div class="hidden lg:block" >
                <router-link
                  to="/signup/user"
                  class="border border-namjaibrown rounded-md py-2 px-3 text-center space-x-3">
                  <w-radio name="radio1" color="red-light1"></w-radio>
                  <span class="font-medium">บุคคลทั่วไป</span>
                </router-link>
                <router-link
                  to="/signup/foundation"
                  class="w-32 h-10 border border-namjaibrown rounded-md py-2 pl-3 pr-8 space-x-5 ml-14">
                  <w-radio name="radio1" color="red-light1"></w-radio>
                  <span class="font-medium">มูลนิธิ</span>
                </router-link>
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignupFormUser from "../components/SignupFormUser.vue";
import SignupFormFoundation from "../components/SignupFormFoundation.vue";

export default {
  components: {
    "signup-user": SignupFormUser,
    "signup-foundation": SignupFormFoundation,
  },
};
</script>
