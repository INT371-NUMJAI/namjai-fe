<template>
	<div class="mt-[120px] mx-28">
		<h1 class="text-5xl font-semibold mb-[60px]">รายละเอียดมูลนิธิ</h1>
		<fieldset class="border border-namjaibrown rounded-md px-[58px] mb-[60px]">
			<legend class="mb-[30px]">
				<h1 class="text-xl px-[5px]">ข้อมูลการจัดตั้งองค์กร</h1>
			</legend>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">ชื่อมูลนิธิ</h2>
				<p>{{ fdnVerify.fdnName }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">สถานะ:</h2>
				<!-- <p>{{ fdnVerify.status }}</p> -->
				<verification-status :statusText="fdnVerify.status" />
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">ขนาดองค์กร:</h2>
				<p>{{ fdnVerify.fdnSize }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">ชื่อองค์กร:</h2>
				<p>{{ fdnVerify.fdnName }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">สถานที่ตั้งองค์กร:</h2>
				<p>{{ fdnVerify.addressDetail }} แขวง {{ fdnVerify.subDistrict }} เขต {{ fdnVerify.district }} จังหวัด {{ fdnVerify.province }} {{ fdnVerify.postalCode }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">วัน/เดือน/ปี ที่จัดตั้ง:</h2>
				<p>{{ fdnVerify.establishDate }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">ชื่อ-นามสกุล ผู้บริหาร:</h2>
				<p>{{ fdnVerify.founderName }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">เบอร์ติดต่อ:</h2>
				<p>{{ fdnVerify.contactNumber }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">อีเมล์:</h2>
				<p>{{ fdnVerify.email }}</p>
			</div>
			<div class="mb-[20px] space-y-[20px]">
				<h2 class="font-semibold">รายละเอียดองค์กร:</h2>
				<p>{{ fdnVerify.fdnDetail }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[30px]">
				<h2 class="font-semibold">เอกสารยืนยันตัวตน:</h2>
				<button @click="clickToDownloadFile(fdnVerify.fdnUUid)" class="underline">click to download</button>
				<!-- <w-button color="primary" outline xs>extra small</w-button> -->
				<w-icon>fa fa-download</w-icon>
			</div>
		</fieldset>
		<div class="flex mb-[60px] mx-auto justify-center space-x-[50px]">
			<div class="flex">
				<base-button class="w-[150px] h-[50px]" buttonLabel="อนุมัติ" />
			</div>
			<div class="flex">
				<base-button @click="dialog.show = true" buttonColor="bg-namjaired" class="w-[150px] h-[50px] justify-start" buttonLabel="ไม่อนุมัติ" />
			</div>
		</div>
		<w-dialog v-model="dialog.show" :width="dialog.width" bg-color="namajai-green">
			<template #title bg-color="namjai-beige">
				<h2 class="text-lg text-black">หมายเหตุ</h2>
				<w-button class="button--close mt-1 mx-2" @click="dialog.show = false" sm outline round absolute color="namjai-red" icon="wi-cross"></w-button>
			</template>
			<w-form v-model="valid">
				<w-textarea :validators="[validators.required]" color="black" placeholder="รายละเอียดที่ไม่อนุมัติ"></w-textarea>
				<template #actions>
					<base-button @click="dialog.show = false" class="h-[40px] text-xs" />
					<w-button :disabled="[valid === false]" bg-color="namjai-green" color="white" @click="dialog.show = false">ยืนยัน</w-button>
				</template>
			</w-form>
		</w-dialog>
	</div>
</template>

<script>
import VerificationStatus from "./VerificationStatus.vue";
import approveService from "./approve-service";
import { useRoute } from "vue-router";
import { reactive, ref } from "vue";
import { useValidation } from "../Account/validator";

export default {
	components: {
		VerificationStatus,
	},

	setup() {
		const route = useRoute();
		const fdnVerify = ref({});
		const fetchFoundationDetail = (id) => {
			approveService.getFDNByID(id).then((response) => {
				fdnVerify.value = { ...response.data };
			});
		};
		fetchFoundationDetail(route.params.id);

		const clickToDownloadFile = (id) => {
			approveService.getFDNDocumentFileByFDNUUID(id);
		};

		const valid = ref(null);
		const dialog = reactive({ show: false, width: 300 });
		const { validators } = useValidation();
		return { fdnVerify, clickToDownloadFile, valid, dialog, validators };
	},
};
</script>
<style scoped>
.namjai-red {
	color: #d45343;
}
</style>
