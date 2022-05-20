<template>
  <div
    class="mt-[120px] mx-[30px] md:mx-20 lg:my-[60px] lg:mx-[177px] lg:grid lg:grid-cols-12 lg:gap-[30px]"
  >
    <div class="col-span-2"></div>
    <div name="spacecolumn"></div>
    <div class="lg:col-span-9">
      <foundation-name />
      <div
        class="my-5 px-[30px] py-3 lg:py-5 space-x-[30px] lg:space-x-[60px] bg-namjaiwhite rounded-lg flex text-center text-[14px] lg:text-[16px] font-black text-[#5A5A5A]"
      >
        <a><p>โพสต์</p></a>
        <p>โครงการ</p>
        <p>จิตอาสา</p>
        <p>เกี่ยวกับ</p>
      </div>
      <div class="mt-5">
        <div
          name="post"
          class="space-y-[30px]"
        >
          <div name="postblock" class="grid grid-cols-5 lg:grid-cols-12 bg-namjaiwhite px-4 py-4 lg:px-6 lg:py-6 rounded-lg">
            <img
              class="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full object-cover"
              src="../assets/pic1.png"
            />
            <div class="col-span-4 lg:col-span-11 grid-flow-row lg:px-1">
              <textarea
                name="postblock"
                class="w-full text-namjaiblack text-[14px] lg:text-[16px] pt-2 tracking-wide"
                placeholder="พิมพ์เนื้อหาประกาศที่นี่"
              ></textarea>
              <div class="flex justify-between -mt-1">
                <div class="flex space-x-4">
                  <w-icon class="pt-1" md color="green-dark4">fa fa-picture-o</w-icon>
                  <h1 class="invisible lg:visible lg:text-[16px] lg:text-namjaigreen">เพิ่มรูปภาพ</h1>
                </div>
               
                <div class="border bg-namjaigreen rounded-lg text-xs lg:text-[16px] lg:px-2 py-1">
                  <w-button color="white">ประกาศ</w-button>
                </div>
              </div>
            </div>
          </div>
          <div name="postdetailblock">
            <div class="grid grid-cols-5 lg:grid-cols-12 bg-namjaiwhite px-4 py-4 lg:px-6 lg:py-6 rounded-lg">
              <img
              class="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full object-cover"
              src="../assets/pic1.png"/>
              <div class="col-span-4 lg:col-span-11 grid-flow-row space-y-2 mt-1 lg:px-1 text-[14px] lg:text-[16px]">
                <h1 class="text-namjaidarkgray">มูลนิธิกระจากเงา</h1>
                <p class="trancking-wide">จากการ์ตูน ตำรวจสาวป้อมยามตอนสิบฉากที่เด็ก ทารกเสียชีวิต เพราะรถชนแล้วหลุดออกมาจากรถ ออกมากระแทกพื้นถนนจนร่างกายผิดรูปเสียชีวิตคาที่อันนี้ตามข้อเท็จจริงเลยครับ คือไม่ว่าพ่อแม่จะอุ้ม ลูกดูยังไงก็ตาม แต่ถ้ารถหยุดกระทันหันเพราะ อุบัติเหตุหรืออะไรก็ตาม สมมุติเด็กหนักซักห้าหกกิโล เมื่อรถหยุดทันที สมมุติแล้นมาด้วยความเร็วซัก หก สิบกิโลต่อชมเด็กก็จะยังเคลื่อนที่ไปข้างหน้าด้วยความเร็วนั้น ลองนึกภาพดัมเบลเหล็กห้ากิโลที่พุ่งไปด้วย ความเร็วหกสิบกิโลเมตรต่อชั่วโมง </p>
                <img
              class="w-[251px] h-[188px] lg:w-full lg:h-[278px] rounded-xl object-cover"
              src="../assets/pic1.png"/>
              </div>
            </div>
          </div>
        </div>
        <!-- <div name="project">
				<div class="px-[30px] py-2 space-x-4 bg-namjaigreen flex justify-center rounded-lg">
					<w-icon class="pt-2" sm color="white">fa fa-plus</w-icon>
					<p class="font-black text-namjaiwhite">เพิ่มโครงการบริจาค</p>
				</div>
			</div> -->
        <!-- <div name="volunteer">
				<div class="px-[30px] py-2 space-x-4 bg-namjaigreen flex justify-center rounded-lg">
					<w-icon class="pt-2" sm color="white">fa fa-plus</w-icon>
					<p class="font-black text-namjaiwhite">เพิ่มโครงการจิตอาสา</p>
				</div>
				<volunteer-activity-block />
			</div> -->
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
import FoundationName from "../components/FoundationName.vue";
import VolunteerActivityBlock from "../components/VolunteerActivityBlock.vue";

export default {
  components: {
    "foundation-name": FoundationName,
    VolunteerActivityBlock,
  },
};
</script>
