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
        <div class="flex mb-[20px]">
          <h1 class="text-base">
            {{ fdnProjectProps.foundationContactDTO.fdnName }}
          </h1>
          <w-switch
            v-model="value"
            color="namjai-green"
            class="ml-[170px] w-switch--wide"
          >
            <template #track>
              <p>{{ value ? "on" : "off" }}</p>
            </template>
          </w-switch>
        </div>
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
						<w-input :validators="[validators.required, validators.negativeNumber]" class="my-auto text-center" type="number" bg-color="white" color="black"></w-input>
						<h1 class="pl-[15px] my-auto">บาท</h1>
					</div>
					<base-button :isValid="valid === false" @click="showQR = true" class="mt-[30px] w-[150px]" buttonLabel="บริจาค"></base-button>
				</w-form>
				<div v-if="showQR === true">
					<img class="w-[150px] mx-auto mt-[20px]" src="https://i.ibb.co/Nm7JDbS/qr-demo.png" />
					<base-button @click="showQR = false" class="w-[150px]" buttonLabel="ระบุจำนวนเงิน" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useValidation } from "../Account/validator";
// import project[0]Service from "./project-service";
import useProjects from "./useProject";
export default {
	// props: {
	// 	project: {
	// 		type: Object,
	// 	},
	// },
	// setup(props) {
	setup() {
		const showQR = ref(false);
		const { validators } = useValidation();
		const valid = ref(null);

		const route = useRoute();
		const { project, getProjectByID } = useProjects();
		getProjectByID(route.params.id);
		console.log(project[0]);

		const stringStartDate = ref(project.startDate);
		const stringEndDate = ref(project.endDate);
		const formatStringDate = computed(() => {
			return `${stringStartDate.value} - ${stringEndDate.value}`;
		});

		const fdnAddress = project.value.foundationContactDTO;
		const formatFdnAddress = computed(() => {
			return `${fdnAddress.addressDetail}`;
			// return `${fdnAddress.addressDetail} แขวง ${fdnAddress.value.subDistrict} เขต ${fdnAddress.value.district} ${fdnAddress.value.province} ${fdnAddress.value.postalCode} ${fdnAddress.value.email}`;
		});

		// const imagePath = ref(props.project.picturePath)
		// const getImage = () => {
		// 	// return imagePath.value;
		// 	return `${import.meta.env.VITE_APP_BACKEND_URL}/view/img?imagePath=${imagePath.value}`;
		// };
		// {{baseUrl}}/view/img?imagePath=./foundation/มูลนิธิไก่ต้มน้ำปลา/FOb4myuacAooNVZ.jpg
		// console.log(imagePath.value);

		return {
			// getImage,
			project,
			showQR,
			validators,
			valid,
			formatStringDate,
			formatFdnAddress,
		};
	},
};
</script>

<style scoped>
.w-switch__track {
  color: #666;
}
.w-switch--on .w-switch__track {
  color: #fff;
}
.w-switch--wide .w-switch__input {
  width: 100px;
}
.w-switch--wide .w-switch__track {
  width: 150px;
  text-align: center;
}
.namjai-green {
  color: #00715d;
}
</style>
