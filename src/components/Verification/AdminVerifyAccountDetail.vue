<template>
	<div class="mt-[120px] mx-28">
		<h1 class="text-5xl font-semibold mb-[60px]">รายละเอียดมูลนิธิ</h1>
		<fieldset class="border border-namjaibrown rounded-md px-[58px] mb-[60px]">
			<legend class="mb-[30px]">
				<h1 class="text-xl px-[5px]">ข้อมูลการจัดตั้งองค์กร</h1>
			</legend>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">ชื่อมูลนิธิ</h2>
				<p>{{ foundation.fdnName }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">สถานะ:</h2>
				<!-- <verification-status /> -->
				<verification-status :statusText="foundation.status" />
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">ขนาดองค์กร:</h2>
				<p>{{ foundation.fdnSize }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">ชื่อองค์กร:</h2>
				<p>{{ foundation.fdnName }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">สถานที่ตั้งองค์กร:</h2>
				<p>{{ foundation.addressDetail }} แขวง {{ foundation.subDistrict }} เขต {{ foundation.district }} จังหวัด {{ foundation.province }} {{ foundation.postalCode }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">วัน/เดือน/ปี ที่จัดตั้ง:</h2>
				<p>{{ foundation.establishDate }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">ชื่อ-นามสกุล ผู้บริหาร:</h2>
				<p>{{ foundation.founderName }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">เบอร์ติดต่อ:</h2>
				<p>{{ foundation.contactNumber }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">อีเมล์:</h2>
				<p>{{ foundation.email }}</p>
			</div>
			<div class="mb-[20px] space-y-[20px]">
				<h2 class="font-semibold">รายละเอียดองค์กร:</h2>
				<p>{{ foundation.fdnDetail }}</p>
			</div>
			<div class="flex space-x-[20px] mb-[30px]">
				<h2 class="font-semibold">เอกสารยืนยันตัวตน:</h2>
				<button @click="clickToDownloadFile(foundation.fdnUUid)" class="underline">click to download</button>
				<!-- <w-button color="primary" outline xs>extra small</w-button> -->
				<w-icon>fa fa-download</w-icon>
			</div>
			<!-- {{ apiVerificationFDN }} {{ foundation }} -->
		</fieldset>
		<!-- <span v-if="role.name == 'Admin'">Yes</span> -->
		<div class="flex mb-[60px] mx-auto justify-center space-x-[50px]" v-if="foundation.status === 'PENDING'">
			<div class="flex">
				<base-button class="w-[150px] h-[50px]" buttonLabel="อนุมัติ" @click="clickToVerify(foundation.fdnUUid)" />
			</div>
			<div class="flex">
				<base-button @click="(dialog.show = true), clickToRejected(foundation.fdnUUid)" buttonColor="bg-namjaired" class="w-[150px] h-[50px] justify-start" buttonLabel="ไม่อนุมัติ" />
			</div>
		</div>
		<w-dialog v-model="dialog.show" :width="dialog.width" bg-color="namajai-green">
			<template #title bg-color="namjai-beige">
				<h2 class="text-lg text-black">หมายเหตุ</h2>
				<w-button class="button--close mt-1 mx-2" @click="dialog.show = false" sm outline round absolute color="namjai-red" icon="wi-cross"></w-button>
			</template>
			<w-form v-model="valid">
				<w-textarea :validators="[validators.required]" color="black" placeholder="รายละเอียดที่ไม่อนุมัติ" v-model="apiVerificationFDN.message"></w-textarea>
				<!-- <template #actions> -->
				<div class="space-x-4 ml-[140px] mt-4">
					<w-button @click="dialog.show = false" class="h-[40px]" bg-color="error">ยกเลิก</w-button>

					<w-button @click="dialog.show = false" bg-color="success-dark1" color="white">ยืนยัน</w-button>
				</div>
				<!-- <w-button :disabled="valid === false" bg-color="namjai-green" color="white" @click="dialog.show = false">ยืนยัน</w-button> -->
				<!-- </template> -->
				<!-- {{ valid }} -->
			</w-form>
		</w-dialog>
	</div>
</template>

<script>
import VerificationStatus from "./VerificationStatus.vue";
import approveService from "./approve-service";
import { useRoute } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import useFoundation from "./useFoundation";
export default {
	components: {
		VerificationStatus,
	},

	setup() {
		const route = useRoute();
		// const foundation = reactive({ addressDetail: "", approval: "", contactNumber: "", createDate: "", district: "", email: "", establishDate: "", fdnDetail: "", fdnName: "", fdnSize: "", fdnUUid: "", founderName: "", postalCode: "", province: "", resource: null, status: "", subDistrict: "" });
		const { foundation, getFDNByID, loading } = useFoundation();
		const fdnStatus = ref("");
		// fetchFoundationDetail(route.params.id);

		// onMounted(() => {
		getFDNByID(route.params.id);

		const isPending = ref(false);
		// const showButtons=()=>{
		isPending.value = foundation.status === "PENDING" ? true : false;
		// }
		onMounted(() => {
			fetchFoundationDetail(route.params.id);
		});

		const clickToDownloadFile = (id) => {
			approveService.getFDNDocumentFileByFDNUUID(id);
		};

		const valid = ref(null);
		const dialog = reactive({ show: false, width: 300 });

		const apiVerificationFDN = reactive({ fdnUUid: "", status: "", message: "" });
		const clickToVerify = (uuid) => {
			apiVerificationFDN.fdnUUid = uuid;
			apiVerificationFDN.status = "V";
			approveService.approveFDN(apiVerificationFDN);
		};
		const clickToRejected = (uuid) => {
			apiVerificationFDN.fdnUUid = uuid;
			apiVerificationFDN.status = "R";
		};
		const clickToApprove = (payload) => {
			approveService.approveFDN(payload);
		};

		const { validators } = useValidation();

		return { fdnStatus, loading, foundation, clickToDownloadFile, valid, dialog, validators, clickToApprove, apiVerificationFDN, clickToVerify, clickToRejected, isPending };
	},
};
</script>
<style scoped>
.namjai-red {
	color: #d45343;
}
.namjai-green {
	background-color: #00715d;
}
</style>
