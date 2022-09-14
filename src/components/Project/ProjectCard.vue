<template>
  <div class="md:w-[300px] w-[330px] md:gap-5 lg:w-[342px] mb-[20px]" v-for="(projectCardProp, index) in projectCardProps" :key="index">
    <router-link :to="'/project/' + projectCardProp.projectUUID">
      <div class="bg-white rounded-lg drop-shadow-md hover:shadow-md">
        <div class="relative cursor-pointer">
          <img class="rounded-t-lg object-center" src="@/assets/pic1.png" />
          <div class="absolute top-0 right-0 p-3">
            <h3 class="px-4 py-1.5 bg-[#21BB7A] text-white rounded-lg font-bold text-[14px] lg:text-[16px]">เปิดอยู่</h3>
          </div>
        </div>

        <div class="p-5">
          <h1 class="mb-2 h-[46px] lg:h-[52px] overflow-hidden text-gray-900 text-[14px] lg:text-[16px]">{{ projectCardProp.projectName }}</h1>
          <p class="mb-3 h-10 text-[12px] lg:text-[14px] overflow-hidden truncate text-namjaidarkgray tracking-wide">{{ projectCardProp.projectDetail }}</p>
          <div class="space-y-2.5">
            <div class="flex justify-between items-center">
              <h2 class="text-[12px] lg:text-[14px] font-black">ยอดบริจาคปัจจุบัน</h2>
              <h1 class="text-xl text-namjaigreen">23,500</h1>
            </div>

            <div class="w-full bg-gray-300 rounded-full h-3">
              <div class="bg-namjaigreen h-3 rounded-full" style="width: 25%"></div>
            </div>
            <div class="flex justify-between items-center">
              <div class="space-y-1">
                <h2 class="text-[12px] font-black">เป้าหมาย</h2>
                <h1 class="text-xl text-namjaired">{{ projectCardProp.goal }}</h1>
              </div>
              <button class="px-7 py-2 bg-namjaigreen font-bold text-white rounded-lg">บริจาค</button>
            </div>
          </div>
          <!-- <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a> -->
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    projectCardProps: {
      type: Array,
    },
  },
};
</script>
