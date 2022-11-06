<template>
  <div
    class="py-[30px] md:py-[32px] px-[30px] md:px-[34px] lg:px-[34px] bg-white rounded-lg space-y-5"
  >
    <span class="font-black"
      >ทุกวันปัญหาในสังคมเราควรเกิด"การเปลี่ยนแปลง" แม้การเปลี่ยนแปลงนั้น
      จะเกิดทีละน้อยนิดแต่เป็น การเปลี่ยนแปลงที่เกิดขึ้นต่อเนื่องเป็นลูกโซ่
      เราจึงขออาสาเป็นเงาในการสะท้อนเรื่องราวปัญหา
      เพื่อขับเคลื่อนสังคมของเราสู่การเปลี่ยนแปลง “สร้างคน สร้างนวัตกรรม
      สร้างการเปลี่ยนแปลง”</span
    >
    <hr />
    <div class="pt-2 space-y-5 pb-4">
      <div
        class="grid grid-cols-7 md:grid-cols-none lg:grid-cols-none md:flex lg:flex md:space-x-6 lg:space-x-5 md:items-center lg:items-center"
      >
        <w-icon xl color="red-dark2" class="justify-start"
          >fa fa-map-marker</w-icon
        >
        <span class="col-span-6 text-[14px] text-neutral-500"
          >เลขที่ 191 ซอย วิภาวดีรังสิต 62 แยก 4-7 แขวง ตลาดบางเขน เขต หลักสี่
          กรุงเทพฯ 10210</span
        >
      </div>
      <div
        class="grid grid-cols-7 md:grid-cols-none lg:grid-cols-none md:flex lg:flex md:space-x-7 lg:space-x-6 md:items-center lg:items-center"
      >
        <w-icon lg color="red-dark2" class="justify-start">fa fa-phone</w-icon>
        <span class="col-span-6 text-[14px] text-neutral-500">061-9091840</span>
      </div>
      <div
        class="grid grid-cols-7 md:grid-cols-none lg:grid-cols-none md:flex lg:flex md:space-x-8 lg:space-x-7 md:items-center lg:items-center"
      >
        <w-icon md color="red-dark2" class="justify-start"
          >fa fa-envelope</w-icon
        >
        <span class="col-span-6 text-[14px] text-neutral-500"
          >donate@mirror.or.th</span
        >
      </div>
    </div>
    <div v-if="route.params.id === use_auth.store_auth.user.email"  class="flex space-x-3">
		<router-link to="/editprofile">
      <base-button
        class="w-[150px] py-3 md:mx-0 lg:mx-0 lg:text-base"
        buttonColor="bg-namjaibrown"
        buttonLabel="แก้ไขข้อมูลส่วนตัว"
      />
	</router-link>
      <base-button
        class="w-[150px] py-3 md:mx-0 lg:mx-0 lg:text-base"
        buttonColor="bg-namjaired"
        buttonLabel="ลบบัญชี"
        @click="showDialog = true"
      />
      <w-dialog v-model="showDialog" :width="350">
        <p class="text-center">คุณต้องการลบบัญชีใช่หรือไม่</p>
        <div class="flex pt-4">
          <base-button
            class="text-base w-[100px] py-2"
            buttonLabel="ยกเลิก"
            @click="showDialog = false"
          ></base-button>
          <base-button
            class="text-base w-[100px] py-2"
            buttonLabel="ยืนยัน"
            buttonColor="bg-namjaired"
            @click="deleteAccountByEmail"
          ></base-button>
        </div>
      </w-dialog>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import BaseButton from "../_Bases/BaseButton.vue";
import profileService from "../Profile/profile-service";
import { useAuth } from "../../services/auth-middleware";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    BaseButton,
  },
  setup() {
    const showDialog = ref(false);
    const use_auth = useAuth();
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const email = use_auth.store_auth.user.email;

    console.log(use_auth.store_auth.user.email);
    const deleteAccountByEmail = () => {
      profileService.deleteProfile(email).then((response) => {
        if (response.status === 200) {
          showDialog.value = false;
          store.dispatch("auth/logout");
          router.push("/main");
        }
      });
    };

    return { showDialog, deleteAccountByEmail, route, use_auth };
  },
};
</script>
t
