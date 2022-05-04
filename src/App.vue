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
				<w-button bg-color="transparent" round outline class="py-4 font-medium">เข้าสู่ระบบ</w-button>
			</div>
		</nav>
			<div class="lg:flex md:justify-end hidden">
				<div class="lg:w-1/3 lg:h-screen lg:bg-namjaigreen">
				</div>
			</div>
			<div
				class="bg-namjaiwhite lg:bg-transparent lg:mx-28 md:px-20 p-10 mt-80 lg:mt-20 lg:h-screen h-screen w-full lg:w-fit rounded-t-3xl md:rounded-t-3xl md:rounded-none fixed">
				<div class="-my-10 lg:hidden float-right">
					<div class="w-24 h-20 bg-namjaiyellow rounded-b-full"></div>
				</div>
				<h1 class="text-namjaiblack font-bold text-2xl lg:text-5xl">ยินดีต้อนรับ!</h1>
				<div class="py-4">
					<div class="w-16 border-4 border-t border-namjaired"></div>
				</div>
				<div class="mt-7 font-medium lg:w-80 lg:mt-10">
					<w-form class="grid grid-flow-row">
						<label class="text-sm mb-2">อีเมล</label>
						<w-input class="mb-10" type="email" color="black" placeholder="เช่น abc@gmail.com" />
						<label class="text-sm mb-2">รหัสผ่าน</label>
						<w-input class="mb-10" type="password" color="black" placeholder="*******" />
					</w-form>
				</div>
				<div class="lg:block lg:w-80">
				<div class="md:mx-auto mx-auto flex justify-center mt-3 mb-5 bg-namjaigreen h-14 w-80 my-10 rounded-xl">
					<w-button color="white" bg-color="transparent" class="text-white text-base font-semibold"
						type="submit">
						เข้าสู่ระบบ</w-button>
				</div>
				<div class="flex justify-center text-sm">
					<p>ยังไม่มีบัญชีใช่หรือไม่?</p>
					<button bg-color="transparent" class="ml-1 font-semibold">ลงทะเบียน</button>
				</div>
				</div>
			</div>
			<img class="hidden lg:block lg:w-2/5 lg:absolute lg:top-44 lg:right-48 lg:z-10" src="../src/assets/pic1.png" />
			<img class="hidden lg:block lg:w-3/5 lg:absolute lg:top-24 lg:right-14 lg:-z-0" src="../src/assets/pic2.png" />			
	</w-app>
</template>
