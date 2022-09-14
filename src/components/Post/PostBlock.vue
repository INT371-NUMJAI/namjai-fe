<template>
  <div
    name="postblock"
    class="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-12 bg-namjaiwhite px-4 py-4 md:px-5 md:py-6 lg:px-6 lg:py-6 rounded-lg"
  >
    <img
      class="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] rounded-full object-cover"
      src="@/assets/pic1.png"
    />
    <div class="col-span-4 md:col-span-9 lg:col-span-11 lg:px-1">
      <w-textarea
        name="postblock"
        no-autogrow
        rows="2"
        class="w-full text-namjaiblack text-[14px] lg:text-[16px] pt-1 tracking-wide"
        placeholder="พิมพ์เนื้อหาประกาศที่นี่"
      >
      </w-textarea>
      <div class="flex justify-between">
        <div class="w-[95px] lg:w-[100px] lg:h-5">
          <w-input
            type="file"
            class="text-[12px] lg:text-[14px]"
            color="green-dark4"
            inner-icon-left="fa fa-picture-o"
            :preview="false"
            outline
            >เพิ่มรูปภาพ</w-input
          >
        </div>
        <div class="mt-3 md:mt-2">
          <w-button
            :disabled="
              use_auth.store_auth.user.status === `DISABLE` &&
              use_auth.store_auth.status.loggedIn
            "
            class="px-3 py-3.5 lg:py-4 text-[12px] lg:text-[14px] rounded-md"
            color="white"
            bg-color="green-dark4"
            md
            >ประกาศ</w-button
          >
        </div>

        <!-- <w-input type="file" outline :preview="false" class="lg:mr-10">
          <div class="flex justify-between space-x-4 px-2 lg:items-center">
            <w-icon class="pt-8 lg:pt-0" md color="green-dark4">fa fa-picture-o</w-icon>
            <h1 class="invisible lg:visible lg:text-[16px] lg:text-namjaigreen">เพิ่มรูปภาพ</h1>
          </div>
        </w-input> -->
        <!-- <w-input type="file" class="w-20 h-20 col-span-2" color="amber" bg-color="amber-light1" :preview="false" outline>เลือกไฟล์</w-input>
        <div class=""></div>
        <w-button class="justify-end items-end col-span-2" bg-color="secondary" md>medium</w-button> -->
      </div>
      <!-- <div class="flex justify-between ">
        <button class="flex space-x-4 px-2 lg:items-center lg:hover:bg-emerald-700">
          <w-icon class="pt-8 lg:pt-0" md color="green-dark4">fa fa-picture-o</w-icon>
          <h1 class="invisible lg:visible lg:text-[16px] lg:text-namjaigreen">เพิ่มรูปภาพ</h1>
        </button>
        <div class="border bg-namjaigreen rounded-lg text-xs mt-4 lg:mt-0 md:text-sm lg:text-[16px] md:px-1 lg:px-2 py-1">
          <w-button color="white">ประกาศ</w-button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { useAuth } from "../../services/auth-middleware";

export default {
  setup() {
    const use_auth = useAuth();

    return { use_auth };
  },
};
</script>
