<template>
  <div>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-x-0 inset-y-20 z-10 overflow-y-auto">
        <div class="flex items-center justify-center p-4 text-center">
          <div class="relative max-w-xl px-8 lg:px-20 py-5 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
            <w-button class="m-2" @click="showDailog = false" sm outline round absolute color="black" icon="wi-cross"></w-button>
            <div class="mt-3">
              <h2 class="text-lg text-center font-medium leading-6 text-gray-900" id="modal-title">ตรวจสอบความถูกต้อง</h2>
              <div class="mt-5 space-y-3 md:space-y-5 text-sm leading-relaxed">
                <h2 class="text-base">คำขอถอนเงิน</h2>
                <div class="grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-6">
                  <h2 class="col-span-1 lg:col-span-2">หมายเลขคำขอ</h2>
                  <h3 class="col-span-2 lg:col-span-5">#003151065</h3>
                </div>
                <div class="grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-6">
                  <h2 class="col-span-1 lg:col-span-2">มูลนิธิ</h2>
                  <h3 class="col-span-2 lg:col-span-5">เพื่อนพึ่งพายามยากในพระบรมราชินูปถัมภ์</h3>
                </div>
                <div class="grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-6">
                  <h2 class="col-span-1 lg:col-span-2">โครงการ</h2>
                  <h3 class="col-span-2 lg:col-span-5">โครงการบริจาค ATK ให้น้องอนุบาลที่ห่างไกล</h3>
                </div>
                <div class="grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-6">
                  <h2 class="col-span-1 lg:col-span-2">จำนวนเงิน</h2>
                  <div class="col-span-2 lg:col-span-5 flex">
                    <h3 class="">9,578,095</h3>
                    <span>บาท</span>
                  </div>
                </div>
                <div class="grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-6">
                  <h2 class="col-span-1 lg:col-span-2">บัญชี</h2>
                  <h3 class="col-span-2 lg:col-span-5">
                    123-456789-0 - ธนาคารไทยพาณิชย์ <br />
                    สมหญิง มั่นคงดุจภูผา
                  </h3>
                </div>
              </div>
            </div>
            <div class="md:mt-5 py-5 flex justify-center space-x-5">
              <w-button class="text-sm" bg-color="namjaired" color="white" width="80" height="30"> ลบคำขอ </w-button>
              <w-button class="text-sm" bg-color="grey-light3" color="white" width="80" height="30"> ย้อนกลับ </w-button>
              <w-button class="text-sm" bg-color="namjaigreen" color="white" width="80" height="30"> ยืนยัน </w-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.namjaigreen--bg {
  background-color: #00715d;
}

.namjaired--bg {
  background-color: #d45343;
}
</style>

<script>
import { ref } from "vue";

export default {
  setup() {
    const showDailog = ref(false);

    // const province = reactive([{ label: "กระบี่" },{ label: "กรุงเทพมหานคร" }, { label: "กาญจนบุรี" }]);
    return { showDailog, };
  },
};
</script>