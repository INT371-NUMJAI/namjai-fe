<template>
	<div class="mt-10">
		<w-form v-model="valid" name="donorForm" class="py-7 lg:py-10">
			<div class="space-y-8 lg:space-y-10">
				<div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">ชื่อ</label>
						<w-input :validators="[validators.required]" color="black" placeholder="ชื่อ"></w-input>
					</div>
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">นามสกุล</label>
						<w-input :validators="[validators.required]" color="black" placeholder="นามสกุล"></w-input>
					</div>
				</div>
				<div class="space-y-2 lg:space-y-4">
					<label class="text-sm lg:text-base font-medium">อีเมล</label>
					<w-input :validators="[validators.required]" type="email" color="black" placeholder="อีเมล"></w-input>
				</div>
				<div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">ชื่อผู้ใช้</label>
						<w-input
							:validators="[validators.required, validators.username]"
							color="black"
							placeholder="ชื่อผู้ใช้"
						></w-input>
					</div>
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">รหัสผ่าน</label>
						<w-input
							:validators="[validators.required, validators.minLength]"
							type="password"
							color="black"
							placeholder="รหัสผ่าน"
						></w-input>
					</div>
				</div>
			</div>
			<div class="lg:block lg:w-80 lg:mt-10 lg:pb-[60px] lg:mx-auto">
				<div class="md:mx-auto mx-auto flex justify-center mt-3 mb-5 bg-namjaigreen h-[60px] lg:w-80 my-10 rounded-xl">
					<w-button
						:disabled="valid === false"
						color="white"
						bg-color="transparent"
						class="text-white text-lg font-semibold"
						type="submit"
					>
						ลงทะเบียน
					</w-button>
				</div>
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
import { defineComponent } from "vue";

export default defineComponent({
	data: () => ({
		// userlists: ["Qwanjai", "Faahhhhhhh", "Chutipaaaa"],
		validators: {
			required: (value) => !!value || "This field is required",
			minLength: (value) => value.length >= 8 || "Your password must be minimum 8 characters",
			username: (value) => {
				let userlists = ["Qwanjai", "Faahhhhhhh", "Chutipaaaa"];
				for (let i = 0; i < userlists.length; i++) {
					if (userlists[i].toLowerCase() === value.toLowerCase()) {
						return "This username is already in use";
					}
				}
			},
		},
	}),
});
</script>
