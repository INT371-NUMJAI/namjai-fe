<template>
	<div class="lg:flex md:justify-end hidden">
		<div class="lg:w-1/3 lg:h-screen lg:bg-namjaigreen"></div>
	</div>
	<div class="bg-namjaiwhite lg:bg-transparent lg:absolute lg:top-[60px] lg:mx-28 md:px-20 pt-10 pb-10 lg:pb-0 px-[30px] mt-[80%] lg:mt-0 lg:pt-[120px] lg:h-screen h-3/5 md:h-1/2 w-full lg:w-fit rounded-t-3xl md:rounded-t-3xl">
		<div class="-my-[40px] lg:hidden float-right">
			<div class="w-24 h-20 bg-namjaiyellow rounded-b-full"></div>
		</div>
		<h1 class="text-namjaiblack font-semibold text-2xl lg:text-5xl">ยินดีต้อนรับ!</h1>
		<div class="mt-2">
			<div class="w-16 border-4 border-t border-namjaired"></div>
		</div>
		<div class="mt-7 font-medium lg:w-80 lg:mt-10">
			<w-form class="grid grid-flow-row" v-model="valid">
				<label class="text-sm lg:text-base mb-2">อีเมล</label>
				<w-input :validators="[validators.required]" class="mb-8" type="email" color="black" placeholder="เช่น abc@gmail.com" v-model="loginRequest.email" />

				<label class="text-sm lg:text-base mb-2">รหัสผ่าน</label>
				<w-input :validators="[validators.required, validators.minLength]" class="mb-6" type="password" color="black" placeholder="*******" v-model="loginRequest.password" />

				<div class="flex justify-end mb-5">
					<button class="-mt-2 text-sm lg:text-base underline underline-offset-2">ลืมรหัสผ่าน?</button>
				</div>
				<!-- <base-button class="w-80" /> -->

				<base-button buttonLabel="เข้าสู่ระบบ" :isValid="valid === false" buttonType="submit" @click="sayHi()" />
				<!-- <base-button class="text-white text-lg font-semibold" @click="sentRequest" buttonLabel="เข้าสู่ระบบ" :isValid="valid === false" />
				</div> -->
			</w-form>
		</div>
		<div class="lg:block lg:w-80">
			<div class="flex justify-center text-sm lg:text-base">
				<p>ยังไม่มีบัญชีใช่หรือไม่?</p>
				<router-link to="/signup"><button bg-color="transparent" class="ml-1 font-semibold underline underline-offset-2">ลงทะเบียน</button></router-link>
			</div>
			<!-- <w-button @click="$waveui.notify('Information.')" bg-color="info"> Notify info </w-button> -->
		</div>
		<!-- <w-button @click="$waveui.notify('Information.')" bg-color="info"> Notify info </w-button> -->
	</div>
	<img class="hidden lg:block lg:w-2/5 lg:absolute lg:top-44 lg:right-48 lg:z-10" src="@/assets/pic1.png" />
	<img class="hidden lg:block lg:w-3/5 lg:absolute lg:top-24 lg:right-14 lg:-z-0" src="@/assets/pic2.png" />
</template>

<script>
import authService from "@/services/auth-service";
import { reactive, ref } from "vue";
import { useValidation } from "./validator";
import BaseButton from "../_Bases/BaseButton.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getCurrentInstance } from "vue";
export default {
	setup() {
		// const globals = getCurrentInstance().appContext.config.globalProperties.$waveui;
		// console.log(globals);
		const app = getCurrentInstance();
		const waveui = app.appContext.config.globalProperties.$waveui;
		const { validators } = useValidation();
		const valid = ref(null);
		const loginRequest = reactive({ email: "", password: "" });
		const store = useStore();
		const router = useRouter();

		const submitLogin = () => {
			authService.login(loginRequest);
			store.dispatch("auth/login", loginRequest).then(() => {
				router.push("/project");
			});
		};
		const sentRequest = () => {
			typeof valid !== false && valid !== null ? submitLogin() : true;
		};
		const sayHi = () => {
			waveui.notify("Information.");
		};
		return {
			validators,
			valid,
			loginRequest,
			sentRequest,
			sayHi,
		};
	},
	components: { BaseButton },
};
</script>
