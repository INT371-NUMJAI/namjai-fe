<template>
	<div class="snap-y snap-mandatory h-screen overflow-scroll">
		<div class="snap-start">
			<div id="section1" class="h-screen overflow-hidden">
				<!-- <div class="lg:hidden">
          <w-image
          :src="`src/assets/pic3.png`"
          :ratio="9 / 16"
          content-class="justify-start"
          no-spinner
          transition=""
        >
          <div class="mx-44 absolute top-[150px] space-y-10 text-white">
            <h1 class="text-6xl">ร่วมเป็นส่วนหนึ่ง</h1>
            <div class="flex space-x-6">
              <h1 class="text-6xl mt-7">แบ่งปัน</h1>
              <h1 class="text-8xl text-namjaiyellow">น้ำใจ</h1>
            </div>
            <div
              class="absolute top-[160px] left-[212px] w-16 border-4 border-t border-namjaired"
            ></div>
            <p class="w-[480px]">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div class="-ml-[325px]">
              <base-button class="w-[156px] -ml-[500px]" label="บริจาคเลย" />
            </div>
          </div>
        </w-image>
        </div> -->
				<div class="">
					<w-image class="lg:w-screen h-screen" :src="`src/assets/pic3.png`" :ratio="500 / 1000" content-class="justify-start" no-spinner transition="">
						<div class="lg:mx-44 md:mx-[40px] mx-[30px] absolute lg:top-[150px] top-[100px] space-y-10 text-white">
							<h1 class="lg:text-6xl md:text-6xl text-5xl">ร่วมเป็นส่วนหนึ่ง</h1>
							<div class="flex lg:space-x-6 md:space-x-6 space-x-2">
								<h1 class="lg:text-6xl md:text-6xl text-5xl lg:mt-7 mt-5">แบ่งปัน</h1>
								<h1 class="lg:text-8xl md:text-8xl text-7xl text-namjaiyellow">น้ำใจ</h1>
							</div>
							<div class="absolute lg:top-[160px] md:top-[160px] top-[120px] lg:left-[212px] md:left-[210px] left-[160px] w-16 border-4 border-t border-namjaired"></div>
							<p class="lg:w-[480px] md:w-[480px] w-[330px]">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
							<div>
								<w-button class="w-[156px] lg:ml-0 ml-0 md:ml-0" label="บริจาคเลย" />
							</div>
						</div>
					</w-image>
				</div>
			</div>
		</div>
		<div class="snap-start">
			<div id="section2" class="h-screen overflow-hidden">
				<h1 class="lg:text-3xl md:text-3xl text-2xl lg:mt-[100px] mt-[60px] text-center text-namjaibrown">สุขใจทั้งผู้ให้ สบายใจทั้งผู้รับ</h1>
				<div class="relative lg:-right-[1270px] md:left-[700px] md:-top-[130px] lg:left-auto lg:-top-[150px] left-[270px] -top-[200px] lg:w-[230px] w-[177px] lg:h-[230px] h-[177px] bg-namjaigray rounded-full"></div>
				<div class="lg:-mt-[125px] -mt-[100px] lg:mx-44 mx-[30px] relative h-[50px]">
					<div class="lg:block hidden absolute right-[40px] -top-[140px] w-0.5 h-[550px] bg-namjaigreen"></div>
					<div class="text-namjaigreen bg-namjaibeige py-[20px] w-[120px] absolute -right-[10px] top-[55px] bottom-auto hidden lg:block">
						<h1 class="opacity-50 text-right" :class="{ onScroll: !view.topOfPage }">FOUNDATION</h1>
						<br />
						<h1 class="opacity-50 text-right" :class="{ onScroll: !view.middleOfPage }">DONOR</h1>
						<br />
						<h1 class="opacity-50 text-right" :class="{ onScroll: !view.bottomOfPage }">VOLUNTEER</h1>
					</div>
					<div class="overflow-hidden">
						<div @scroll="handleScroll" id="scrollDemo" class="overflow-y-auto snap-y snap-mandatory lg:mt-0 md:mt-[40px] mt-7 lg:h-[297px] md:h-auto h-[340px] lg:w-auto md:w-screen w-[400px] space-y-4 md:space-y-6">
							<div class="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 snap-center">
								<img class="lg:-mx-5 mx-0 lg:w-[528px] md:w-[367px] w-[330px] z-20" src="@/assets/pic1.png" alt="" />
								<div class="lg:my-auto">
									<h1 class="block lg:hidden text-namjaigreen text-2xl mt-[40px] mb-[10px]">FOUNDATION</h1>
									<p class="lg:w-[372px] z-20 my-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div class="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 snap-center">
								<img class="lg:-mx-5 mx-0 lg:w-[528px] md:w-[367px] w-[330px] z-20" src="@/assets/pic1.png" alt="" />
								<div class="lg:my-auto">
									<h1 class="block lg:hidden text-namjaigreen text-2xl mt-[40px] mb-[10px]">DONOR</h1>
									<p class="w-[372px] z-20 my-auto">
										{{ div1 }}
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</p>
								</div>
							</div>
							<div class="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 snap-center">
								<img class="lg:-mx-5 mx-0 lg:w-[528px] md:w-[367px] w-[330px] z-20" src="@/assets/pic1.png" alt="" />
								<div class="lg:my-auto">
									<h1 class="block lg:hidden text-namjaigreen text-2xl mt-[40px] mb-[10px]">VOLUNTEER</h1>
									<p class="w-[372px] z-20 my-auto">
										{{ div2 }}
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<svg class="md:block lg:hidden hidden relative -top-[85px] -z-20" width="455" height="827" viewBox="0 0 475 827" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="60.5" y="30.5" width="324" height="758" rx="9.5" stroke="#00715D" />
					<circle cx="403" cy="754" r="73" fill="#D45343" />
					<rect width="157" height="129" rx="10" fill="#FDD65B" />
				</svg>

				<svg class="lg:w-[675px] lg:h-[486px] md:hidden relative lg:-top-[130px] -top-[60px] md:-top-[20px] md:left-[140px] lg:left-[72px] -z-20" viewBox="0 0 675 486" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="173.5" y="33.5" width="391" height="181" rx="9.5" stroke="#00715D" />
					<rect x="131.5" y="248.5" width="391" height="171" rx="9.5" stroke="#00715D" />
					<circle cx="572" cy="383" r="103" fill="#D45343" />
					<rect width="221" height="182" rx="10" fill="#FDD65B" />
				</svg>
			</div>
		</div>
		<div class="snap-start">
			<div id="section3" class="h-screen overflow-hidden bg-namjaiwhite">
				<div class="lg:mt-[130px] md:mt-[80px] mt-[60px] lg:mx-44 md:mx-[40px] mx-[30px]">
					<h1 class="font-thin lg:mb-10 md:mb-[32px] mb-[20px]">OUR FEATURES</h1>
					<div class="flex mb-5">
						<h1 class="text-namjaiyellow lg:text-3xl md:text-3xl text-[18px]">น้ำใจ</h1>
						<h1 class="text-namjaibrown lg:text-3xl md:text-3xl text-[18px] ml-2">ทำให้การบริจาคเป็นเรื่องง่าย</h1>
					</div>
					<div class="mb-[65px]">
						<h1 class="text-namjaidarkgray lg:text-xl md:text-xl text-base lg:w-[425px] md:w-[440px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
					</div>
					<div @scroll="scrollFeature" id="scrollMenu" class="flex space-x-5 lg:space-x-[30px] snap-x snap-mandatory overflow-x-auto">
						<div class="snap-center">
							<div class="bg-namjaibeige lg:w-[342px] md:w-[238px] w-[330px] h-[250px] rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
								<div class="flex p-[10px]">
									<w-icon color="namjai-green" size="70">fa fa-mobile</w-icon>
									<h1 class="text-xl my-auto mx-[10px]">โอนบริจาค</h1>
								</div>
								<w-divider class="mx-[30px]"></w-divider>
								<div class="px-[30px]">
									<h1 class="py-[20px] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
								</div>
							</div>
						</div>
						<div class="snap-center">
							<div class="bg-namjaibeige lg:w-[342px] md:w-[238px] w-[330px] h-[250px] rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
								<div class="flex px-[30px] py-[20px]">
									<w-icon color="namjai-green" size="50" flip-x>fa fa-newspaper-o</w-icon>
									<h1 class="text-xl my-auto mx-[10px]">ข่าวสาร</h1>
								</div>
								<w-divider class="mx-[30px]"></w-divider>
								<div class="px-[30px]">
									<h1 class="py-[20px] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
								</div>
							</div>
						</div>
						<div class="snap-center">
							<div class="bg-namjaibeige lg:w-[342px] md:w-[238px] w-[330px] h-[250px] rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
								<div class="flex px-[30px] py-[20px]">
									<w-icon color="namjai-green" size="50">fa fa-commenting</w-icon>
									<h1 class="text-xl my-auto mx-[10px]">แชท</h1>
								</div>
								<w-divider class="mx-[30px]"></w-divider>
								<div class="px-[30px]">
									<h1 class="py-[20px] text-sm output">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="lg:hidden md:hidden flex space-x-1 mt-4 justify-center">
					<div class="w-[7px] h-[7px] rounded-full bg-namjaigray" :class="{ active: !card.left }"></div>
					<div class="w-[7px] h-[7px] rounded-full bg-namjaigray" :class="{ active: !card.middle }"></div>
					<div class="w-[7px] h-[7px] rounded-full bg-namjaigray" :class="{ active: !card.right }"></div>
				</div>
				<div class="lg:w-[84px] w-[67px] h-[200px] bg-namjaigreen rounded-b-full relative lg:-top-[590px] md:-top-[600px] -top-[620px] left-[300px] lg:left-[1175px] md:left-[650px] -z-0"></div>
			</div>
		</div>
		<div class="snap-start">
			<div id="section4" class="lg:h-screen h-5/6 lg:overflow-hidden bg-namjaiwhite -mt-[200px] lg:mt-0">
				<w-image class="relative md:mx-[40px] lg:top-[100px] md:-top-[320px] lg:left-[135px] right-auto hidden lg:block md:hidden" :src="`src/assets/pic4.png`" :width="1086" :height="285" content-class="justify-start text-namjaiwhite mx-[95px] -mt-[100px]" no-spinner transition="">
					<h1 class="text-4xl leading-relaxed">
						Happiness doesn't result from <br />
						what we get, but from what we give
					</h1>
					<p class="mt-[150px] -mx-[80px]">Ben Carson</p>
					<w-button class="w-[342px] relative top-[142px] right-[440px] bg-namjaiyellow" label="บริจาคเลย"></w-button>
				</w-image>
				<w-image class="relative md:mx-[40px] lg:top-[100px] md:-top-[320px] lg:left-[135px] right-auto hidden lg:hidden md:block" :src="`src/assets/pic4.png`" :width="754" :height="213" content-class="justify-start text-namjaiwhite mx-[50px] -mt-[100px]" no-spinner transition="">
					<h1 class="text-2xl leading-relaxed w-[550px]">
						Happiness doesn't result from <br />
						what we get, but from what we give
					</h1>
					<p class="absolute top-[210px] right-[250px]">Ben Carson</p>
					<w-button class="w-[327px] relative top-[110px] right-[350px] bg-namjaiyellow" label="บริจาคเลย"></w-button>
				</w-image>
				<div class="bg-namjaigreen h-screen">
					<div class="relative lg:top-[355px] top-[710px] flex items-center lg:mx-[175px] mx-[30px]">
						<div class="flex-grow border-t border-namjaiwhite"></div>
					</div>
					<div class="grid grid-rows-5 lg:grid-rows-2 grid-cols-2 lg:grid-cols-9 lg:mx-[175px] mx-[30px] lg:pt-[140px] pt-[50px]">
						<div class="lg:col-span-3 col-span-2">
							<router-link to="/">
								<svg width="156" viewBox="0 0 329 59" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M50.75 7V56H41.44L17.01 26.25V56H5.81V7H15.19L39.55 36.75V7H50.75ZM103.713 45.5H80.9632L76.6232 56H65.0032L86.8432 7H98.0432L119.953 56H108.053L103.713 45.5ZM100.143 36.89L92.3732 18.13L84.6032 36.89H100.143Z" fill="white" />
									<path d="M212.84 56.84C209.527 56.84 206.47 56.2333 203.67 55.02C200.917 53.76 198.653 51.9867 196.88 49.7L203.18 42.14C205.84 45.7333 208.873 47.53 212.28 47.53C216.9 47.53 219.21 44.8233 219.21 39.41V16.1H201.99V7H230.48V38.78C230.48 44.8 228.987 49.3267 226 52.36C223.013 55.3467 218.627 56.84 212.84 56.84ZM281.326 45.5H258.576L254.236 56H242.616L264.456 7H275.656L297.566 56H285.666L281.326 45.5ZM277.756 36.89L269.986 18.13L262.216 36.89H277.756ZM311.049 7H322.389V56H311.049V7Z" fill="white" />
									<path d="M147.083 56.4828C140.083 46.3161 127.583 23.9828 133.583 15.9828C135.082 12.4828 139.882 6.88281 147.083 12.4828C154.283 18.0828 158.083 26.4828 159.083 29.9828C161.249 23.8161 166.283 10.7828 169.083 7.98281C172.583 4.48281 177.583 0.482811 183.583 9.48281C189.583 18.4828 183.083 45.4828 169.083 56.4828" stroke="#D45343" stroke-width="6" />
								</svg>
							</router-link>
							<div class="grid grid-cols-3 -ml-3 w-[120px]">
								<w-icon class="mt-5 mx-auto" color="white" md>fa fa-facebook</w-icon>
								<w-icon class="mt-[18px] justify-center" color="white" lg>fa fa-instagram</w-icon>
								<w-icon class="mt-[18px]" color="white" lg>fa fa-twitter</w-icon>
							</div>
						</div>
						<div class="grid grid-rows-4 col-span- lg:col-span-2 text-namjaiwhite text-sm mb-4 lg:mb-0">
							<p class="lg:pb-4 pb-3">หน้าต่างเว็บไซต์</p>
							<p>หน้าหลัก</p>
							<p>มูลนิธิ</p>
							<p>โครงการ</p>
							<p>ข่าวสาร</p>
						</div>
						<div class="grid grid-rows-4 lg:col-span-2 col-span-1 text-namjaiwhite text-sm mb-4 lg:mb-0">
							<p class="lg:pb-4 pb-3">หน้าต่างเว็บไซต์</p>
							<p>หน้าหลัก</p>
							<p>มูลนิธิ</p>
							<p>โครงการ</p>
							<p>ข่าวสาร</p>
						</div>
						<div class="grid grid-rows-4 text-namjaiwhite text-sm mt-4 lg:mt-0">
							<p class="lg:pb-4 pb-3">หน้าต่างเว็บไซต์</p>
							<p>หน้าหลัก</p>
							<p>มูลนิธิ</p>
							<p>โครงการ</p>
							<p>ข่าวสาร</p>
						</div>
					</div>
					<div class="flex relative lg:-top-[105px] -top-[150px] lg:left-[175px] left-[30px] text-namjaiwhite">
						<h1 class="lg:text-base text-xs">NAMJAI</h1>
						<p class="ml-2 lg:text-base text-xs">is fundrising website created by Boonrod team</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import BaseButton from "../src/components/_Bases/BaseButton.vue";

