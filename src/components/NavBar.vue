<template>
	<div>
		<nav class="bg-namjaigreen flex items-center justify-between px-7 py-3 md:py-3 md:px-11 drop-shadow-md">
			<div class="flex items-center text-white">
				<img class="w-28" src="../assets/namjai.png" />
			</div>
			<div class="md:hidden">
				<w-icon color="white">fa fa-bars</w-icon>
			</div>
			<div class="hidden md:flex md:space-x-11 items-center text-white font-semibold">
				<w-button bg-color="transparent" class="font-medium">มูลนิธิ</w-button>
				<w-button bg-color="transparent" class="font-medium">โครงการ</w-button>
				<w-button bg-color="transparent" class="font-medium">จิตอาสา</w-button>
				<w-button bg-color="transparent" class="font-medium">เกี่ยวกับเรา</w-button>
				<router-link to="/about">
					<w-button bg-color="transparent" round outline class="py-4 bd4 font-medium"
						>เข้าสู่ระบบ</w-button
					></router-link
				>
			</div>
		</nav>
	</div>
</template>
