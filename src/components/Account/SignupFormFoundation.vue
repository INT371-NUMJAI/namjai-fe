<template>
	<div class="">
		<w-form v-model="valid" class="hidden lg:inline" @success="submitForm">
			<div class="space-y-10 pb-10 pt-[30px]">
				<div class="space-y-4">
					<h1 class="text-[20px] text-namjaigreen">ข้อมูลผู้ใช้</h1>
					<div class="pt-2.5 flex">
						<div class="font-medium">ขนาดองค์กร:</div>
						<div class="ml-5 space-x-3">
							<w-radio v-model="foundation.fdnSize" bg-color="white" color="amber-light2" label-color="black" return-value="small" class="">
								<p class="mx-2">ขนาดเล็ก</p>
							</w-radio>
							<w-radio v-model="foundation.fdnSize" bg-color="white" color="amber-light2" label-color="black" return-value="big">
								<p class="mx-2">ขนาดใหญ่</p>
							</w-radio>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-10">
					<div class="space-y-4">
						<label class="font-medium">ชื่อองค์กร(ภาษาไทย)</label>
						<w-input :validators="[validators.required]" color="black" placeholder="ชื่อองค์กร" v-model="foundation.fdnName"></w-input>
					</div>
					<div class="space-y-4">
						<label class="font-medium">ชื่อองค์กร(ภาษาอังกฤษ)</label>
						<w-input :validators="[validators.required]" color="black" placeholder="Foundation Name" v-model="foundation.fdnNameEn"></w-input>
					</div>
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
						<w-select :validators="[validators.required]" :items="province" color="black" v-model="foundation.province"></w-select>
					</div>
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
					<div v-if="foundation.fdnSize === `small`" name="smallfdn" class="grid grid-flow-row space-y-1">
						<label>เอกสารที่เกี่ยวข้อง</label>
						<span class="text-sm text-namjaidarkgray">** ส่งไฟล์ zip เพื่อตรวจสอบหลักฐานประกอบไปด้วย สำเนาบัตรประชาชนผู้บริหาร, สำเนาหน้าสมุดบัญชีองค์กร</span>
					</div>
					<div v-if="foundation.fdnSize === `big`" name="hugefdn" class="grid grid-flow-row space-y-1">
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
import authService from "@/services/auth-service";
import { useValidation } from "./validator";
import { reactive, ref } from "vue";
import { useUtil } from "../../services/useUtil";
import { useRouter } from 'vue-router';

export default {
	setup() {
		const router = useRouter();
		const { validators } = useValidation();
		const valid = ref(null);

		const province = reactive([{ label: "กระบี่" }, { label: "กรุงเทพมหานคร" }, { label: "กาญจนบุรี" }, { label: "กาฬสินธุ์" }, { label: "กำแพงเพชร" }, { label: "ขอนแก่น" }, { label: "จันทบุรี" }, { label: "ฉะเชิงเทรา" }, { label: "ชลบุรี" }, { label: "ชัยนาท" }, { label: "ชัยภูมิ" }, { label: "ชุมพร" }, { label: "เชียงราย" }, { label: "เชียงใหม่" }, { label: "ตรัง" }, { label: "ตราด" }, { label: "ตาก" }, { label: "นครนายก" }, { label: "นครปฐม" }, { label: "นครพนม" }, { label: "นครราชสีมา" }, { label: "นครศรีธรรมราช" }, { label: "นครสวรรค์" }, { label: "นนทบุรี" }, { label: "นราธิวาส" }, { label: "น่าน" }, { label: "บึงกาฬ" }, { label: "บุรีรัมย์" }, { label: "ปทุมธานี" }, { label: "ประจวบคีรีขันธ์" }, { label: "ปราจีนบุรี" }, { label: "ปัตตานี" }, { label: "พระนครศรีอยุธยา" }, { label: "พะเยา" }, { label: "พังงา" }, { label: "พัทลุง" }, { label: "พิจิตร" }, { label: "พิษณุโลก" }, { label: "เพชรบุรี" }, { label: "เพชรบูรณ์" }, { label: "แพร่" }, { label: "ภูเก็ต" }, { label: "มหาสารคาม" }, { label: "มุกดาหาร" }, { label: "แม่ฮ่องสอน" }, { label: "ยโสธร" }, { label: "ยะลา" }, { label: "ร้อยเอ็ด" }, { label: "ระนอง" }, { label: "ระยอง" }, { label: "ราชบุรี" }, { label: "ลพบุรี" }, { label: "ลำปาง" }, { label: "ลำพูน" }, { label: "เลย" }, { label: "ศรีสะเกษ" }, { label: "สกลนคร" }, { label: "สงขลา" }, { label: "สตูล" }, { label: "สมุทรปราการ" }, { label: "สมุทรสงคราม" }, { label: "สมุทรสาคร" }, { label: "สระแก้ว" }, { label: "สระบุรี" }, { label: "สิงห์บุรี" }, { label: "สุโขทัย" }, { label: "สุพรรณบุรี" }, { label: "สุราษฎร์ธานี" }, { label: "สุรินทร์" }, { label: "หนองคาย" }, { label: "หนองบัวลำภู" }, { label: "อ่างทอง" }, { label: "อำนาจเจริญ" }, { label: "อุดรธานี" }, { label: "อุตรดิตถ์" }, { label: "อุทัยธานี" }, { label: "อุบลราชธานี" }]);

		const { generateFiveDigitsUUID } = useUtil();
		const foundation = reactive({ fdnUUid: generateFiveDigitsUUID(), fdnName: "", fdnNameEn: "", addressDetail: "", subDistrict: "", district: "", province: "", postalCode: "", founderName: "", fdnDetail: "", fdnSize: "", establishDate: "", email: "", contactNo: "", password: "" });

		const fileUpload = ref([]);
		const fileHandler = (event) => {
			fileUpload[0] = event.target.files[0];
		};

		const submitForm = () => {
			authService.registerFoundation(foundation).then(response => {
				if(response.status === 200) {
					router.push("/login");
				}
			}).catch((error) => {
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
			province,
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