export default {
	// components: {
	// 	BaseButton,
	// },
	data() {
		return {
			view: {
				topOfPage: false,
				middleOfPage: true,
				bottomOfPage: true,
			},
			card: {
				left: false,
				middle: true,
				right: true,
			},
		};
	},
	beforeMount() {
		window.addEventListener("scroll", this.handleScroll);
	},
	methods: {
		handleScroll() {
			var scrollDemo = document.querySelector("#scrollDemo");

			scrollDemo.addEventListener("scroll", (event) => {
				var scrollPostition = scrollDemo.scrollTop;

				if (scrollPostition > 100 && scrollPostition <= 200) {
					if (this.view.topOfPage) {
						this.view.topOfPage = false;
					} else {
						if (!this.view.middleOfPage) this.view.middleOfPage = true;
					}
				} else if (scrollPostition >= 300) {
					if (this.view.middleOfPage) {
						this.view.middleOfPage = false;
					} else {
						if (!this.view.topOfPage) this.view.topOfPage = true;
					}
				}
				if (scrollPostition > 600) {
					if (this.view.bottomOfPage) {
						this.view.bottomOfPage = false;
					} else {
						if (!this.view.middleOfPage) this.view.middleOfPage = true;
					}
				} else {
					if (!this.view.bottomOfPage) this.view.bottomOfPage = true;
				}
			});
			// if (scrollDemo.scrollTop > 300) {
			//   if (this.view.topOfPage) {
			//     this.view.topOfPage = false;
			//   }
			// } else {
			//   if (!this.view.topOfPage) this.view.topOfPage = true;
			// }
		},
		scrollfunc() {
			var scrollDemo = document.querySelector("#scrollMenu");
			var output = document.querySelector(".output");

			scrollDemo.addEventListener(
				"scroll",
				(event) => {
					output.innerHTML = `scrollTop: ${scrollDemo.scrollTop} <br>
                                scrollLeft: ${scrollDemo.scrollLeft} `;
				},
				{ passive: true }
			);
		},
		scrollFeature() {
			var scrollCard = document.querySelector("#scrollMenu");

			scrollCard.addEventListener("scroll", (event) => {
				var scrollPos = scrollCard.scrollLeft;

				if (scrollPos > 100 && scrollPos <= 200) {
					if (this.card.left) {
						this.card.left = false;
					} else {
						if (!this.card.middle) this.card.middle = true;
					}
				} else if (scrollPos >= 300) {
					if (this.card.middle) {
						this.card.middle = false;
					} else {
						if (!this.card.left) this.card.left = true;
					}
				}
				if (scrollPos > 650) {
					if (this.card.right) {
						this.card.right = false;
					} else {
						if (!this.card.middle) this.card.middle = true;
					}
				} else {
					if (!this.card.right) this.card.right = true;
				}
			});
		},
	},
};
</script>

<style scoped>
.namjai-green {
	color: #00715d;
}
.onScroll {
	opacity: 100;
	font-size: large;
}
.active {
	background-color: #00715d;
}

::-webkit-scrollbar {
	display: none;
}
</style>
