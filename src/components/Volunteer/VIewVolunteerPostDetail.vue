<template>
  <div class="h-full mx-[30px] my-[60px] md:mx-20 lg:mx-[177px] lg:my-[120px] lg:grid lg:grid-cols-12 lg:gap-[30px]">
    <div name="detail" class="col-span-8">
      <div class="flex space-x-2 text-sm lg:text-[16px] font-medium">
        <p>หมวดหมู่:</p>
        <p class="text-namjaigreen"></p>
      </div>
      <h2 class="mt-5 text-xl lg:text-[30px] font-black">อาสาจัดเต็มช่วยขนย้ายสิ่งของและต้อนรับผู้บริจาค</h2>
      <img class="w-[330px] h-[186px] md:w-full lg:w-full md:h-[379px] lg:h-[402px] my-[30px] object-cover" src="../assets/pic1.png" />
      <div name="category" class="w-full h-full lg:h-[110px] bg-white py-[30px] md:py-5 lg:py-5 lg:px-5 md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 space-y-[30px] md:space-y-0 lg:space-y-0">
        <div class="grid grid-cols-2 gap-5 md:gap-0 lg:gap-0 text-center">
          <div class="space-y-5">
            <p class="text-[14px] lg:text-[16px] font-medium">จำนวน</p>
            <h1 class="text-[16px] lg:text-[20px] text-namjaigreen">
              <a href="">10</a>
            </h1>
          </div>
          <div class="space-y-5">
            <p class="text-[14px] lg:text-[16px] font-medium">ประเภทกิจกรรม</p>
            <h1 class="text-[16px] lg:text-[20px] text-namjaigreen">
              <a href="">On Site</a>
            </h1>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-5 lg:gap-0 text-center">
          <div class="space-y-5">
            <p class="text-[14px] lg:text-[16px] font-medium">ประเภทเวลา</p>
            <h1 class="text-[16px] lg:text-[20px] text-namjaigreen">
              <a href="">เลือกช่วงเวลาเอง</a>
            </h1>
          </div>
          <div class="space-y-5">
            <p class="text-[14px] lg:text-[16px] font-medium">หมวดหมู่</p>
            <h1 class="text-[16px] lg:text-[20px] text-namjaigreen">
              <a href="">ผู้สูงอายุ</a>
            </h1>
          </div>
        </div>
      </div>
      <div class="bg-white mt-[30px] py-[30px] lg:py-10 px-6 text-namjaidarkgray space-y-[30px] lg:space-y-10">
        <div class="space-y-2 lg:space-y-65 text-[14px] lg:text-[16px]">
          <p class="font-black">รายละเอียด</p>
          <hr class="bg-namjaidarkgray" />
          <p class="font-normal"></p>
        </div>
        <div class="space-y-2 lg:space-y-5 text-[14px] lg:text-[16px]">
          <p class="font-black">คุณสมบัติ</p>
          <hr class="bg-namjaidarkgray" />
          <p class="font-normal"></p>
        </div>
        <div class="space-y-2 lg:space-y-5 text-[14px] lg:text-[16px]">
          <p class="font-black">หน้าที่</p>
          <hr class="bg-namjaidarkgray" />
          <p class="font-normal"></p>
        </div>
        <div class="space-y-2 lg:space-y-5 text-[14px] lg:text-[16px]">
          <p class="font-black">สาถนที่จัดกิจกรรม</p>
          <hr class="bg-namjaidarkgray" />
          <p class="font-normal"></p>
        </div>
        <div class="space-y-2 lg:space-y-5 text-[14px] lg:text-[16px]">
          <p class="font-black">ติดต่อ</p>
          <hr class="bg-namjaidarkgray" />
          <p class="font-normal"></p>
        </div>
      </div>
    </div>

    <div name="regist" class="h-full lg:h-[402px] lg:col-span-4 bg-white my-[30px] lg:my-0 lg:mt-24 py-[30px] px-6 text-namjaidarkgray lg:rounded-b-full">
      <div class="flex justify-between text-[14px] lg:text-[16px]">
        <h1 class="">มูลนิธิกระจกเงา</h1>
        <div class="px-4 py-1 bg-green-500 text-center rounded-md text-white text-[14px]">เปิดอยู่</div>
      </div>
      <h1 class="font-black py-[20px] text-[14px] lg:text-[20px]">อาสาจัดเต็มช่วยขนย้ายสิ่งของและต้อนรับผู้บริจาค</h1>
      <div class="space-y-3 lg:space-y-4 text-[14px] lg:text-[16px]">
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
      <div class="mt-6 lg:ml-3 space-y-2 lg:flex lg:space-y-0 lg:space-x-3">
        <!-- <h2 class="text-sm">รายชื่อผู้สมัคร</h2> -->
        <button class="flex space-x-3 lg:space-x-2">
          <svg class="w-[16px] h-[14px] lg:w-[18px] lg:h-[16px]" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 13V1M11 13L7 9M11 13L15 9M1 15L1.621 17.485C1.72915 17.9177 1.97882 18.3018 2.33033 18.5763C2.68184 18.8508 3.11501 18.9999 3.561 19H18.439C18.885 18.9999 19.3182 18.8508 19.6697 18.5763C20.0212 18.3018 20.2708 17.9177 20.379 17.485L21 15" stroke="#5B5B5B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h2 class="text-sm lg:text-base font-bold text-namjaigreen">ดาวน์โหลดรายชื่อผู้สมัคร</h2>
        </button>
      </div>
      <div class="w-[156px] h-[50px] border bg-namjaiyellow rounded-md py-3 text-center mx-auto mt-[30px] lg:mt-10">
        <w-button class="ma1" bg-color="transparent" color="white">สมัครเลย</w-button>
      </div>
    </div>
  </div>
</template>
