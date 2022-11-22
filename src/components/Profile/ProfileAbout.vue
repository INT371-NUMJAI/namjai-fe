<template>
  <div
    class="container mx-auto py-[30px] md:py-[32px] px-[30px] md:px-[34px] lg:px-[34px] bg-white rounded-lg space-y-5"
  >
    <span class="font-black"
      >{{ profile.profileDetail }}</span
    >
    <hr />
    <div class="pt-2 space-y-5 pb-4">
      <div v-if="profile.profileAddress != ``"
        class="grid grid-cols-7 md:grid-cols-none lg:grid-cols-none md:flex lg:flex md:space-x-6 lg:space-x-5 md:items-center lg:items-center"
      >
        <w-icon xl color="red-dark2" class="justify-start"
          >fa fa-map-marker</w-icon
        >
        <span class="col-span-6 text-[14px] text-neutral-500"
          >{{ profile.profileAddress }}</span
        >
      </div>
      <div v-if="profile.profileAddress != ``"
        class="grid grid-cols-7 md:grid-cols-none lg:grid-cols-none md:flex lg:flex md:space-x-7 lg:space-x-6 md:items-center lg:items-center"
      >
        <w-icon lg color="red-dark2" class="justify-start">fa fa-phone</w-icon>
        <span class="col-span-6 text-[14px] text-neutral-500">{{ profile.contactNumber }}</span>
      </div>
      <div
        class="grid grid-cols-7 md:grid-cols-none lg:grid-cols-none md:flex lg:flex md:space-x-8 lg:space-x-7 md:items-center lg:items-center"
      >
        <w-icon md color="red-dark2" class="justify-start"
          >fa fa-envelope</w-icon
        >
        <span class="col-span-6 text-[14px] text-neutral-500"
          >{{ profile.email }}</span
        >
      </div>
    </div>
    <div v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && route.params.id === use_auth.store_auth.user.email"  class="flex space-x-3">
		<router-link to="/editprofile">
      <base-button
        class="w-[150px] py-3 md:mx-0 lg:mx-0 text-base"
        buttonColor="bg-namjaibrown"
        buttonLabel="แก้ไขข้อมูลส่วนตัว"
      />
	</router-link>
      <base-button
        class="w-[150px] py-3 md:mx-0 lg:mx-0 text-base "
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
import authService from "../../services/auth-service";

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

    // const email = use_auth.store_auth.user.email ? use_auth.store_auth.user.email : null;

    // console.log(use_auth.store_auth.user.email);
    const deleteAccountByEmail = () => {
      profileService.deleteProfile(use_auth.store_auth.user.email).then((response) => {
        if (response.status === 200) {
          showDialog.value = false;
          store.dispatch("auth/logout");
          router.push("/main");
        }
      });
    };

    const profile = ref([]);
    const fetchProfile = () => {
      authService.getProfile(route.params.id).then((response) => {
        profile.value = response.data;
      })
    }
    fetchProfile();

    return { showDialog, deleteAccountByEmail, route, use_auth, profile };
  },
};
</script>
t
