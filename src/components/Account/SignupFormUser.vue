<template>
	<div class="mt-10 lg:mt-0">
		<w-form v-model="valid" name="donorForm" class="py-7 lg:py-10">
			<div class="space-y-8 lg:space-y-10">
				<div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">ชื่อ</label>
						<w-input :validators="[validators.required]" color="black" placeholder="ชื่อ" v-model="user.firstName"></w-input>
					</div>
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">นามสกุล</label>
						<w-input :validators="[validators.required]" color="black" placeholder="นามสกุล" v-model="user.lastName"></w-input>
					</div>
				</div>
				<div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">อีเมล</label>
						<w-input :validators="[validators.required]" type="email" color="black" placeholder="อีเมล" v-model="user.email"></w-input>
					</div>
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">หมายเลขโทรศัพท์</label>
						<w-input :validators="[validators.required, validators.phoneNoLength]" type="tel" color="black" placeholder="0812345678" v-model="user.phoneNumber"></w-input>
					</div>
				</div>
				<div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">ชื่อผู้ใช้</label>
						<w-input :validators="[validators.required, validators.username]" color="black" placeholder="ชื่อผู้ใช้เป็นภาษาอังกฤษเท่านั้น" v-model="user.userName"></w-input>
					</div>
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">รหัสผ่าน</label>
						<w-input :validators="[validators.required, validators.minLength]" type="password" color="black" placeholder="รหัสผ่าน" v-model="user.password"></w-input>
					</div>
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">ยืนยันรหัสผ่าน</label>
						<w-input :validators="[validators.required, validators.minLength]" type="password" color="black" placeholder="รหัสผ่าน" v-model="confirmPassword"></w-input>
						<span class="text-namjaired" v-if="user.password.localeCompare(confirmPassword) != 0">Password incorrect</span>
					</div>
				</div>
			</div>
			<div class="lg:block lg:w-80 lg:mt-10 lg:pb-[60px] lg:mx-auto">
				<div class="md:mx-auto mx-auto flex justify-center mt-3 mb-5 bg-namjaigreen h-[60px] lg:w-80 my-10 rounded-xl">
					<w-button :disabled="valid === false" color="white" bg-color="transparent" class="text-white text-lg font-semibold" type="submit" @click="submitForm()"> ลงทะเบียน </w-button>
				</div>
				<!-- <span>{{ user }}</span> -->
				<div class="flex justify-center text-sm lg:text-base">
					<p>ยังไม่มีบัญชีใช่หรือไม่?</p>
					<router-link to="/">
						<button bg-color="transparent" class="ml-1 font-semibold">เข้าสู่ระบบ</button>
					</router-link>
				</div>
			</div>
		</w-form>
	</div>
</template>

<script>
import authService from "@/services/auth-service";
import { reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import { useRouter } from 'vue-router';
export default {
	setup() {
		const router = useRouter();
		const { validators } = useValidation();
		const valid = ref(null);
		const user = reactive({
			userName: "",
			email: "",
			firstName: "",
			lastName: "",
			password: "",
			phoneNumber: "",
		});
		const confirmPassword = ref("");
		const submitForm = () => {
			authService.register(user).then(response => {
				if(response.status === 200) {
					router.push("/login");
				}
			})

		};

		return { valid, validators, user, confirmPassword, submitForm };
	},
};
</script>
