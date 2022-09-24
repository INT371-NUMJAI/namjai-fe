<template>
	<div class="mt-10">
		<!-- <div>{{ foundation }} {{ fileUpload[0] }}</div> -->
		<w-form v-model="valid" class="hidden lg:inline" @success="submitForm">
			<div class="space-y-10 pb-10 pt-[30px]">
				<div class="space-y-4">
					<h1 class="text-[20px] text-namjaigreen">ข้อมูลผู้ใช้</h1>
					<div class="space-y-4 pt-[20px]">
						<div class="font-medium">ขนาดองค์กร</div>
						<div class="flex space-x-[60px]">
							<!--<w-radio v-model="foundation.fdnSize" bg-color="white" color="amber-light2" label-color="black" return-value="small"><p class="mx-2">SMALL</p></w-radio>
								<w-radio v-model="foundation.fdnSize" bg-color="white" color="amber-light2" label-color="black" return-value="big"><p class="mx-2">BIG</p></w-radio> -->
							<!-- <div class="px-5 py-2 border border-amber-400 bg-white rounded-md"> -->
							<w-radio v-model="foundation.fdnSize" bg-color="white" color="amber-light2" label-color="black" return-value="small"><p class="mx-2">ขนาดเล็ก</p></w-radio>
							<!-- </div> -->
							<!-- <div class="px-5 py-2 border border-amber-400 bg-white rounded-md"> -->
							<w-radio v-model="foundation.fdnSize" bg-color="white" color="amber-light2" label-color="black" return-value="big"><p class="mx-2">ขนาดใหญ่</p></w-radio>
							<!-- </div> -->
						</div>
					</div>
				</div>
				<div class="space-y-4">
					<label class="font-medium">ชื่อองค์กร</label>
					<w-input :validators="[validators.required]" color="black" placeholder="ชื่อองค์กร" v-model="foundation.fdnName"></w-input>
				</div>
				<div class="grid grid-cols-2 gap-10">
					<div class="space-y-4">
						<label class="font-medium">อีเมล</label>
						<w-input :validators="[validators.required]" type="email" placeholder="อีเมล" color="black" v-model="foundation.email"></w-input>
					</div>
					<div class="space-y-4">
						<label class="font-medium">รหัสผ่าน</label>
						<w-input :validators="[validators.required, validators.minLength]" type="password" placeholder="รหัสผ่าน" color="black" v-model="foundation.password"></w-input>
					</div>
				</div>
				<h1 class="pt-[30px] text-[20px] text-namjaigreen">ข้อมูลที่อยู่องค์กร</h1>
				<div class="space-y-4">
					<label class="font-medium">ที่ตั้ง</label>
					<w-input :validators="[validators.required]" placeholder="เลขที่ หมู่ ซอย ถนน" color="black" v-model="foundation.addressDetail"></w-input>
				</div>
				<div class="grid grid-cols-2 gap-10">
					<div class="space-y-4">
						<label class="font-medium">แขวง</label>
						<w-input :validators="[validators.required]" placeholder="แขวง" color="black" v-model="foundation.subDistrict"></w-input>
					</div>
					<div class="space-y-4">
						<label class="font-medium">เขต</label>
						<w-input :validators="[validators.required]" placeholder="เขต" color="black" v-model="foundation.district"></w-input>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-10">
					<div class="space-y-2 lg:space-y-4">
						<label class="font-medium">จังหวัด</label>
						<!-- <w-select :validators="[validators.required]" :items="province" color="black" v-model="foundation.province"></w-select> -->
					</div>
					{{ province }}
					<div class="space-y-4">
						<label class="font-medium">รหัสไปรษณีย์</label>
						<w-input :validators="[validators.required]" placeholder="รหัสไปรษณีย์" color="black" v-model="foundation.postalCode"></w-input>
					</div>
				</div>
				<h1 class="pt-[30px] text-[20px] text-namjaigreen">ข้อมูลองค์กร</h1>
				<div class="space-y-4">
					<label class="font-medium">วันเดือนปี ที่จัดตั้งองค์กร</label>
					<w-input :validators="[validators.required]" type="date" color="black" v-model="foundation.establishDate"></w-input>
				</div>
				<div class="space-y-4">
					<label class="font-medium">ชื่อ-สกุล ผู้บริหาร</label>
					<w-input :validators="[validators.required]" placeholder="ชื่อ-สกุล" color="black" v-model="foundation.founderName"></w-input>
				</div>
				<div class="grid grid-cols-2 gap-10">
					<div class="space-y-2 lg:space-y-4">
						<label class="font-medium">เบอร์โทรศัพท์</label>
						<w-input :validators="[validators.required]" type="tel" placeholder="เบอร์โทรศัพท์" color="black" v-model="foundation.contactNo"></w-input>
					</div>
				</div>
				<div class="space-y-4">
					<label class="font-medium">รายละเอียด</label>
					<div class="h-full bg-namjaiwhite">
						<w-textarea :validators="[validators.required]" color="black" placeholder="ใส่รายละเอียดขององค์กรในช่องนี้" class="font-normal p-4" v-model="foundation.fdnDetail"> </w-textarea>
					</div>
				</div>
				<div class="space-y-4">
					<div name="smallfdn" class="grid grid-flow-row space-y-1">
						<label>เอกสารที่เกี่ยวข้อง</label>
						<span class="text-sm text-namjaidarkgray">** ส่งไฟล์ zip เพื่อตรวจสอบหลักฐานประกอบไปด้วย สำเนาบัตรประชาชนผู้บริหาร ,สำเนาหน้าสมุดบัญชีองค์กร</span>
					</div>
					<div name="hugefdn" class="grid grid-flow-row space-y-1">
						<label>เอกสารที่เกี่ยวข้อง</label>
						<span class="text-sm text-namjaidarkgray">** ส่งไฟล์ zip เพื่อตรวจสอบหลักฐานประกอบไปด้วย หนังสือการจัดตั้งองค์กร, สำเนาบัตรประชาชนผู้บริหาร ,สำเนาหน้าสมุดบัญชีองค์กร</span>
					</div>
					<w-input v-model="fileUpload" type="file" class="w-20 h-20" color="amber" bg-color="amber-light1" :preview="false" @change="fileHandler" outline>เลือกไฟล์</w-input>
				</div>
			</div>
			<div class="md:mx-auto mx-auto flex justify-center mt-1 mb-5 bg-namjaigreen h-[60px] w-80 my-10 rounded-xl">
				<!-- <w-button :disabled="valid === false" color="white" bg-color="transparent" class="text-white text-lg font-semibold" type="submit" @click="submitForm"> ลงทะเบียน </w-button> -->
				<w-button :disabled="valid === false" color="white" bg-color="transparent" class="text-white text-lg font-semibold" type="submit"> ลงทะเบียน </w-button>
			</div>
		</w-form>
		<div class="lg:block lg:w-80 lg:pb-[60px] lg:mx-auto">
			<div class="flex justify-center text-sm lg:text-base">
				<p>ยังไม่มีบัญชีใช่หรือไม่?</p>
				<router-link to="/">
					<button bg-color="transparent" class="ml-1 font-semibold">เข้าสู่ระบบ</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import authService from "@/services/auth-service";
