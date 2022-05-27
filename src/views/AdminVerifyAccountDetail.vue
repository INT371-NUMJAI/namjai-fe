<template>
	<div class="mt-[120px] mx-28">
		<h1 class="text-5xl font-semibold mb-[60px]">รายละเอียดมูลนิธิ</h1>
		<fieldset class="border border-namjaibrown rounded-md px-[58px] mb-[60px]">
			<legend class="mb-[30px]">
				<h1 class="text-xl px-[5px]">ข้อมูลการจัดตั้งองค์กร</h1>
			</legend>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">สถานะ:</h2>
				<verification-status />
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">ชื่อองค์กร:</h2>
				<p>กระจกเงา</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">สถานที่ตั้งองค์กร:</h2>
				<p>เลขที่ 191 ซอย วิภาวดีรังสิต 62 แยก 4-7 แขวง ตลาดบางเขน เขต หลักสี่ กรุงเทพฯ 10210</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">วัน/เดือน/ปี ที่จัดตั้ง:</h2>
				<p>00/00/0000</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">ชื่อ-นามสกุล ผู้บริหาร:</h2>
				<p>จอห์น สมิธ</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">เบอร์ติดต่อ:</h2>
				<p>0812345678</p>
			</div>
			<div class="flex space-x-[20px] mb-[20px]">
				<h2 class="font-semibold">อีเมล์:</h2>
				<p>abc@gmail.com</p>
			</div>
			<div class="mb-[20px] space-y-[20px]">
				<h2 class="font-semibold">รายละเอียดองค์กร:</h2>
				<p>
					ซัพพลายเออร์พ่อค้าอีสเตอร์ไฮเวย์ ดีพาร์ทเมนท์วาฟเฟิลโมหจริตซีนีเพล็กซ์ เยอบีราเพียบแปร้ เทวา
					วานิลาแมกกาซีนเป่ายิงฉุบ สี่แยกริคเตอร์ อิเลียดร็อครายชื่อชนะเลิศเจล โอวัลตินแพทยสภาคาแรคเตอร์เอ๊าะ แจม
					เซ็นเตอร์ศากยบุตรวัคค์เมจิกไลน์ เย้ว บ๊อบอัลมอนด์ครัวซองต์ เป่ายิงฉุบคาปูชิโน การันตีพาวเวอร์โปรเจ็กต์ อุด้ง
					ภคันทลาพาธระโงกสงบสุข รามาธิบดีทาวน์เฮาส์แกงค์กุมภาพันธ์ เปเปอร์กับดักเคลียร์ถูกต้อง
					สแล็กเฟิร์มโปรดักชั่นแทงกั๊ก เฮีย เฝอ แฟล็ตแมชีนมหภาค คำสาปอาว์คอนเซปต์แทงโก้ ทำงานแกสโซฮอล์แพกเกจช็อตเคส แคนู
					ฮองเฮานายพรานพะเรอซาบะ พุทธศตวรรษเยอบีราแอปพริคอท โยโย่บอมบ์ปฏิสัมพันธ์สกรัม เทรดโกลด์ แซลมอนเย้ว
					ดีกรีเลดี้สุนทรีย์โยโย่ฮาราคีรี ไตรมาสก่อนหน้า
				</p>
			</div>
			<div class="flex space-x-[20px] mb-[30px]">
				<h2 class="font-semibold">เอกสารยืนยันตัวตน:</h2>
				<a href="shorturl.at/nIQX2">shorturl.at/nIQX2m</a>
				<w-icon>fa fa-download</w-icon>
			</div>
		</fieldset>
		<div class="flex mb-[60px] mx-auto justify-center space-x-[50px]">
			<div class="flex">
				<w-button class="w-[150px] h-[50px]" />
			</div>
			<div class="flex">
				<w-button @click="dialog.show = true" class="bg-namjaired w-[150px] h-[50px] justify-start" />
			</div>
		</div>
		<w-dialog v-model="dialog.show" :width="dialog.width" bg-color="namajai-green">
			<template #title bg-color="namjai-beige">
				<h2 class="text-lg text-black">หมายเหตุ</h2>
				<w-button
					class="button--close mt-1 mx-2"
					@click="dialog.show = false"
					sm
					outline
					round
					absolute
					color="namjai-red"
					icon="wi-cross"
				></w-button>
			</template>
			<w-form v-model="valid">
				<w-textarea
					:validators="[validators.required]"
					color="black"
					placeholder="รายละเอียดที่ไม่อนุมัติ"
				></w-textarea>
				<template #actions>
					<!-- <base-button @click="dialog.show = false" class="h-[40px] text-xs" /> -->
					<w-button :disabled="[valid === false]" bg-color="namjai-green" color="white" @click="dialog.show = false"
						>ยืนยัน</w-button
					>
				</template>
			</w-form>
		</w-dialog>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import VerificationStatus from "../components/VerificationStatus.vue";
import BaseButton from "../components/BaseButton.vue";

export default defineComponent({
	components: {
		VerificationStatus,
		BaseButton,
	},
	data() {
		return {
			dialog: {
				show: false,
				width: 500,
			},
			validators: {
				required: (value) => !!value || "This field is required",
			},
		};
	},
});
</script>
<style scoped>
.namjai-red {
	color: #d45343;
}
</style>
