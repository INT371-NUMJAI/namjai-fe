<template>
  <div class="mx-[30px] my-[60px] lg:mt-[120px] lg:mx-[177px] md:grid lg:grid md:grid-cols-12 lg:grid-cols-12 md:gap-5 lg:gap-[30px]">
    <div class="bg-white rounded-lg drop-shadow-md hover:shadow-md md:col-span-5 lg:col-span-4">
      <img class="rounded-t-lg object-center" src="@/assets/pic1.png" />
      <div class="p-5">
        <h1 class="mb-2 h-[46px] lg:h-[52px] overflow-hidden text-gray-900 text-[14px] lg:text-[16px]">ซื้อชุดตรวจ ATK เพื่อน้องวัยอนุบาลที่สถานรับเลี้ยงเด็กบ้านสันติสุข</h1>
        <p class="mb-3 h-10 text-[12px] lg:text-[14px] overflow-hidden truncade text-namjaidarkgray tracking-wide">ต้องการที่จะจัดหาโรงน้ำดื่มที่สะอาดและปลอดภัยสำหรับเด็กๆเนื่องจากโรงเรียนวัดสวายน้อยวิทยาของ....</p>
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
              <h1 class="text-xl text-namjaired">150,000</h1>
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
  </div>
</template>

<script>
import BaseButton from "../_Bases/BaseButton.vue";

export default {
	components: {
		"base-button": BaseButton,
	},
};
</script>
