<template>
  <div class="mt-10">
    <w-form name="donorForm" class="py-7 lg:py-10">
      <div class="space-y-8 lg:space-y-10">
        <div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
          <div class="space-y-2 lg:space-y-4">
            <label class="text-sm lg:text-base font-medium">ชื่อ</label>
            <w-input color="black" placeholder="ชื่อ"></w-input>
          </div>
          <div class="space-y-2 lg:space-y-4">
            <label class="text-sm lg:text-base font-medium">นามสกุล</label>
            <w-input color="black" placeholder="นามสกุล"></w-input>
          </div>
        </div>
        <div class="space-y-2 lg:space-y-4">
          <label class="text-sm lg:text-base font-medium">อีเมล</label>
          <w-input type="email" color="black" placeholder="อีเมล"></w-input>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
          <div class="space-y-2 lg:space-y-4">
            <label class="text-sm lg:text-base font-medium">ชื่อผู้ใช้</label>
            <w-input color="black" placeholder="ชื่อผู้ใช้"></w-input>
          </div>
          <div class="space-y-2 lg:space-y-4">
            <label class="text-sm lg:text-base font-medium">รหัสผ่าน</label>
            <w-input
              type="password"
              color="black"
              placeholder="รหัสผ่าน"
            ></w-input>
          </div>
        </div>
      </div>
    </w-form>
    <div class="lg:block lg:w-80 lg:mt-10 lg:pb-[60px] lg:mx-auto">
      <div
        class="md:mx-auto mx-auto flex justify-center mt-3 mb-5 bg-namjaigreen h-[60px] my-10 rounded-xl"
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
