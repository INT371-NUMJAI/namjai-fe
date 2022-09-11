<template>
  <div class="mx-[30px] md:mx-24 lg:mx-44 mt-[50px] lg:mt-[120px]">
    <p class="text-sm lg:text-base mb-[20px]">หมวดหมู่: เด็กและเยาวชน</p>
    <h1 class="text-xl lg:text-3xl mb-[20px] lg:mb-[30px]">
      {{ fdnProjectProps.foundationProjectName }}
    </h1>
    <img
      class="mb-[30px] lg:w-[700px] float-left mr-[30px]"
      src="https://images.unsplash.com/photo-1577897113479-2efe3749ccc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    />
    <div
      class="bg-white h-screen text-base ml-[730px] w-[342px] lg:block hidden fixed -mt-[190px]"
    >
      <div class="mx-[30px] py-[190px]">
        <h1 class="text-base mb-[20px]">{{ fdnProjectProps.foundationContactDTO.fdnName }}</h1>
        <h1 class="text-xl mb-[30px]">
          {{ fdnProjectProps.foundationProjectName }}
        </h1>
        <p class="text-sm mb-[30px]">ระยะเวลา: {{ fdnProjectProps.startDate }} - {{ fdnProjectProps.endDate }}</p>
        <div class="grid grid-cols-2 mb-[20px]">
          <p>ยอดบริจาคปัจจุบัน</p>
          <h1 class="text-2xl text-namjaigreen text-right">0</h1>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-3 mb-[20px]">
          <div class="bg-namjaigreen h-3 rounded-full" style="width: 25%"></div>
        </div>
        <div class="grid grid-cols-2">
          <p>เป้าหมาย</p>
          <h1 class="text-xl text-namjaired text-right">{{ fdnProjectProps.goal }}</h1>
        </div>
        <img
          class="w-[200px] mx-auto mt-[30px]"
          src="https://i.ibb.co/Nm7JDbS/qr-demo.png"
        />
      </div>
    </div>
    <!-- <div class="lg:flex lg:space-x-[30px]">
      <img
        class="mb-[30px] lg:w-[700px]"
        src="https://images.unsplash.com/photo-1577897113479-2efe3749ccc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      />
      <div
        class="bg-white h-full text-base rounded-b-full mb-[30px] lg:block hidden"
      >
        <div class="mx-[30px] py-[20px]">
          <h1 class="text-base mb-[20px]">มูลนิธิกระจกเงา</h1>
          <h1 class="text-xl mb-[30px]">
            ซื้อชุดตรวจ ATK เพื่อน้องวัย อนุบาลที่สถานรับเลี้ยงเด็ก
          </h1>
          <div class="grid grid-cols-2 mb-[20px]">
            <p>ยอดบริจาคปัจจุบัน</p>
            <h1 class="text-2xl text-namjaigreen text-right">23,500</h1>
          </div>
          <div class="w-full bg-gray-300 rounded-full h-3 mb-[20px]">
            <div
              class="bg-namjaigreen h-3 rounded-full"
              style="width: 25%"
            ></div>
          </div>
          <div class="grid grid-cols-2 mb-[30px]">
            <p>เป้าหมาย</p>
            <h1 class="text-xl text-namjaired text-right">150,000</h1>
          </div>
          <base-button
            class="w-[140px] mb-[10px]"
            buttonLabel="บริจาค"
          ></base-button>
        </div>
      </div>
    </div> -->
    <div
      class="bg-white h-auto text-sm rounded-md mb-[30px] lg:mb-[40px] lg:w-[700px] lg:mt-[530px] mt-[270px] md:mt-[480px]"
    >
      <div class="mx-[20px] py-[20px]">
        <h1 class="mb-[10px]">รายละเอียด</h1>
        <w-divider color="black" class="mb-[10px]"></w-divider>
        <p class="mb-[30px]">
          {{ fdnProjectProps.foundationProjectDetail }}
        </p>
        <h1 class="mb-[10px]">สถานที่และเวลาดำเนินโครงการ</h1>
        <w-divider color="black" class="mb-[10px]"></w-divider>
        <p class="mb-[10px]">
          {{ fdnProjectProps.foundationProjectDetailPlace }}
        </p>
        <h1 class="mb-[10px]">ติดต่อ</h1>
        <w-divider color="black" class="mb-[10px]"></w-divider>
        <p class="mb-[10px]">
          {{ fdnProjectProps.foundationContactDTO.fdnName }} {{ fdnProjectProps.foundationContactDTO.addressDetail }} แขวง {{ fdnProjectProps.foundationContactDTO.subDistrict }} เขต {{ fdnProjectProps.foundationContactDTO.district }} {{ fdnProjectProps.foundationContactDTO.province }} {{ fdnProjectProps.foundationContactDTO.postalCode }} <br> {{ fdnProjectProps.foundationContactDTO.email }}
        </p>
        <p>{{ fdnProjectProps.foundationContactDTO.contactNumber }}</p>
      </div>
    </div>
    <div class="bg-white h-auto text-sm rounded-md mb-[30px] lg:hidden block">
      <div class="mx-[20px] py-[20px]">
        <div class="grid grid-flow-col mb-[20px]">
          <p>ระยะเวลา:</p>
          <p class="text-right">{{ fdnProjectProps.startDate }} - {{ fdnProjectProps.endDate }}</p>
        </div>
        <!-- <p class="text-sm mb-[20px]">ระยะเวลา: 12/12/2022 - 02/01/2023</p> -->
        <div class="grid grid-cols-2 mb-[20px]">
          <p>ยอดบริจาคปัจจุบัน</p>
          <h1 class="text-2xl text-namjaigreen text-right">0</h1>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-3 mb-[20px]">
          <div class="bg-namjaigreen h-3 rounded-full" style="width: 25%"></div>
        </div>
        <div class="grid grid-cols-2 mb-[20px]">
          <p>เป้าหมาย</p>
          <h1 class="text-lg text-namjaired text-right">{{ fdnProjectProps.goal }}</h1>
        </div>
        <!-- <base-button
          class="w-[140px] md:w-[356px] mb-[30px]"
          buttonLabel="บริจาค"
        ></base-button> -->
        <img
          class="w-[200px] mx-auto"
          src="https://i.ibb.co/Nm7JDbS/qr-demo.png"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
        fdnProjectProps: {
            type: Object,
        }
    }
};
</script>
