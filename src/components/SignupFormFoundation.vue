<template>
  <div class="mt-10">
    <w-form name="foundationForm" class="hidden lg:inline">
      <div class="space-y-10 pb-10 pt-[30px]">
        <div class="space-y-4">
          <h1 class="text-[20px] text-namjaigreen">ข้อมูลผู้ใช้</h1>
          <div class="space-y-4 pt-[20px]">
            <div class="font-medium">ขนาดองค์กร</div>
            <div class="inline-flex space-x-[60px]">
              <div
                class="w-32 h-10 border border-namjaibrown rounded-md py-2 text-center space-x-3"
              >
                <w-radio class="mr2" name="radio1" color="red-light1"></w-radio>
                <span class="font-medium">ขนาดเล็ก</span>
              </div>
              <div
                class="w-32 h-10 border border-namjaibrown rounded-md py-2 text-center space-x-3"
              >
                <w-radio class="mr2" name="radio1" color="red-light1"></w-radio>
                <span class="font-medium">ขนาดใหญ่</span>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <label class="font-medium">ชื่อองค์กร</label>
          <w-input color="black" placeholder="ชื่อองค์กร"></w-input>
        </div>
        <div class="grid grid-cols-2 gap-10">
          <div class="space-y-4">
            <label class="font-medium">อีเมล</label>
            <w-input type="email" color="black" placeholder="อีเมล"></w-input>
          </div>
          <div class="space-y-4">
            <label class="font-medium">รหัสผ่าน</label>
            <w-input
              type="email"
              color="black"
              placeholder="รหัสผ่าน"
            ></w-input>
          </div>
        </div>
        <h1 class="pt-[30px] text-[20px] text-namjaigreen">
          ข้อมูลที่อยู่องค์กร
        </h1>
        <div class="space-y-4">
          <label class="font-medium">ที่ตั้ง</label>
          <w-input color="black" placeholder="เลขที่ หมู่ ซอย ถนน"></w-input>
        </div>
        <div class="grid grid-cols-2 gap-10">
          <div class="space-y-4">
            <label class="font-medium">แขวง</label>
            <w-input color="black" placeholder="ชื่อ"></w-input>
          </div>
          <div class="space-y-4">
            <label class="font-medium">เขต</label>
            <w-input color="black" placeholder="นามสกุล"></w-input>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-10">
          <div class="space-y-2 lg:space-y-4">
            <label class="font-medium">จังหวัด</label>
            <w-input color="black" placeholder="จังหวัด"></w-input>
          </div>
          <div class="space-y-4">
            <label class="font-medium">รหัสไปรษณีย์</label>
            <w-input color="black" placeholder="รหัสไปรษณีย์"></w-input>
          </div>
        </div>
        <h1 class="pt-[30px] text-[20px] text-namjaigreen">ข้อมูลองค์กร</h1>
        <div class="space-y-4">
          <label class="font-medium">วันเดือนปี ที่จัดตั้งองค์กร</label>
          <w-input type="date" color="black"></w-input>
        </div>
        <div class="space-y-4">
          <label class="font-medium">ชื่อ-สกุล ผู้บริหาร</label>
          <w-input color="black" placeholder="เลขที่ หมู่ ซอย ถนน"></w-input>
        </div>
        <div class="grid grid-cols-2 gap-10">
          <div class="space-y-2 lg:space-y-4">
            <label class="font-medium">เบอร์โทรศัพท์</label>
            <w-input
              type="tel"
              color="black"
              placeholder="เบอร์โทรศัพท์"
            ></w-input>
          </div>
          <div class="space-y-4">
            <label class="font-medium">อีเมล</label>
            <w-input type="email" color="black" placeholder="อีเมล"></w-input>
          </div>
        </div>
        <div class="space-y-4">
          <label class="font-medium">รายละเอียด</label>
          <div class="h-full bg-namjaiwhite">
            <w-textarea
              placeholder="ใส่รายละเอียดขององค์กรในช่องนี้"
              class="font-normal p-4"
              color="black"
            >
            </w-textarea>
          </div>
        </div>

        <div class="space-y-4">
          <div name="smallfdn" class="grid grid-flow-row space-y-1">
            <label>เอกสารที่เกี่ยวข้อง</label>
            <span class="text-sm text-namjaidarkgray"
              >** ส่งไฟล์ zip เพื่อตรวจสอบหลักฐานประกอบไปด้วย
              สำเนาบัตรประชาชนผู้บริหาร ,สำเนาหน้าสมุดบัญชีองค์กร</span
            >
          </div>
          <div name="hudgefdn" class="grid grid-flow-row space-y-1">
            <label>เอกสารที่เกี่ยวข้อง</label>
            <span class="text-sm text-namjaidarkgray"
              >** ส่งไฟล์ zip เพื่อตรวจสอบหลักฐานประกอบไปด้วย
              หนังสือการจัดตั้งองค์กร,
              สำเนาบัตรประชาชนผู้บริหาร ,สำเนาหน้าสมุดบัญชีองค์กร</span
            >
          </div>

          <w-input
            type="file"
            class="w-20 h-20"
            color="amber"
            bg-color="amber-light1"
            outline
            >เลือกไฟล์</w-input
          >
        </div>
      </div>
    </w-form>
    <div class="lg:block lg:w-80 lg:pb-[60px] lg:mx-auto">
      <div
        class="md:mx-auto mx-auto flex justify-center mt-1 mb-5 bg-namjaigreen h-[60px] my-10 rounded-xl"
      >
        <w-button
          color="white"
          bg-color="transparent"
          class="text-white text-lg font-semibold"
          type="submit"
        >
          ลงทะเบียน
        </w-button>
      </div>
      <div class="flex justify-center text-sm lg:text-base">
        <p>ยังไม่มีบัญชีใช่หรือไม่?</p>
        <router-link to="/login">
          <button bg-color="transparent" class="ml-1 font-semibold">
            เข้าสู่ระบบ
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
