<template>
  <div class="snap-y snap-mandatory h-screen overflow-scroll mt-[80px] lg:mt-0">
    <div class="snap-start">
      <div id="section1" class="h-screen overflow-hidden bg-gradient-to-t from-[#D0FDFA] to-transparent">
        <div class="lg:mx-44 md:mx-[40px] mx-[30px] relative lg:top-[150px] top-[50px] space-y-10 text-[#FD9F5B] z-10">
          <h1 class="lg:text-6xl md:text-6xl text-5xl">ร่วมเป็นส่วนหนึ่ง</h1>
          <div class="flex lg:space-x-6 md:space-x-6 space-x-2">
            <h1 class="lg:text-6xl md:text-6xl text-5xl lg:mt-7 mt-5">แบ่งปัน</h1>
            <h1 class="lg:text-8xl md:text-8xl text-7xl text-[#54C4AD]">น้ำใจ</h1>
          </div>
          <div class="relative -top-[40px] lg:left-[212px] md:left-[210px] left-[160px] w-16 border-4 border-t border-namjaired"></div>
          <p class="relative lg:w-[480px] md:w-[480px] w-[330px] text-[#573A25] -top-[50px]">ร่วมเป็นส่วนหนึ่งในการช่วยเหลือสังคม แบ่งปันเพื่อได้เป็นผู้ให้ น้ำใจจะช่วยให้การช่วยเหลือผู้อื่นไม่ใช่เรื่องยากอีกต่อไป ทั้งในเรื่องของปัจจัยต่าง ๆ และกำลังคน</p>
          <div class="relative -top-[50px]">
            <router-link to="/main">
              <base-button class="lg:w-[156px] lg:ml-0 ml-0 md:ml-0 py-2 px-5" buttonLabel="บริจาคเลย" />
            </router-link>
          </div>
        </div>
        <div class="relative bottom-[10px] md:bottom-[40px] lg:bottom-[380px] lg:left-[600px]">
          <img class="w-full h-full lg:w-[800px]" src="/src/assets/Frame2151.png" />
        </div>
        <!-- <div class="">
					  <w-image class="lg:w-screen h-screen" :src="`https://images.unsplash.com/photo-1504598578017-40d9b776f1bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80`" :ratio="500 / 1000" content-class="justify-start" no-spinner transition="">
					  </w-image>
				  </div> -->
      </div>
    </div>
    <div class="snap-start lg:mx-44">
      <div id="section2" class="h-screen overflow-hidden my-auto mx-auto max-w-6xl">
        <h1 class="lg:text-3xl md:text-3xl text-2xl lg:mt-[125px] mt-[60px] text-center text-namjaibrown">สุขใจทั้งผู้ให้ สบายใจทั้งผู้รับ</h1>
        <div class="relative lg:-right-[1270px] md:left-[700px] md:-top-[130px] lg:left-auto lg:-top-[150px] left-[270px] -top-[200px] lg:w-[230px] w-[177px] lg:h-[230px] h-[177px] bg-namjaigray rounded-full"></div>
        <div class="lg:-mt-[125px] md:-mt-[150px] -mt-[100px] lg:mx-0 mx-[30px] relative h-[50px]">
          <div class="lg:block hidden absolute right-[40px] -top-[140px] w-0.5 h-[550px] bg-namjaigreen"></div>
          <div class="text-namjaigreen bg-namjaibeige py-[20px] w-[120px] absolute right-[0px] top-[55px] bottom-auto hidden lg:block">
            <h1 class="opacity-50 text-right" :class="{ onScroll: !view.topOfPage }">FOUNDATION</h1>
            <br />
            <h1 class="opacity-50 text-right" :class="{ onScroll: !view.middleOfPage }">DONOR</h1>
            <br />
            <h1 class="opacity-50 text-right" :class="{ onScroll: !view.bottomOfPage }">VOLUNTEER</h1>
          </div>
          <div class="overflow-hidden">
            <div @scroll="handleScroll" id="scrollDemo" class="overflow-y-auto snap-y snap-mandatory lg:mt-0 md:mt-[40px] mt-7 lg:h-[297px] md:h-auto h-[340px] lg:w-auto md:w-screen w-[400px] space-y-4 md:space-y-6">
              <div class="lg:grid lg:grid-cols-2 md:flex md:space-x-10 snap-center">
                <img class="lg:mx-0 mx-0 lg:w-[528px] md:w-[367px] w-[330px] z-20 object-cover" src="@/assets/fdn.png" alt="" />
                <div class="lg:my-auto">
                  <h1 class="block lg:hidden text-namjaigreen text-2xl mt-[40px] mb-[10px]">FOUNDATION</h1>
                  <p class="lg:w-[372px] z-20 my-auto">กระจายความช่วยเหลือให้กับหน่วยงานที่คุณสามารถเชื่อถือได้ เพื่อส่งผ่านกำลังใจให้กับผู้ที่ต้องการความช่วยเหลือ</p>
                </div>
              </div>
              <div class="lg:grid lg:grid-cols-2 md:flex md:space-x-10 snap-center">
                <img class="lg:mx-0 mx-0 lg:w-[528px] md:w-[367px] w-[330px] z-20" src="@/assets/donor.jpg" alt="" />
                <div class="lg:my-auto">
                  <h1 class="block lg:hidden text-namjaigreen text-2xl mt-[40px] mb-[10px]">DONOR</h1>
                  <p class="w-[372px] z-20 my-auto">ความช่วยเหลือของคุณสามารถเปลี่ยนโลกได้</p>
                </div>
              </div>
              <div class="lg:grid lg:grid-cols-2 md:flex md:space-x-10 snap-center">
                <img class="lg:mx-0 mx-0 lg:w-[528px] md:w-[367px] w-[330px] z-20" src="@/assets/vlt.jpg" alt="" />
                <div class="lg:my-auto">
                  <h1 class="block lg:hidden text-namjaigreen text-2xl mt-[40px] mb-[10px]">VOLUNTEER</h1>
                  <p class="w-[372px] z-20 my-auto">ร่วมเป็นส่วนหนึ่งในการช่วยเหลือสังคมผ่านแรงกาย เพราะเราเชื่อว่าพลังแห่งการร่วมมือสามารถสร้างความเปลี่ยนแปลงได้</p>
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

        <svg class="lg:w-[675px] lg:h-[486px] lg:block md:hidden relative lg:-top-[130px] -top-[60px] md:-top-[20px] md:left-[140px] lg:-left-0 -z-20" viewBox="0 0 675 486" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div class="mx-auto max-w-6xl">
            <h1 class="font-thin lg:mb-10 md:mb-[32px] mb-[20px]">OUR FEATURES</h1>
            <div class="flex mb-5">
              <h1 class="text-namjaiyellow lg:text-3xl md:text-3xl text-[18px]">น้ำใจ</h1>
              <h1 class="text-namjaibrown lg:text-3xl md:text-3xl text-[18px] ml-2">ทำให้การบริจาคเป็นเรื่องง่าย</h1>
            </div>
            <div class="mb-[40px]">
              <h1 class="text-namjaidarkgray lg:text-xl md:text-xl text-base lg:w-[425px] md:w-[440px] leading-relaxed">เว็บแอปพลิเคชั่นสำหรับการกระจายข่าวสารและเป็นช่องทางในการบริจาคให้กับโปรเจ็กต์ของมูลนิธิต่าง ๆ อีกทั้งยังเป็นช่องทางในการรับสมัครจิตอาสาที่ต้องการทำกิจกรรมจิตอาสา</h1>
            </div>
            <div @scroll="scrollFeature" id="scrollMenu" class="flex space-x-5 md:space-x-3 lg:space-x-[30px] snap-x snap-mandatory overflow-x-auto">
              <div class="snap-center">
                <div class="bg-namjaibeige mx-1 md:mx-0 lg:mx-0 lg:w-[342px] md:w-[238px] w-[330px] h-[250px] rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
                  <div class="flex p-[10px]">
                    <w-icon color="namjai-green" size="70">fa fa-mobile</w-icon>
                    <h1 class="text-xl my-auto mx-[10px]">โอนบริจาค</h1>
                  </div>
                  <w-divider class="mx-[30px]"></w-divider>
                  <div class="px-[30px]">
                    <h1 class="py-[20px] text-sm leading-relaxed">ส่งความช่วยเหลือหากันได้เพียงปลายนิ้วง่ายๆ ผ่านช่องทางบัตรเครดิต เพียงใส่จำนวนเงินที่ต้องการบริจาตและกดปุ่มบริจาคเพื่อส่งต่อความช่วยเหลือให้หน่อยงานที่ต้องการ</h1>
                  </div>
                </div>
              </div>
              <div class="snap-center">
                <div class="bg-namjaibeige mx-1 md:mx-0 lg:mx-0 lg:w-[342px] md:w-[238px] w-[330px] h-[250px] rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
                  <div class="flex px-[30px] py-[20px] space-x-5">
                    <w-icon color="namjai-green" size="45">fa fa-handshake-o</w-icon>
                    <h1 class="text-xl my-auto">จิตอาสา</h1>
                  </div>
                  <w-divider class="mx-[30px]"></w-divider>
                  <div class="px-[30px]">
                    <h1 class="py-[20px] text-sm leading-relaxed">เป็นส่วนร่วมในการช่วยเหลือกิจกรรมสังคม มีกิจกรรมช่วยเหลือสังคมมากมายที่กำลังรออยู่ เพียงแค่มีข้อมูลติดต่อก็สามารถเข้ามาส่วนร่วมเป็นส่วนหนึ่งของกิจกรรมได้</h1>
                  </div>
                </div>
              </div>
              <div class="snap-center">
                <div class="bg-namjaibeige lg:w-[342px] md:w-[238px] w-[330px] h-[250px] rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
                  <div class="flex px-[30px] py-[20px] space-x-5">
                    <w-icon color="namjai-green" size="50" flip-x>fa fa-newspaper-o</w-icon>
                    <h1 class="text-xl my-auto">ข่าวสาร</h1>
                  </div>
                  <w-divider class="mx-[30px]"></w-divider>
                  <div class="px-[30px]">
                    <h1 class="py-[20px] text-sm leading-relaxed">ไม่พลาดทุกข่าวสาร กิจกรรม ความช่วยเหลือ ข่าวประชาสัมพันธ์ หรือประกาศต่างๆ ทั้งจากหน่วยงานหรือตัวบุคคลที่สามารถติดตามได้ตลอด คุณเองก็สามารถสร้างข่าวใหม่ประกาศให้ทุกคนได้รู้</h1>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:hidden md:hidden flex space-x-1 mt-4 justify-center">
              <div class="w-[7px] h-[7px] rounded-full bg-namjaigray" :class="{ active: !card.left }"></div>
              <div class="w-[7px] h-[7px] rounded-full bg-namjaigray" :class="{ active: !card.middle }"></div>
              <div class="w-[7px] h-[7px] rounded-full bg-namjaigray" :class="{ active: !card.right }"></div>
            </div>
            <div class="lg:w-[84px] w-[60px] h-[120px] md:h-[200px] lg:h-[220px] bg-namjaigreen rounded-b-full relative lg:-top-[680px] md:-top-[620px] -top-[620px] left-[270px] lg:left-[1100px] md:left-[650px] -z-0"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="snap-start">
      <div id="section4" class="lg:h-screen h-5/6 lg:overflow-hidden bg-namjaiwhite -mt-[200px] lg:mt-0">
        <w-image class="relative md:mx-[40px] lg:top-[100px] md:-top-[320px] lg:left-[135px] right-auto hidden lg:block md:hidden" :src="`https://images.unsplash.com/photo-1521651000640-f7b2cb02ffb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80`" :width="1086" :height="285" content-class="justify-start text-namjaiwhite mx-[95px] -mt-[100px]" no-spinner transition="">
          <h1 class="text-4xl leading-relaxed">
            Happiness doesn't result from <br />
            what we get, but from what we give
          </h1>
          <p class="mt-[150px] -mx-[80px]">Ben Carson</p>
          <base-button class="w-[342px] relative top-[142px] right-[440px]" buttonColor="bg-namjaiyellow" buttonLabel="บริจาคเลย"></base-button>
        </w-image>
        <w-image class="relative md:mx-[40px] lg:top-[100px] md:-top-[320px] lg:left-[135px] right-auto hidden lg:hidden md:block" :src="`https://images.unsplash.com/photo-1521651000640-f7b2cb02ffb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80`" :width="754" :height="213" content-class="justify-start text-namjaiwhite mx-[50px] -mt-[100px]" no-spinner transition="">
          <h1 class="text-2xl leading-relaxed w-[550px]">
            Happiness doesn't result from <br />
            what we get, but from what we give
          </h1>
          <p class="absolute top-[210px] right-[250px]">Ben Carson</p>
          <base-button class="w-[327px] relative top-[110px] right-[350px]" buttonColor="bg-namjaiyellow" buttonLabel="บริจาคเลย"></base-button>
        </w-image>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
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
    if (window) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      var scrollDemo = document.querySelector("#scrollDemo");
      if (scrollDemo) {
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
      }
    },
    scrollfunc() {
      var scrollDemo = document.querySelector("#scrollMenu");
      var output = document.querySelector(".output");

      if (scrollDemo) {
        scrollDemo.addEventListener(
          "scroll",
          (event) => {
            output.innerHTML = `scrollTop: ${scrollDemo.scrollTop} <br>
								  scrollLeft: ${scrollDemo.scrollLeft} `;
          },
          { passive: true }
        );
      }
    },
    scrollFeature() {
      var scrollCard = document.querySelector("#scrollMenu");

      if (scrollCard) {
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
      }
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
