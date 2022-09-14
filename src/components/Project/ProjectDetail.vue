<template>
  <div class="mx-[30px] md:mx-24 lg:mx-44 mt-[50px] lg:mt-[120px]">
    <div class="flex space-x-2">
      <p>หมวดหมู่:</p>
      <p
        v-for="fdnProjectProp in fdnProjectProps.targetCategoriesSet"
        :key="fdnProjectProp"
        class="text-sm lg:text-base mb-[20px]"
      >
        {{ fdnProjectProp.targetCategoriesName }}
      </p>
      {{ fdnProjectProps.picturePath }}
    </div>
    <h1 class="text-xl lg:text-3xl mb-[20px] lg:mb-[30px]">
      {{ fdnProjectProps.foundationProjectName }}
    </h1>
    <img
      class="mb-[30px] lg:w-[700px] float-left mr-[30px]"
      :src="getImage(fdnProjectProps.picturePath)"
    />
    <div
      class="bg-white h-screen text-base ml-[730px] w-[342px] lg:block hidden fixed -mt-[190px]"
    >
      <div class="mx-[30px] py-[150px]">
        <h1 class="text-base mb-[20px]">
          {{ fdnProjectProps.foundationContactDTO.fdnName }}
        </h1>
        <h1 class="text-xl mb-[30px]">
          {{ fdnProjectProps.foundationProjectName }}
        </h1>
        <p class="text-sm mb-[30px]">
          ระยะเวลา: {{ fdnProjectProps.startDate }} -
          {{ fdnProjectProps.endDate }}
        </p>
        <div class="grid grid-cols-2 mb-[20px]">
          <p>ยอดบริจาคปัจจุบัน</p>
          <h1 class="text-2xl text-namjaigreen text-right">0</h1>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-3 mb-[20px]">
          <div class="bg-namjaigreen h-3 rounded-full" style="width: 25%"></div>
        </div>
        <div class="grid grid-cols-2">
          <p>เป้าหมาย</p>
          <h1 class="text-xl text-namjaired text-right">
            {{ fdnProjectProps.goal }}
          </h1>
        </div>
        <w-form v-model="valid" v-if="showQR === false">
          <div class="flex mt-[30px]">
            <h1 class="my-auto pr-[10px]">จำนวนเงิน</h1>
            <w-input
              :validators="[validators.required]"
              class="my-auto text-center"
              type="number"
              bg-color="white"
              color="black"
            ></w-input>
            <h1 class="pl-[5px] my-auto">บาท</h1>
          </div>
          <base-button
            @click="showQR = true"
            class="mt-[30px] w-[150px]"
            buttonLabel="บริจาค"
            :isValid="valid === false"
          />
        </w-form>
        <div v-if="showQR === true">
          <img
            class="w-[150px] mx-auto mt-[20px]"
            src="https://i.ibb.co/Nm7JDbS/qr-demo.png"
          />
          <base-button
            @click="showQR = false"
            class="w-[150px]"
            buttonLabel="ระบุจำนวนเงิน"
          />
        </div>
      </div>
    </div>
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
          {{ fdnProjectProps.foundationContactDTO.fdnName }}
          {{ fdnProjectProps.foundationContactDTO.addressDetail }} แขวง
          {{ fdnProjectProps.foundationContactDTO.subDistrict }} เขต
          {{ fdnProjectProps.foundationContactDTO.district }}
          {{ fdnProjectProps.foundationContactDTO.province }}
          {{ fdnProjectProps.foundationContactDTO.postalCode }} <br />
          {{ fdnProjectProps.foundationContactDTO.email }}
        </p>
        <p>{{ fdnProjectProps.foundationContactDTO.contactNumber }}</p>
      </div>
    </div>
    <div class="bg-white h-auto text-sm rounded-md mb-[30px] lg:hidden block">
      <div class="mx-[20px] py-[20px]">
        <div class="grid grid-flow-col mb-[20px]">
          <p>ระยะเวลา:</p>
          <p class="text-right">
            {{ fdnProjectProps.startDate }} - {{ fdnProjectProps.endDate }}
          </p>
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
          <h1 class="text-lg text-namjaired text-right">
            {{ fdnProjectProps.goal }}
          </h1>
        </div>
        <!-- <base-button
          class="w-[140px] md:w-[356px] mb-[30px]"
          buttonLabel="บริจาค"
        ></base-button> -->
        <w-form v-model="valid" v-if="showQR === false">
          <div class="flex mt-[30px] mx-auto">
            <h1 class="my-auto pr-[15px]">จำนวนเงิน</h1>
            <w-input
              :validators="[validators.required]"
              class="my-auto text-center"
              type="number"
              bg-color="white"
              color="black"
            ></w-input>
            <h1 class="pl-[15px] my-auto">บาท</h1>
          </div>
          <base-button
            :isValid="valid === false"
            @click="showQR = true"
            class="mt-[30px] w-[150px]"
            buttonLabel="บริจาค"
          ></base-button>
        </w-form>
        <div v-if="showQR === true">
          <img
            class="w-[150px] mx-auto mt-[20px]"
            src="https://i.ibb.co/Nm7JDbS/qr-demo.png"
          />
          <base-button
            @click="showQR = false"
            class="w-[150px]"
            buttonLabel="ระบุจำนวนเงิน"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useValidation } from "../Account/validator";
import BaseButton from "../_Bases/BaseButton.vue";
import foundationProjectService from "./project-service";

export default {
  components: { BaseButton },
  props: {
    fdnProjectProps: {
      type: Object,
    },
    picturePathProps: {
      type: String,
    },
  },
  setup() {
    const showQR = ref(false);
    const { validators } = useValidation();
    const valid = ref(null);

    const getImage = (path) => {
      foundationProjectService.getPicturePath(path);
    };

    return { getImage, showQR, validators, valid };
  },
};
</script>
