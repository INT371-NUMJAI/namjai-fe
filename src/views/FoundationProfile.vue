<template>
	<div class="mt-[120px] mx-[30px] md:mx-20 lg:mt-[60px] lg:mx-0">
		<foundation-name />
		<div class="my-2.5 px-[30px] py-2 space-x-[30px] bg-namjaiwhite rounded-lg flex text-center text-[14px] font-black text-[#5A5A5A]">
			<p>โพสต์</p>
			<p>โครงการ</p>
			<p>จิตอาสา</p>
			<p>เกี่ยวกับ</p>
		</div>
		<div class="mt-2.5">
			<!-- <div name="post" class="grid grid-cols-5 bg-namjaiwhite px-3 py-3 rounded-lg">
				<img class="w-10 h-10 rounded-full object-cover" src="../assets/pic1.png" />
				<div class="col-span-4 grid-flow-row pt-1 space-y-2">
					<w-input placeholder="พิมพ์เนื้อหาประกาศที่นี่" class="font-normal"></w-input>
					<div class="flex justify-between">
						<w-icon class="pt-3" md color="green-dark4">fa fa-picture-o</w-icon>
						<div class="border bg-namjaigreen rounded-md text-xs">
							<w-button color="white">ประกาศ</w-button>
						</div>
					</div>
				</div>
			</div> -->
			<!-- <div name="project">
				<div class="px-[30px] py-2 space-x-4 bg-namjaigreen flex justify-center rounded-lg">
					<w-icon class="pt-2" sm color="white">fa fa-plus</w-icon>
					<p class="font-black text-namjaiwhite">เพิ่มโครงการบริจาค</p>
				</div>
			</div> -->
			<div name="volunteer">
				<div class="px-[30px] py-2 space-x-4 bg-namjaigreen flex justify-center rounded-lg">
					<w-icon class="pt-2" sm color="white">fa fa-plus</w-icon>
					<p class="font-black text-namjaiwhite">เพิ่มโครงการจิตอาสา</p>
				</div>
				<volunteer-activity-block />
			</div>
		</div>
		
	</div>
	<!-- <div class="hidden md:flex flex-col md:flex-row md:min-h-screen w-full">
		<div class="flex flex-col w-full md:w-64 text-gray-700 bg-white flex-shrink-0">
			<nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
				<a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">บัญชี</a>
				<a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">ข้อความ</a>
				<a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">สถิติ</a>
			</nav>
		</div>
	</div> -->
</template>

<script>
import FoundationName from '../components/FoundationName.vue'
import VolunteerActivityBlock from '../components/VolunteerActivityBlock.vue'

export default {
    components:{
        "foundation-name": FoundationName,
        VolunteerActivityBlock,
    },
}
</script>