import { useValidation } from "./validator";
import { reactive, ref } from "vue";
export default {
	setup() {
		const { validators } = useValidation();
		const valid = ref(null);
		// const province = reactive(['กระบี่', 'กรุงเทพมหานคร', 'กาญจนบุรี', 'กาฬสินธุ์', 'กำแพงเพชร','ขอนแก่น','จันทบุรี','ฉะเชิงเทรา',
		// 'ชลบุรี', 'ชัยนาท', 'ชัยภูมิ', 'ชุมพร', 'เชียงราย', 'เชียงใหม่','ตรัง', 'ตราด', 'ตาก','นครนายก', 'นครปฐม', 'นครพนม', 'นครราชสีมา',
		// 'นครศรีธรรมราช', 'นครสวรรค์', 'นนทบุรี', 'นราธิวาส', 'น่าน','บึงกาฬ', 'บุรีรัมย์','ปทุมธานี', 'ประจวบคีรีขันธ์', 'ปราจีนบุรี', 'ปัตตานี',
		// 'พระนครศรีอยุธยา', 'พะเยา', 'พังงา', 'พัทลุง', 'พิจิตร', 'พิษณุโลก', 'เพชรบุรี', 'เพชรบูรณ์', 'แพร่','ภูเก็ต','มหาสารคาม', 'มุกดาหาร',
		// 'แม่ฮ่องสอน','ยโสธร', 'ยะลา','ร้อยเอ็ด', 'ระนอง', 'ระยอง', 'ราชบุรี','ลพบุรี', 'ลำปาง', 'ลำพูน', 'เลย','ศรีสะเกษ','สกลนคร',
		// 'สงขลา', 'สตูล', 'สมุทรปราการ', 'สมุทรสงคราม', 'สมุทรสาคร', 'สระแก้ว', 'สระบุรี', 'สิงห์บุรี', 'สุโขทัย', 'สุพรรณบุรี', 'สุราษฎร์ธานี',
		// 'สุรินทร์','หนองคาย', 'หนองบัวลำภู','อ่างทอง', 'อำนาจเจริญ', 'อุดรธานี', 'อุตรดิตถ์', 'อุทัยธานี', 'อุบลราชธานี']);

		const foundation = reactive({ fdnUUid: uuidv4(), fdnName: "", addressDetail: "", subDistrict: "", district: "", province: "", postalCode: "", founderName: "", fdnDetail: "", fdnSize: "", establishDate: "", email: "", contactNo: "", password: "" });

		const fileUpload = ref([]);
		const fileHandler = (event) => {
			fileUpload[0] = event.target.files[0];
		};

		const submitForm = () => {
			authService.registerFoundation(foundation).catch((error) => {
				console.error(error);
			});

			const bodyFormData = new FormData();
			bodyFormData.append("file", fileUpload[0]);
			bodyFormData.append("fdnUuid", foundation.fdnUUid);

			authService.uploadFDNDocument(bodyFormData).catch((error) => {
				console.error(error);
			});
		};

		return {
			validators,
			valid,
			foundation,
			fileUpload,
			fileHandler,
			submitForm,
			// province,
		};
	},
};
</script>
