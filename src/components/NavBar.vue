<template>
	<w-app>
		<nav class="bg-namjaigreen flex items-center justify-between px-7 py-5 md:py-5 md:px-11 drop-shadow-md">
			<div class="flex items-center text-white">
				<img class="w-28" src="../assets/namjai.png" />
			</div>
			<div class="md:hidden">
				<w-icon color="white">fa fa-bars</w-icon>
			</div>
			<div class="hidden md:flex md:space-x-11 items-center text-white md:font-semibold">
				<w-button bg-color="transparent" class="p-4 border-2">มูลนิธิ</w-button>
				<w-button bg-color="transparent" class="p-4 border-2">โครงการ</w-button>
				<w-button bg-color="transparent" class="p-4 border-2">จิตอาสา</w-button>
				<w-button bg-color="transparent" class="p-4 border-2">เกี่ยวกับเรา</w-button>
				<w-button bg-color="transparent" round outline class="p-4 border-2">เข้าสู่ระบบ</w-button>
			</div>
		</nav>
	</w-app>
</template>
