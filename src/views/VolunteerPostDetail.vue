<template>
  <div class="h-full mx-[30px] my-[60px]">
    <div class="flex space-x-2 text-sm font-medium">
      <p>หมวดหมู่:</p>
      <p class="text-namjaigreen">ผู้สูงอายุ</p>
    </div>
    <h2 class="mt-5 text-xl font-black">
      อาสาจัดเต็มช่วยขนย้ายสิ่งของและต้อนรับผู้บริจาค
    </h2>
    <img
      class="w-[330px] h-[186px] my-[30px] object-cover"
      src="../assets/pic1.png"
    />
    <div
      name="category"
      class="h-full bg-white py-[30px] grid-flow-row space-y-[30px]"
    >
      <div class="grid grid-cols-2 gap-5 text-center">
        <div class="space-y-5">
          <p class="text-[14px] font-medium">จำนวน</p>
          <h1 class="text-[16px] text-namjaigreen">
            <a href="">10</a>
          </h1>
        </div>
        <div class="space-y-5">
          <p class="text-[14px] font-medium">ประเภทกิจกรรม</p>
          <h1 class="text-[16px] text-namjaigreen">
            <a href="">On Site</a>
          </h1>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-5 text-center">
        <div class="space-y-5">
          <p class="text-[14px] font-medium">ประเภทเวลา</p>
          <h1 class="text-[16px] text-namjaigreen">
            <a href="">เลือกช่วงเวลาเอง</a>
          </h1>
        </div>
        <div class="space-y-5">
          <p class="text-[14px] font-medium">หมวดหมู่</p>
          <h1 class="text-[16px] text-namjaigreen">
            <a href="">ผู้สูงอายุ</a>
          </h1>
        </div>
      </div>
    </div>
    <div
      class="h-full bg-white mt-[30px] py-[30px] px-6 text-namjaidarkgray space-y-[30px]"
    >
      <div class="space-y-2">
        <p class="text-[14px] font-black">รายละเอียด</p>
        <hr class="bg-namjaidarkgray" />
        <p class="text-[14px] font-normal"></p>
      </div>
      <div class="space-y-2">
        <p class="text-[14px] font-black">คุณสมบัติ</p>
        <hr class="bg-namjaidarkgray" />
        <p class="text-[14px] font-normal"></p>
      </div>
      <div class="space-y-2">
        <p class="text-[14px] font-black">หน้าที่</p>
        <hr class="bg-namjaidarkgray" />
        <p class="text-[14px] font-normal"></p>
      </div>
      <div class="space-y-2">
        <p class="text-[14px] font-black">สาถนที่จัดกิจกรรม</p>
        <hr class="bg-namjaidarkgray" />
        <p class="text-[14px] font-normal"></p>
      </div>
      <div class="space-y-2">
        <p class="text-[14px] font-black">ติดต่อ</p>
        <hr class="bg-namjaidarkgray" />
        <p class="text-[14px] font-normal"></p>
      </div>
    </div>
    <div
      name="regist"
      class="h-full bg-white my-[30px] py-[30px] px-6 text-namjaidarkgray"
    >
      <div class="flex justify-between text-[14px]">
        <h1 class="">มูลนิธิกระจกเงา</h1>
        <div class="px-4 py-1 bg-green-500 text-center rounded-md text-white">
          เปิดอยู่
        </div>
      </div>
      <p class="font-black py-[20px]">
        อาสาจัดเต็มช่วยขนย้ายสิ่งของและต้อนรับผู้บริจาค
      </p>
      <div class="space-y-3 text-[14px]">
        <div class="flex space-x-2">
          <w-icon color="green-dark3">fa fa-map-marker</w-icon>
          <p>กรุงเทพมหานคร</p>
        </div>
        <div class="flex space-x-2">
          <w-icon color="green-dark3">fa fa-calendar-o</w-icon>
          <p>00/00/0000 - 00/00/0000</p>
        </div>
        <div class="flex justify-between">
          <div class="flex space-x-2">
            <w-icon color="green-dark3">fa fa-clock-o</w-icon>
            <p>11:00 - 13:00</p>
          </div>
          <div class="flex space-x-2 justify-end">
            <w-icon class="" color="green-dark3n">fa fa-user-o</w-icon>
            <p>13</p>
          </div>
        </div>
      </div>
      <div class="w-[156px] h-[50px] border bg-namjaiyellow rounded-md py-3 text-center mx-auto mt-[30px]">
        <w-button class="ma1" bg-color="transparent" color="white"
          >สมัครเลย</w-button
        >
      </div>
    </div>
  </div>
</template>