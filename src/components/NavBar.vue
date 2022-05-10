<template>
	<div>
		<nav class="bg-namjaigreen flex items-center justify-between px-7 py-3 md:py-3 md:px-11 drop-shadow-md">
			<div class="flex items-center text-white">
				<router-link to="/"> <img class="w-28" src="../assets/namjai.png" /></router-link>
			</div>
			<div class="md:hidden">
				<!-- <w-icon color="white">fa fa-bars</w-icon> -->
				<drawer></drawer>
			</div>
			<div class="hidden md:flex md:space-x-11 items-center text-white font-semibold">
				<w-button bg-color="transparent" class="font-medium">มูลนิธิ</w-button>
				<w-button bg-color="transparent" class="font-medium">โครงการ</w-button>
				<router-link to="/volunteer">
					<w-button bg-color="transparent" class="font-medium">จิตอาสา</w-button></router-link
				>
				<w-button bg-color="transparent" class="font-medium">เกี่ยวกับเรา</w-button>
				<router-link to="/login">
					<w-button class="p-2 font-medium bg-transparent border-2 rounded-lg w-auto h-auto">
						เข้าสู่ระบบ
					</w-button></router-link
				>
			</div>
		</nav>
	</div>
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
