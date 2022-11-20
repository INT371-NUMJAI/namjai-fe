<template>
  <div>
    <w-button @click="showDrawer = true" bg-color="transparent">
      <w-icon color="white">fa fa-bars</w-icon>
    </w-button>
    <w-drawer v-model="showDrawer" bg-color="navy-blue" width="220" class="z-50 fixed">
      <div class="bg-namjaigreen z-0 w-full">
        <w-button class="button--close m-2" @click="showDrawer = false" sm outline round absolute color="white" icon="wi-cross"></w-button>
        <div class="space-y-6 mx-5 mt-[80px] text-white">
          <div v-if="use_auth.store_auth.user === null" class="flex justify-center">
            <router-link to="/login">
              <w-button @click="showDrawer = !showDrawer" bg-color="transparent" outline round class="text-white py-1">เข้าสู่ระบบ</w-button>
            </router-link>
          </div>
		  <div v-if="use_auth.store_auth.user !== null">
            <p class="w-[200px] text-center">{{ use_auth.auth_userName.value }}</p>
          </div>
		  <hr class="mt-[30px] border-1 border-white w-[180px]" />
          <div class="space-y-7 mt-[30px]">
            <div class="flex justify-center">
              <router-link to="/foundations">
                <w-button bg-color="transparent" color="white" class="block w-auto">มูลนิธิ </w-button>
              </router-link>
            </div>
            <div class="flex justify-center">
              <router-link to="/projects/catergories/total">
                <w-button bg-color="transparent" color="white" class="block w-auto">โครงการ </w-button>
              </router-link>
            </div>
            <div class="flex justify-center">
              <router-link to="/volunteers/catergories/total">
                <w-button @click="showDrawer = !showDrawer" bg-color="transparent" color="white" class="block w-auto">จิตอาสา </w-button>
              </router-link>
            </div>
            <div class="flex justify-center">
              <router-link to="/articles">
                <w-button bg-color="transparent" color="white" class="block w-auto">ข่าวสาร</w-button>
              </router-link>
            </div>
            <div v-if="use_auth.store_auth.user !== null" class="flex justify-center">
              <w-button @click="routeToProfile" bg-color="transparent" color="white" class="block w-auto">ข้อมูลส่วนตัว</w-button>
            </div>
          </div>
          <div v-if="use_auth.store_auth.user !== null" class="flex justify-center">
            <w-button @click="clicktoLogout" outline round bg-color="transparent" color="white" class="block w-auto mt-10">ออกจากระบบ </w-button>
          </div>
        </div>
      </div>
    </w-drawer>
  </div>
</template>
<script>
import { ref } from "vue";
import { useAuth } from "../../services/auth-middleware";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const use_auth = useAuth();
    const router = useRouter();
    const store = useStore();

    const showDrawer = ref(false);

    const routeToProfile = () => {
      router.push(`/profile/${use_auth.store_auth.user.email}`);
      checkLoginStatus();
      showDropDown.value = false;
    };

    const clicktoLogout = () => {
      showDrawer.value = false;
      store.dispatch("auth/logout");
      if (use_auth.auth_role.value === `FDN`) {
        store.dispatch("fdn/logout");
      }
      router.push("/main");
    };

    return { showDrawer, use_auth, routeToProfile, clicktoLogout };
  },
};
</script>
<style scoped>
.namjaigreen--bg {
  background-color: #00715d;
}

.navy-blue--bg {
  background-color: #345276;
}
</style>
