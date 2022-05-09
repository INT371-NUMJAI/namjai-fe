<template>
	<w-app>
		<nav class="bg-namjaigreen flex items-center justify-between px-7 py-6 lg:py-4 lg:px-11 drop-shadow-md lg:fixed lg:w-screen">
            <div class="flex items-center text-white">
                <img class="w-28" src="../assets/namjai.png" />
            </div>
            <div class="lg:hidden">
                <w-icon color="white">fa fa-bars</w-icon>
            </div>
            <div class="hidden lg:flex lg:space-x-11 items-center text-white lg:text-sm">
                <w-button bg-color="transparent" class="font-medium">มูลนิธิ</w-button>
                <w-button bg-color="transparent" class="font-medium">โครงการ</w-button>
                <w-button bg-color="transparent" class="font-medium">จิตอาสา</w-button>
                <w-button bg-color="transparent" class="font-medium">เกี่ยวกับเรา</w-button>
                <w-button bg-color="transparent" round outline class="py-4 font-medium">เข้าสู่ระบบ</w-button>
            </div>
        </nav>
	</w-app>
</template>
