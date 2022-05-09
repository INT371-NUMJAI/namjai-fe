<template>
	<div>
		<nav class="bg-namjaigreen flex items-center justify-between px-7 py-3 md:py-3 md:px-11 drop-shadow-md">
			<div class="flex items-center text-white">
				<router-link to="/"> <img class="w-28" src="../assets/namjai.png" /></router-link>
			</div>
			<div class="hidden md:flex md:space-x-11 items-center text-white font-semibold">
				<button class="bg-transparent font-medium">มูลนิธิ</button>
				<button class="bg-transparent font-medium">โครงการ</button>
				<button class="bg-transparent font-medium">จิตอาสา</button>
				<button class="bg-transparent font-medium">เกี่ยวกับเรา</button>
				<router-link to="/login">
					<button class="p-2 font-medium bg-transparent border-2 rounded-lg w-auto h-auto">
						เข้าสู่ระบบ
					</button></router-link
				>
			</div>
		</nav>
	</div>
</template>
