<template>
  <div class="">
      <base-button v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user.email === fdnOwnerProjectProp" @click="routeToProgessionForm(foundationProjectUUIDProp)" class="py-2 px-3 text-[14px] lg:mx-0 md:mx-0 mx-0" buttonLabel="อัพเดตความคืบหน้า"></base-button>
    <div class="">
      <div v-for="(progress, index) in progresses" :key="index" class="space-y-2 mb-7">
        <img v-if="progress.picturePath != null" :src="getImage(progress.picturePath)" class="w-full aspect-video object-cover my-5 lg:my-[30px] rounded-xl">
        <div class="flex space-x-4">
          <h1 class="text-xl">#{{ index + 1 }} {{ progress.title }}</h1>
          <p class="text-gray-400 my-auto text-sm">{{ progress.proceedDate }}</p>
        </div>
        <hr class="bg-black h-0.5" />
        <p class="text-sm">{{ progress.detail }}</p>
      </div>
      <p v-if="progresses.length === 0" class="text-center italic">โครงการนี้ยังไม่มีความคืบหน้า</p>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import { useAuth } from "../../services/auth-middleware";
import BaseButton from "../_Bases/BaseButton.vue";
import useProjects from './useProject';

export default {
  components: { BaseButton },
  props: {
    foundationProjectUUIDProp: {
      type: String,
    },
    fdnOwnerProjectProp: {
      type: String,
    }
  },
  setup(props) {
    const use_auth = useAuth();
    const router = useRouter();
    // const fdnProjectUUID = props.foundationProjectUUIDProp;

    const routeToProgessionForm = (fdnProjectUUID) => {
      router.push(`/progressupdateform/${fdnProjectUUID}`);
    }

    const { progresses, getProjectProgress } = useProjects();

    getProjectProgress(props.foundationProjectUUIDProp);

    const getImage = (imagePath) => {
      return `${import.meta.env.VITE_APP_BACKEND_URL}/util/img?path=${imagePath}`;
    };

    return { use_auth, progresses, routeToProgessionForm, getImage };
  },
};
</script>
