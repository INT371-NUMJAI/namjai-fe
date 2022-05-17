<template>
	<nav
		class="bg-namjaigreen flex items-center justify-between px-7 py-6 lg:py-2 lg:px-11 drop-shadow-md lg:fixed lg:w-screen"
	>
		<div class="flex items-center text-white">
			<img class="w-28" src="../assets/logonamjai_new.png" />
		</div>
		<div class="lg:hidden">
			<w-icon color="white">fa fa-bars</w-icon>
		</div>
		<div class="hidden lg:flex lg:space-x-11 items-center text-white lg:text-sm">
			<w-button bg-color="transparent" class="font-medium">มูลนิธิ</w-button>
			<w-button bg-color="transparent" class="font-medium">โครงการ</w-button>
			<router-link to="/volunteer">
				<w-button bg-color="transparent" class="font-medium">จิตอาสา</w-button></router-link
			>
			<w-button bg-color="transparent" class="font-medium">เกี่ยวกับเรา</w-button>
			<router-link to="/login">
				<w-button bg-color="transparent" round outline class="py-4 font-medium">เข้าสู่ระบบ</w-button></router-link
			>
		</div>
	</nav>
</template>
<script>
import { defineComponent } from "vue";
import Drawer from "./Drawer.vue";
export default defineComponent({
	components: {
		Drawer,
	},
});
</script>
