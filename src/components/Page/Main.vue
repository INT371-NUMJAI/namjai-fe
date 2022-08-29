<template>
	<div class="">
		<div id="sec1" class="mx-[177px] mt-[146px] mb-[80px]">
			<img class="object-cover w-[1086px] h-[460px] rounded-[20px]" src="@/assets/pic1.png" />
		</div>

		<div id="sec2" class="bg-[#FFFCF4] pt-[60px]">
			<div class="mx-[177px]">
				<h1 class="text-[30px] font-black text-namjaidarkgray">สานต่อโครงการที่กำลังดำเนินอยู่</h1>
				<p class="pt-5 text-xl font-bold text-[#6A6A6A]">หากคุณกำลังมองหาโครงการที่กำลังเปิดอยู่</p>
				<p class="pt-2 text-xl font-bold text-[#6A6A6A]">นี่คือบางส่วนของโครงการที่กำลังเปิดอยู่ในขณะนี้ บริจาคเลย</p>
				<div class="pt-10 space-y-[30px]">
					<volunteer-activity-block />
					<volunteer-activity-block />
				</div>
				<!-- <div class=" justify-center items-center">
					<w-button bg-color="transparent" class="py-10 space-x-2 mx-auto justify-center items-center">
					<p class="font-extrabold text-namjaigreen delay-150 duration-300">ไปหน้าโครงการ</p>
					<w-icon class="animate-bounce" color="green-dark4">fa fa-chevron-right</w-icon>
				</w-button>
				</div> --><router-link to="/project">
					<div class="py-10 flex space-x-2 justify-center items-center">
						<p class="font-extrabold text-namjaigreen">ไปหน้าโครงการ</p>
						<w-icon class="animate-bounce" color="namjaigreen">fa fa-chevron-right</w-icon>
					</div>
				</router-link>
			</div>
		</div>

		<div id="sec3" class="mx-[177px] py-[60px]">
			<h1 class="text-[30px] font-black text-namjaidarkgray">ให้การบริจาค</h1>
			<h1 class="pt-2 text-[30px] font-black text-namjaidarkgray">เป็นเรื่องง่ายไม่กี่ขั้นตอน</h1>
			<div class="pt-[60px]">
				<div class="mx-[140px] flex items-center">
					<div name="step1" class="rounded-full h-[60px] w-[60px] py-3.5 bg-[#FFB300]">
						<h1 class="text-2xl text-namjaibeige text-center">1</h1>
					</div>
					<div class="flex-auto border-t-2 border-namjaigray"></div>
					<div name="step2" class="rounded-full h-[60px] w-[60px] py-3.5 bg-[#FFB300]">
						<h1 class="text-2xl text-namjaibeige text-center">2</h1>
					</div>
					<div class="flex-auto border-t-2 border-namjaigray"></div>
					<div name="step3" class="rounded-full h-[60px] w-[60px] py-3.5 bg-[#FFB300]">
						<h1 class="text-2xl text-namjaibeige text-center">3</h1>
					</div>
					<!-- <hr class="outline-dashed outline-namjaigreen">
					<div class="grid grid-cols-3">
						<div class="w-[60px] h-[60px] rounded-full bg-[#FFB300]">
							<h1 class="text-2xl text-namjaibeige text-center py-3.5">1</h1>
						</div>		
					</div> -->
				</div>
				<div class="flex items-center py-[40px]">
					<img class="w-[210px] h-[92px] flex-auto" src="@/assets/click.svg" />
					<img class="w-[159px] h-[175px] flex-auto" src="@/assets/scan.svg" />
					<img class="w-[204px] h-[104px] flex-auto" src="@/assets/complete.svg" />
				</div>
				<div class="grid grid-cols-3">
					<div class="mx-auto space-y-5">
						<h1 class="text-2xl text-center text-namjaidarkgray">เลือกบริจาค</h1>
						<p class="w-[230px] text-center text-[#6A6A6A] font-black">เลือกโครงการที่คุณต้องการบริจาคและกดเลือกที่ปุ่มบริจาค</p>
					</div>
					<div class="mx-auto space-y-5">
						<h1 class="text-2xl text-center text-namjaidarkgray">สแกนบริจาค</h1>
						<p class="w-[250px] text-center text-[#6A6A6A] font-black">สแกน QR Code บน Moblie Banking และใส่ยอดเงินที่ต้องการบริจาค</p>
					</div>
					<div class="mx-auto space-y-5">
						<h1 class="text-2xl text-center text-namjaidarkgray">ยืนยันบริจาค</h1>
						<p class="w-[250px] text-center text-[#6A6A6A] font-black">เช็ครายละเอียดและกดยืนยัน <br />เย้! คุณบริจาคสำเร็จแล้ว</p>
					</div>
				</div>
			</div>
		</div>

		<div id="sec4" class="bg-[#FFFCF4] pt-[60px]">
			<div class="mx-[177px]">
				<h1 class="text-[30px] font-black text-namjaidarkgray">โปรแกรมจิตอาสา</h1>
				<p class="pt-5 text-xl font-bold text-[#6A6A6A]">อยากออกไปช่วยเหลือผู้คนในพื้นที่</p>
				<p class="pt-2 text-xl font-bold text-[#6A6A6A]">มีโครงการจิตอาสามากมายที่รอคอยอยู่ ตามหาโครงการที่ใช่สำหรับคุณ</p>

				<vueper-slides class="no-shadow pt-10" :visible-slides="3" :gap="3" :slide-ratio="1 / 3" :dragging-distance="70">
					<vueper-slide v-for="i in 9" :key="i" :title="i.toString()" class="bg-lime-300" />
				</vueper-slides>

				<div class="py-10 flex space-x-2 justify-center items-center">
					<p class="font-extrabold text-namjaigreen">ไปหน้าจิตอาสา</p>
					<w-icon class="animate-bounce" color="namjaigreen">fa fa-chevron-right</w-icon>
				</div>
			</div>
		</div>

		<div id="sec5" v-on:scroll="scrollExpand" class="expand">
			<div class="mx-[177px] py-[60px] grid grid-cols-12 gap-[30px]">
				<img class="object-cover w-[714px] h-[408px] col-span-8" src="@/assets/sec5.png" />
				<div class="col-span-4 py-10 space-y-[40px]">
					<h1 class="text-2xl font-semibold text-namjaidarkgray text-center mx-10 leading-relaxed">โอกาสที่จะได้อาสาเพื่อ แบ่งปันความช่วยเหลือ</h1>
					<p class="text-justify font-medium text-[#6A6A6A] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				</div>
			</div>
		</div>

		<!-- <div id="sec5" class="mx-[177px] py-[60px] grid grid-cols-12 gap-[30px]">
			<img class="object-cover w-[714px] h-[408px] col-span-8" src="@/assets/sec5.png" />
			<div class="col-span-4 py-10 space-y-[40px]">
				<h1 class="text-2xl font-semibold text-namjaidarkgray text-center mx-10 leading-relaxed">โอกาสที่จะได้อาสาเพื่อ แบ่งปันความช่วยเหลือ</h1>
				<p class="text-justify font-medium text-[#6A6A6A] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
			</div>
		</div> -->

		<div id="sec6" class="bg-[#FFFCF4] pt-[60px] pb-[80px]">
			<div class="mx-[177px]">
				<h1 class="text-[30px] font-black text-namjaidarkgray">กระดานข่าวสาร</h1>
				<p class="pt-5 text-xl font-bold text-[#6A6A6A]">Lorem ipsum dolor sit amet,</p>
				<p class="pt-2 text-xl font-bold text-[#6A6A6A]">consectetur adipiscing elit, sed do eiusmod tempor</p>
				<div name="card" class="pt-10 flex gap-[30px]">
					<div name="card1" class="w-[342px] h-[440px] bg-white rounded-xl shadow-md hover:ring-1 hover:ring-gray-600/25 hover:ring-inset hover:drop-shadow-xl hover:shadow-gray-600/25 p-5">
						<div class="flex justify-between">
							<div class="flex space-x-3.5 items-center">
								<img class="object-cover w-8 h-8 rounded-full" src="@/assets/sec5.png" />
								<h2 class="w-36 text-xs font-black">มูลนิธิเพื่อนพึ่งพายามยาก</h2>
							</div>
							<span class="text-[10px] pt-2.5">23 เม.ย. 65</span>
						</div>
						<h2 class="w-[310px] h-[76px] my-5 font-black overflow-hidden">สภากาชาดไทยจับมือองค์กรชั้นนำร่วมพาประเทศไทย เข้าสู่นวัตกรรมส่งเสริมความยั่งยืนวงการแพทย์</h2>
						<img class="w-full h-[173px]" src="@/assets/pic1.png" />
						<p class="h-[65px] my-5 text-[14px] tracking overflow-hidden">จากการ์ตูนตำรวจสาวป้อมยามตอนสิบฉากที่เด็กทารกเสียชีวิตเพราะรถชนแล้วหลุดออกมาจากรถออกมากระแทกพื้นถนนจนร่างกายผิดรูปเสียชีวิตคาที่อันนี้ตามข้อเท็จจริงเลยครับ..</p>
					</div>
					<div name="card2" class="w-[342px] h-[440px] bg-white rounded-xl shadow-md hover:ring-1 hover:ring-gray-600/25 hover:ring-inset hover:drop-shadow-xl hover:shadow-gray-600/25 p-5">
						<div class="flex justify-between items-center">
							<div class="flex space-x-3.5 items-center">
								<img class="object-cover w-8 h-8 rounded-full" src="@/assets/sec5.png" />
								<h2 class="w-36 text-xs font-black">มูลนิธิเพื่อนพึ่งพายามยาก</h2>
							</div>
							<span class="text-[10px]">23 เม.ย. 65</span>
						</div>
						<h2 class="w-[310px] h-[76px] my-5 font-black overflow-hidden">สภากาชาดไทยจับมือองค์กรชั้นนำร่วมพาประเทศไทย เข้าสู่นวัตกรรมส่งเสริมความยั่งยืนวงการแพทย์</h2>
						<img class="w-full h-[173px]" src="@/assets/pic1.png" />
						<p class="h-[65px] my-5 text-[14px] overflow-hidden">จากการ์ตูนตำรวจสาวป้อมยามตอนสิบฉากที่เด็กทารกเสียชีวิตเพราะรถชนแล้วหลุดออกมาจากรถออกมากระแทกพื้นถนนจนร่างกายผิดรูปเสียชีวิตคาที่อันนี้ตามข้อเท็จจริงเลยครับ..</p>
					</div>
					<div name="subcard" class="shadow-md rounded-[10px] bg-white">
						<!-- <div name="sub1" class="w-[342px]  px-5 py-4 bg-white hover:shadow-lg hover:shadow-namjaired/25 space-y-[10px] rounded-[10px]">
							<div class="flex justify-between items-center">
								<h2 class="text-xs">มูลนิธิเพื่อนพึ่งพายามยาก</h2>
								<span class="text-[10px]">23 เม.ย. 65</span>
							</div>
							<h2 class="text-[14px]">สภากาชาดไทยจับมือองค์กรชั้นนำร่วมพาประเทศไทยเข้าสู่นวัตกรรมส่งเสริมความยั่งยืนวงการแพทย์จากการ์ตูน กดเ้กดี้เีกด้เดก้เ</h2>
						</div> -->
						<div name="sub4" class="w-[342px] h-[110px] px-5 py-3 bg-white hover:ring-1 hover:ring-gray-600/25 hover:ring-inset hover:drop-shadow-xl hover:shadow-gray-600/25 space-y-[8px] rounded-[10px]">
							<div class="flex justify-between items-center text-[10px]">
								<h2 class="">มูลนิธิเพื่อนพึ่งพายามยาก</h2>
								<span class="">23 เม.ย. 65</span>
							</div>
							<h2 class="text-xs leading-5 overflow-hidden">สภากาชาดไทยจับมือองค์กรชั้นนำร่วมพาประเทศไทยเข้าสู่นวัตกรรมส่งเสริมความยั่งยืนวงการแพทย์จากการ์ตูน กดเ้กดี้เีกด้เดก้เ</h2>
						</div>
						<div name="sub4" class="w-[342px] h-[110px] px-5 py-3 bg-white hover:ring-1 hover:ring-gray-600/25 hover:ring-inset hover:drop-shadow-xl hover:shadow-gray-600/25 space-y-[8px] rounded-[10px]">
							<div class="flex justify-between items-center text-[10px]">
								<h2 class="">มูลนิธิเพื่อนพึ่งพายามยาก</h2>
								<span class="">23 เม.ย. 65</span>
							</div>
							<h2 class="text-xs leading-5 overflow-hidden">สภากาชาดไทยจับมือองค์กรชั้นนำร่วมพาประเทศไทยเข้าสู่นวัตกรรมส่งเสริมความยั่งยืนวงการแพทย์จากการ์ตูน กดเ้กดี้เีกด้เดก้เ</h2>
						</div>
						<div name="sub4" class="w-[342px] h-[110px] px-5 py-3 bg-white hover:ring-1 hover:ring-gray-600/25 hover:ring-inset hover:drop-shadow-xl hover:shadow-gray-600/25 space-y-[8px] rounded-[10px]">
							<div class="flex justify-between items-center text-[10px]">
								<h2 class="">มูลนิธิเพื่อนพึ่งพายามยาก</h2>
								<span class="">23 เม.ย. 65</span>
							</div>
							<h2 class="text-xs leading-5 overflow-hidden">สภากาชาดไทยจับมือองค์กรชั้นนำร่วมพาประเทศไทยเข้าสู่นวัตกรรมส่งเสริมความยั่งยืนวงการแพทย์จากการ์ตูน กดเ้กดี้เีกด้เดก้เ</h2>
						</div>
						<div name="sub4" class="w-[342px] h-[110px] px-5 py-3 bg-white hover:ring-1 hover:ring-gray-600/25 hover:ring-inset hover:drop-shadow-xl hover:shadow-gray-600/25 space-y-[8px] rounded-[10px]">
							<div class="flex justify-between items-center text-[10px]">
								<h2 class="">มูลนิธิเพื่อนพึ่งพายามยาก</h2>
								<span class="">23 เม.ย. 65</span>
							</div>
							<h2 class="text-xs leading-5 overflow-hidden">สภากาชาดไทยจับมือองค์กรชั้นนำร่วมพาประเทศไทยเข้าสู่นวัตกรรมส่งเสริมความยั่งยืนวงการแพทย์จากการ์ตูน กดเ้กดี้เีกด้เดก้เ</h2>
						</div>
					</div>
				</div>
				<!-- ****** Not sure about news page ******
				<div class="pt-10 flex space-x-2 justify-center items-center ">
					<p class="font-extrabold text-namjaigreen">ไปหน้าจิตอาสา</p>
					<w-icon class="animate-bounce" color="namjaigreen">fa fa-chevron-right</w-icon>
				</div> -->
			</div>
		</div>

		<div @scroll="scrollExpand" class="container">
			<div id="expand"></div>
		</div>

		<div id="sec7" class="relative">
			<img class="w-[1440px] h-[200px]" src="@/assets/sec7.png" />
			<div class="mx-[177px] absolute top-16 left-0 right-0 px-4 grid grid-cols-12 gap-[30px]">
				<div class="col-span-3">
					<h1 class="text-5xl text-white text-center underline underline-offset-[12px] decoration-[6px] decoration-namjaired">598,900</h1>
					<h1 class="pt-5 text-white text-center">ยอดบริจาคทั้งหมด</h1>
				</div>
				<div class="col-span-3">
					<h1 class="text-5xl text-white text-center underline underline-offset-[12px] decoration-[6px] decoration-namjaired">136</h1>
					<h1 class="pt-5 text-white text-center">มูลนิธิที่เข้าร่วม</h1>
				</div>
				<div class="col-span-3">
					<h1 class="text-5xl text-white text-center underline underline-offset-[12px] decoration-[6px] decoration-namjaired">1,479</h1>
					<h1 class="pt-5 text-white text-center">โครงการ</h1>
				</div>
				<div class="col-span-3">
					<h1 class="text-5xl text-white text-center underline underline-offset-[12px] decoration-[6px] decoration-namjaired">861</h1>
					<h1 class="pt-5 text-white text-center">จิตอาสา</h1>
				</div>
			</div>
		</div>

		<!-- <div class="zoom" @scroll="expandScroll">  
			<img class="object-cover w-[1086px] h-[460px] rounded-[20px]" src="@/assets/pic1.png" />
		</div> -->
	</div>
