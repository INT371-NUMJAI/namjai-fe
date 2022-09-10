<template>
	<div class="mt-[120px] mx-[30px] md:mx-20 lg:my-[60px] lg:mx-[177px] lg:grid lg:grid-cols-12 lg:gap-[30px]">
		<div name="sidebar" class="hidden md:hidden lg:block lg:col-span-2 lg:mt-[120px]">
			<div class="">
				<nav class="overflow-y-auto">
					<a class="flex pl-6 py-2 mt-2 text-[20px] text-namjaidarkgray gap-5 rounded-lg hover:bg-yellow-200 focus:bg-namjaiyellow" href="#"><w-icon lg color="green-dark4">fa fa-user</w-icon>บัญชี </a>
					<a class="flex pl-6 py-2 mt-2 text-[20px] text-namjaidarkgray gap-5 rounded-lg hover:bg-yellow-200 focus:bg-namjaiyellow" href="#"><w-icon lg color="green-dark4">fa fa-commenting-o</w-icon>ข้อความ </a>
					<a class="flex pl-6 py-2 mt-2 text-[20px] text-namjaidarkgray gap-5 rounded-lg hover:bg-yellow-200 focus:bg-namjaiyellow" href="#"><w-icon lg color="green-dark4">fa fa-bar-chart</w-icon>สถิติ </a>
				</nav>
			</div>
		</div>
		<div name="spacecolumn"></div>
		<div class="lg:col-span-9">
			<foundation-name />
			<div class="my-5 px-[30px] py-3 lg:py-4 space-x-[30px] md:space-x-[50px] lg:space-x-[60px] bg-namjaiwhite rounded-lg flex text-center text-[14px] lg:text-[16px] font-black text-[#5A5A5A]">
				<button><p>โพสต์</p></button>
				<button><p>โครงการ</p></button>
				<button><p>จิตอาสา</p></button>
				<button><p>เกี่ยวกับ</p></button>
			</div>
			<div class="mt-5">
				<div name="post" class="space-y-[30px]">
					<div name="postblock" class="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-12 bg-namjaiwhite px-4 py-4 md:px-5 md:py-6 lg:px-6 lg:py-6 rounded-lg">
						<img class="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full object-cover" src="../assets/pic1.png" />
						<div class="col-span-4 md:col-span-9 lg:col-span-11 grid-flow-row lg:px-1">
							<textarea name="postblock" class="w-full text-namjaiblack text-[14px] lg:text-[16px] pt-2 tracking-wide" placeholder="พิมพ์เนื้อหาประกาศที่นี่"></textarea>
							<div class="flex justify-between -mt-1">
								<div class="flex space-x-4">
									<w-icon class="pt-1" md color="green-dark4">fa fa-picture-o</w-icon>
									<h1 class="invisible lg:visible lg:text-[16px] lg:text-namjaigreen">เพิ่มรูปภาพ</h1>
								</div>

								<div class="border bg-namjaigreen rounded-lg text-xs md:text-sm lg:text-[16px] md:px-1 lg:px-2 py-1">
									<w-button color="white">ประกาศ</w-button>
								</div>
							</div>
						</div>
					</div>
					<div name="postdetailblock">
						<div class="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-12 bg-namjaiwhite px-4 py-4 md:px-5 md:py-6 lg:px-6 lg:py-6 rounded-lg">
							<img class="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full object-cover" src="../assets/pic1.png" />
							<div class="col-span-4 md:col-span-9 lg:col-span-11 grid-flow-row space-y-2 md:space-y-3 lg:space-y-3 mt-1 lg:px-1 text-[14px] lg:text-[16px]">
								<h1 class="text-namjaidarkgray">มูลนิธิกระจากเงา</h1>
								<p class="trancking-wide"></p>
								<img class="w-full h-[188px] md:w-full md:h-[240px] lg:w-full lg:h-[278px] rounded-xl object-cover" src="" />
							</div>
						</div>
					</div>
				</div>
				<!-- <div name="project">
          <div
            class="w-full lg:w-[190px] px-[30px] lg:px-4 py-2 space-x-4 lg:space-x-2 bg-namjaigreen flex justify-center rounded-lg"
          >
            <w-icon class="pt-2" sm color="white">fa fa-plus</w-icon>
            <p class="font-black text-namjaiwhite">เพิ่มโครงการบริจาค</p>
          </div>
        </div> -->
				<div name="volunteer">
					<div class="w-full lg:w-[200px] px-[30px] lg:px-4 py-2 space-x-4 lg:space-x-2 bg-namjaigreen flex justify-center rounded-lg">
						<w-icon class="pt-2" sm color="white">fa fa-plus</w-icon>
						<p class="font-black text-namjaiwhite">เพิ่มโครงการจิตอาสา</p>
					</div>
					<volunteer-activity-card />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import FoundationName from "../components/FoundationName.vue";
import VolunteerActivityCard from "../components/Volunteer/VolunteerActivityCard.vue";

export default {
	components: {
		"foundation-name": FoundationName,
		"volunteer-activity-card": VolunteerActivityCard,
	},
};
</script>
