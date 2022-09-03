<template>
  <div class="mx-[30px] lg:mx-[177px] mt-[120px] mb-[60px] space-y-2.5 lg:space-y-5">
    <foundation-name />
    <div class="my-5 px-[30px] py-3 lg:py-4 space-x-[30px] md:space-x-[50px] lg:space-x-[60px] bg-namjaiwhite rounded-lg flex text-center text-[14px] lg:text-[16px] font-black text-[#5A5A5A]">
      <button class="active:border-b-4 active:border-namjaigreen">
        <router-link to="/profile/post"><p clas>โพสต์</p></router-link>
      </button>

      <button class="active:border-b-4 active:border-namjaigreen">
        <router-link to="/profile/project"><p>โครงการ</p></router-link>
      </button>

      <button class="active:border-b-4 active:border-namjaigreen">
        <router-link to="/profile/volunteer"><p>จิตอาสา</p></router-link>
      </button>

      <button class="active:border-b-4 active:border-namjaigreen">
        <router-link to="/profile/about"><p>เกี่ยวกับ</p></router-link>
      </button>
    </div>
    <router-view />
    <!-- <div name="post" class="space-y-2.5 lg:space-y-5">
      <post-block />
      <post-detail-block />
    </div>
    <div name="project" class="space-y-2.5"></div>
    <div name="volunteer">
      <volunteer-activity-block />
    </div>
    <foundation-profile /> -->
  </div>
</template>

<script>
import FoundationName from "@/components/Foundation/FoundationName.vue";
import PostDetailBlock from "@/components/Post/PostDetailBlock.vue";
import PostBlock from "@/components/Post/PostBlock.vue";
import VolunteerActivityBlock from "@/components/Volunteer/VolunteerActivityBlock.vue";
import FoundationProfile from "@/components/Foundation/FoundationProfile.vue";

export default {
  components: {
    "foundation-name": FoundationName,
    "post-detail-block": PostDetailBlock,
    "post-block": PostBlock,
    "volunteer-activity-block": VolunteerActivityBlock,
    "foundation-profile": FoundationProfile,
  },
};
</script>