</template>

<style scoped>
.zoom {
	height: 100vh;
	width: 100%;
	display: grid;
	place-items: center;
	position: fixed;
	top: 0;
	left: 0;
}
.namjaigreen {
	color: #00715d;
}

/* .expand {
	background: tomato;
  min-height: 400px;
  min-width: 20%;
  will-change: width;
} */
</style>

<script>
import VolunteerActivityCard from "@/components/Volunteer/VolunteerActivityCard.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
	components: {
		"volunteer-activity-card": VolunteerActivityCard,
		VueperSlides,
		VueperSlide,
	},
	methods: {
		expandScroll() {
			const zoomElement = document.querySelector(".zoom");
			let zoom = 1;
			const ZOOM_SPEED = 0.1;
			document.addEventListener("wheel", function (e) {
				if (e.deltaY > 0) {
					zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
				} else {
					zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
				}
			});
		},
		// scrollExpand(){
		// 	var expandDiv = document.getElementById("expand");
		// 	var speed = 5;

		// 	function expanding() {
		// 		var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically
		// 		var scrollAndSpeed = (scrolltop / speed);
		// 		//Expand using transform
		// 		//expandDiv.style.transform = "scalex( " + Math.min(Math.max(scrollAndSpeed, 1), 10) + ")";

		// 		//Or using width
		// 		expandDiv.style.width = Math.min(Math.max(scrollAndSpeed, 20), 95) + "%";
		// 	}

		// 	window.addEventListener('scroll', function() { // on page scroll
		// 	requestAnimationFrame(expanding); // call parallaxing()
		// 	}, false);
		// }
	},
};
</script>
