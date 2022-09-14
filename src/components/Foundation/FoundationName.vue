<template>
  <div>
    <div class="flex flex-wrap items-center justify-center">
      <div class="container w-full lg:flex bg-white rounded-xl lg:rounded-l-full lg:rounded-r-xl transform duration-200 ease-in-out lg:space-x-5">
        <div class="relative flex justify-center lg:justify-start px-5 lg:-ml-5 -mt-16 lg:mt-0">
          <img class="h-[140px] w-[140px] bg-namjaibeige lg:bg-transparent p-2 lg:p-0 rounded-full object-cover" src="@/assets/pic1.png" />

          <w-button @click="dialog.show = true" bg-color="grey-light4" class="absolute w-7 h-7 flex justify-center items-center rounded-full -bottom-1 lg:bottom-0 lg:right-9">
            <w-icon class="white" sm color="white"> fa fa-camera</w-icon>
          </w-button>

          <!-- <div class="absolute -bottom-[60px] lg:-bottom-[55px] grid grid-flow-row text-[14px] lg:text-base rounded-lg bg-white drop-shadow-md duration-200 ease-in-out">
            <w-button class="px-8 " color="primary"><p class="text-[14px]">ดูรูปโปรไฟล์</p></w-button>
            <w-input type="file" bg-color="white" static-label :preview="false" outline><p class="px-3 ">เปลี่ยนรูปโปรไฟล์</p></w-input>
          </div> -->

          <!-- <div class="absolute -bottom-[80px] border border-gray-900 grid grid-flow-row text-[14px] lg:text-base rounded-lg bg-white drop-shadow-md duration-200 ease-in-out">
            <button class="px-5 py-2 text-left rounded-lg hover:bg-sky-100 hover:shadow-md">ดูรูปโปรไฟล์</button>
            <button class="px-5 py-2 text-left rounded-lg hover:bg-pink-100 hover:shadow-md">เปลี่ยนรูปโปรไฟล์</button>
          </div> -->
        </div>
        
        <!-- <div class="absolute mx-[95px] grid grid-flow-row text-[14px] lg:text-base rounded-lg bg-white drop-shadow-md duration-200 ease-in-out">
          <button class="px-5 py-2 text-left rounded-lg hover:bg-sky-100">ดูรูปโปรไฟล์</button>
          <button class="px-5 py-2 text-left rounded-lg hover:bg-pink-100">เปลี่ยนรูปโปรไฟล์</button>
        </div> -->

        <div class="text-center lg:text-left pt-3 pb-6 lg:pt-0 lg:pb-0 lg:my-auto">
          <h2 class="text-namjaiblack font-medium md:text-2xl lg:text-[35px] md:font-semibold lg:font-semibold">{{ foundationNameProps }}</h2>
        </div>
      </div>
      <w-dialog v-model="dialog.show" :width="dialog.width" title-class="green-dark3--bg white" >
            <template #title >
              <p class="text-[14px] lg:text-base">เปลี่ยนรูปภาพ</p>
            </template>
            <w-form v-model="valid">
              <w-input type="file" bg-color="white" outline><p class="text-[12px] lg:text-[14px]">กดเพื่อเลือกรูป</p></w-input>
              <div class="flex justify-end space-x-4 mt-4">
                <w-button @click="dialog.show = false" class="h-[40px] text-[14px]"  color="black">ยกเลิก</w-button>
                <w-button @click="dialog.show = false" class="h-[40px] text-[14px]" bg-color="green-dark3" color="white">ยืนยัน</w-button>
                <!-- <w-button @click="dialog.show = false" bg-color="namjaigreen" color="white">ยืนยัน</w-button> -->
              </div>
            </w-form>
          </w-dialog>
    </div>
  </div>
</template>

<style scoped>
.namjaigreen {color: #00715D;}
</style>
<script>
import { reactive, ref } from "vue";
export default {
  props: {
    foundationNameProps: {
      type: String,
    },
    // foundationProfilePicture: {
    //   type: String
    // }
  },
  setup() {
    const dialog = reactive({ show: false, width: 300 });
    return { dialog };
  },
};
</script>
