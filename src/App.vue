<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
	<w-app>
		<nav class="bg-namjaigreen flex items-center justify-between px-7 py-3 lg:py-3 lg:px-11 drop-shadow-md lg:fixed lg:w-screen">
			<div class="flex items-center text-white">
				<img class="w-28" src="../assets/namjai.png" />
			</div>
			<div class="lg:hidden">
				<w-icon color="white">fa fa-bars</w-icon>
			</div>
			<div class="hidden lg:flex lg:space-x-11 items-center text-white font-semibold">
				<w-button bg-color="transparent" class="font-medium">มูลนิธิ</w-button>
				<w-button bg-color="transparent" class="font-medium">โครงการ</w-button>
				<w-button bg-color="transparent" class="font-medium">จิตอาสา</w-button>
				<w-button bg-color="transparent" class="font-medium">เกี่ยวกับเรา</w-button>
				<w-button bg-color="transparent" round outline class="py-4 bd4 font-medium">เข้าสู่ระบบ</w-button>
			</div>
		</nav>
			<div class="md:flex md:justify-end hidden">
				<div class="md:w-1/3 md:h-screen md:bg-namjaigreen">
				</div>
			</div>
			<div
				class="bg-namjaiwhite md:bg-transparent md:mx-28 p-10 mt-48 md:mt-16 md:h-screen h-screen w-full md:w-fit rounded-t-3xl md:rounded-none fixed">
				<div class="-my-10 mx-56 md:hidden">
					<div class="w-24 h-20 bg-namjaiyellow rounded-b-full"></div>
				</div>
				<h1 class="text-namjaiblack font-bold text-2xl md:text-5xl">Help Drive Change</h1>
				<div class="py-4">
					<div class="w-16 border-4 border-t border-namjaired"></div>
				</div>
				<div class="mt-7 font-medium">
					<w-form class="grid grid-flow-row">
						<div class="md:inline-block">
						<label class="text-sm mb-2">ชื่อ</label>
						<w-input class="mb-7" type="text" color="black" placeholder="ชื่อ" />
						<label class="text-sm mb-2">นามสกุล</label>
						<w-input class="mb-7" type="text" color="black" placeholder="นามสกุล" />
						</div>
						<label class="text-sm mb-2">อีเมล</label>
						<w-input class="mb-7" type="email" color="black" placeholder="เช่น abc@gmail.com" />
						<label class="text-sm mb-2">รหัสผ่าน</label>
						<w-input class="mb-7" type="password" color="black" placeholder="*******" />
					</w-form>
				</div>
				<div class="flex justify-center mt-3 -ml-1 mb-5 w-80 my-10 rounded-xl bg-namjaigreen h-14">
					<w-button color="white" bg-color="transparent" class="text-white text-base font-semibold"
						type="submit">
						เข้าสู่ระบบ</w-button>
				</div>
				<div class="flex justify-center text-sm">
					<p>มีบัญชีอยู่แล้วใช่หรือไม่?</p>
					<button bg-color="transparent" class="ml-1 font-semibold">เข้าสู่ระบบ</button>
				</div>
			</div>
	</w-app>
</template>
