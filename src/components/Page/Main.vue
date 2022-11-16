<template>
  <div class="lg:w-1/9">
    <div id="sec1" class="lg:flex lg:flex-wrap lg:justify-center lg:mx-[177px] lg:mt-[146px] lg:mb-[80px]">
      <img class="object-cover w-full h-[770px] lg:w-[1086px] lg:h-[460px] lg:rounded-[20px]" src="@/assets/pic8.png" />
    </div>
    
    <div class="flex justify-center"></div>
    <div id="sec2" class="bg-[#FFFCF4] pt-[30px] md:pt-[60px] lg:pt-[60px]">
      <div class="lg:max-w-6xl mx-[30px] md:mx-[40px] lg:mx-auto">
        <h1 class="text-[20px] md:text-[25px] lg:text-[30px] font-black text-namjaidarkgray">สานต่อโครงการที่กำลังดำเนินอยู่</h1>
        <p class="pt-3 md:pt-5 lg:pt-5 text-[14px] md:text-xl lg:text-xl font-bold text-[#6A6A6A]">หากคุณกำลังมองหาโครงการที่กำลังเปิดอยู่</p>
        <p class="pt-2 text-[14px] md:text-xl lg:text-xl font-bold text-[#6A6A6A]">นี่คือบางส่วนของโครงการที่กำลังเปิดอยู่ในขณะนี้ บริจาคเลย</p>
        <div>
          <project-card :hiddenProp="false" :projectCardProps="fdnProjectList" />
        </div>

        <div class="w-1/2 lg:w-1/6 mx-auto">
          <router-link to="/projects">
            <div class="py-10 flex space-x-2 justify-center items-center">
              <p class="font-extrabold text-namjaigreen">ไปหน้าโครงการ</p>
              <w-icon class="animate-bounce" color="namjaigreen">fa fa-chevron-right</w-icon>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div id="sec3" class="mx-[30px] md:mx-[40px] lg:mx-[177px] py-[30px] md:py-[60px] lg:py-[60px]">
      <h1 class="text-[20px] md:text-[25px] lg:text-[30px] font-black text-namjaidarkgray">ให้การบริจาค</h1>
      <h1 class="lg:pt-2 text-[20px] md:text-[25px] lg:text-[30px] font-black text-namjaidarkgray">เป็นเรื่องง่ายไม่กี่ขั้นตอน</h1>
      <div name="mobile" class="pt-[30px] mx-auto space-y-20 md:hidden lg:hidden">
        <div name="step1" class="space-y-5">
          <div class="rounded-full h-[50px] w-[50px] mx-auto py-3 bg-[#FFB300]">
            <h1 class="text-[20px] text-namjaibeige text-center">1</h1>
          </div>
          <img class="w-1/2 mx-[90px]" src="@/assets/click.svg" />
          <h1 class="text-2xl text-center text-namjaidarkgray">เลือกบริจาค</h1>
          <p class="mx-auto w-[220px] text-center text-[#6A6A6A] font-black">เลือกโครงการที่คุณต้องการบริจาคและกดเลือกที่ปุ่มบริจาค</p>
        </div>
        <div name="step2" class="space-y-5">
          <div class="rounded-full h-[50px] w-[50px] mx-auto py-3 bg-[#FFB300]">
            <h1 class="text-[20px] text-namjaibeige text-center">2</h1>
          </div>
          <img class="w-1/3 mx-[110px]" src="@/assets/scan.svg" />
          <h1 class="text-2xl text-center text-namjaidarkgray">สแกนบริจาค</h1>
          <p class="mx-auto w-[245px] text-center text-[#6A6A6A] font-black">สแกน QR Code บน Moblie Banking และใส่ยอดเงินที่ต้องการบริจาค</p>
        </div>
        <div name="step3" class="space-y-5">
          <div class="rounded-full h-[50px] w-[50px] mx-auto py-3 bg-[#FFB300]">
            <h1 class="text-[20px] text-namjaibeige text-center">3</h1>
          </div>
          <img class="w-1/2 mx-[86px]" src="@/assets/complete.svg" />
          <h1 class="pt-3 text-2xl text-center text-namjaidarkgray">ยืนยันบริจาค</h1>
          <p class="mx-auto w-[250px] text-center text-[#6A6A6A] font-black">เช็ครายละเอียดและกดยืนยัน <br />เย้! คุณบริจาคสำเร็จแล้ว</p>
        </div>
      </div>

      <div name="responsive" class="hidden md:block lg:block md:pt-[60px] lg:pt-[60px]">
        <div class="md:mx-[100px] mx-[140px] flex items-center">
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
        </div>
        <div class="flex items-center py-[40px]">
          <img class="md:w-[200px] w-[210px] h-[92px] flex-auto" src="@/assets/click.svg" />
          <img class="md:w-[150px] w-[159px] h-[175px] flex-auto" src="@/assets/scan.svg" />
          <img class="md:md:w-[200px] w-[204px] h-[104px] flex-auto" src="@/assets/complete.svg" />
        </div>
        <div class="grid grid-cols-3">
          <div class="mx-auto md:space-y-3 space-y-5">
            <h1 class="md:text-[20px] text-2xl text-center text-namjaidarkgray">เลือกบริจาค</h1>
            <p class="md:w-[190px] w-[230px] md:text-[14px] text-center text-[#6A6A6A] font-black">เลือกโครงการที่คุณต้องการบริจาคและกดเลือกที่ปุ่มบริจาค</p>
          </div>
          <div class="mx-auto md:space-y-3 space-y-5">
            <h1 class="md:text-[20px] text-2xl text-center text-namjaidarkgray">สแกนบริจาค</h1>
            <p class="md:w-[220px] w-[250px] md:text-[14px] text-center text-[#6A6A6A] font-black">สแกน QR Code บน Moblie Banking และใส่ยอดเงินที่ต้องการบริจาค</p>
          </div>
          <div class="mx-auto md:space-y-3 space-y-5">
            <h1 class="md:text-[20px] text-2xl text-center text-namjaidarkgray">ยืนยันบริจาค</h1>
            <p class="md:w-[190px] w-[250px] md:text-[14px] text-center text-[#6A6A6A] font-black">เช็ครายละเอียดและกดยืนยัน <br />เย้! คุณบริจาคสำเร็จแล้ว</p>
          </div>
        </div>
      </div>
    </div>

    <div id="sec4" class="bg-[#FFFCF4] pt-[30px] md:pt-[60px] lg:pt-[60px]">
      <div class="mx-[30px] md:mx-[40px] lg:mx-[177px]">
        <h1 class="text-[20px] md:text-[25px] lg:text-[30px] font-black text-namjaidarkgray">โปรแกรมจิตอาสา</h1>
        <p class="pt-3 text-[14px] font-bold text-[#6A6A6A] md:hidden lg:hidden">อยากออกไปช่วยเหลือผู้คนในพื้นที่ มีโครงการจิตอาสามากมายที่รอคอยอยู่ ตามหาโครงการที่ใช่สำหรับคุณ</p>
        <div class="hidden md:block lg:block">
          <p class="pt-5 text-xl font-bold text-[#6A6A6A]">อยากออกไปช่วยเหลือผู้คนในพื้นที่ มีโครงการจิตอาสา</p>
          <p class="pt-2 text-xl font-bold text-[#6A6A6A]">มากมายที่รอคอยอยู่ ตามหาโครงการที่ใช่สำหรับคุณ</p>
        </div>
        <!-- <div class="hidden lg:block">
			<vueper-slides class="no-shadow pt-10" :visible-slides="3" :gap="3" :slide-ratio="1 / 3" :dragging-distance="70">
			  <vueper-slide v-for="i in 9" :key="i" :title="i.toString()" class="bg-lime-300" />
			</vueper-slides>
		  </div> -->

        <!-- <volunteer-activity-card class="pt-[30px]" /> -->

        <div class="w-1/2 lg:w-1/6 mx-auto">
          <router-link to="/volunteer">
            <div class="py-10 flex space-x-2 justify-center items-center">
              <p class="font-extrabold text-namjaigreen">ไปหน้าจิตอาสา</p>
              <w-icon class="animate-bounce" color="namjaigreen">fa fa-chevron-right</w-icon>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- <div id="sec5">
      <div class="mx-[30px] md:mx-[40px] lg:mx-[177px] py-[30px] md:py-0 md:pt-[60px] md:pb-[30px] lg:py-[60px] lg:grid lg:grid-cols-12 lg:gap-[30px]">
        <img class="object-cover md:w-[623px] lg:w-full lg:col-span-8 md:mx-auto" src="@/assets/sec5.png" />
        <div class="lg:col-span-4 py-5 lg:py-10 space-y-5 md:space-y-[30px] lg:space-y-[40px]">
          <h1 class="mx-auto text-[20px] md:text-[25px] lg:text-2xl w-[186px] md:w-[245px] lg:w-[230px] font-semibold text-namjaidarkgray text-center leading-relaxed">โอกาสที่จะได้อาสาเพื่อ แบ่งปันความช่วยเหลือ</h1>
          <p class="text-justify font-medium text-[#6A6A6A] leading-relaxed md:mx-[69px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <project-card class="pt-[30px]" />
      </div>
    </div> -->

    <div id="sec5">
      <div class="mx-[30px] md:mx-[0px] lg:mx-[177px] py-[30px] md:py-0 md:pt-[60px] md:pb-[30px] lg:py-[60px] lg:grid lg:grid-cols-12 lg:gap-[30px]">
        <img class="object-cover md:w-[623px] lg:w-full lg:col-span-8 md:mx-auto" src="@/assets/sec5.png" />
        <!-- <div class="lg:col-span-4 py-5 lg:py-10 space-y-5 md:space-y-[30px] lg:space-y-[40px]">
          <h1 class="mx-auto text-[20px] md:text-[25px] lg:text-2xl w-[186px] md:w-[245px] lg:w-[230px] font-semibold text-namjaidarkgray text-center leading-relaxed">โอกาสที่จะได้อาสาเพื่อ แบ่งปันความช่วยเหลือ</h1>
          <p class="text-justify font-medium text-[#6A6A6A] leading-relaxed md:mx-[69px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div> -->
        <div class=" lg:col-span-4 py-5 lg:py-10 space-y-5 md:space-y-[30px] lg:space-y-[40px]">
          <div class="flex justify-center">
            <h1 class="text-[20px] md:text-[25px] lg:text-2xl w-[186px] md:w-[245px] lg:w-[230px] font-semibold text-namjaidarkgray text-center leading-relaxed">โอกาสที่จะได้อาสาเพื่อ แบ่งปันความช่วยเหลือ</h1>
          </div>
          <p class="text-justify font-medium text-[#6A6A6A] leading-relaxed md:mx-[69px] lg:mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <!-- <project-card class="pt-[30px]" /> -->
      </div>
    </div>

    <div id="sec6" class="bg-[#FFFCF4] py-[30px] md:pt-[60px] md:pb-[80px] lg:pt-[60px] lg:pb-[80px]">
      <div class="mx-[30px] md:mx-[40px] lg:mx-[177px]">
        <h1 class="text-[20px] md:text-[25px] lg:text-[30px] font-black text-namjaidarkgray">กระดานข่าวสาร</h1>
        <p class="pt-3 md:pt-5 lg:pt-5 text-[14px] md:text-xl lg:text-xl font-bold text-[#6A6A6A]">ให้คุณไม่พลาดทุกข่าวสารการทำบุญ</p>
        <p class="pt-2 text-[14px] md:text-xl lg:text-xl font-bold text-[#6A6A6A]">ติดตามและให้ข้อมูลบนกระดานข่าวสาร</p>
        <div name="card" class="pt-5 md:pt-10 lg:pt-10 lg:flex lg:gap-[30px]">
          <article-big-card />
        </div>
        <div class="w-1/2 lg:w-1/6 mx-auto">
          <router-link to="/article">
            <div class="py-10 flex space-x-2 justify-center items-center">
              <p class="font-extrabold text-namjaigreen">ไปหน้ากระดานข่าว</p>
              <w-icon class="animate-bounce" color="namjaigreen">fa fa-chevron-right</w-icon>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div id="sec7" class="hidden lg:block lg:relative">
      <img class="w-full h-[200px]" src="@/assets/sec7.png" />
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
  </div>
</template>

<style scoped>
.namjaigreen {
  color: #00715d;
}
</style>

<script>
// import VolunteerActivityCard from "@/components/Volunteer/VolunteerActivityCard.vue";
import ProjectCard from "@/components/Project/ProjectCard.vue";
import { ref } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
// import PostDetailBlock from "../Post/PostDetailBlock.vue";
import projectService from "../Project/project-service";
import ArticleBigCard from "../Article/ArticleBigCard.vue";
export default {
  components: {
    // "volunteer-activity-card": VolunteerActivityCard,
    "project-card": ProjectCard,
    // "post-detail-block": PostDetailBlock,
    "article-big-card": ArticleBigCard,
    VueperSlides,
    VueperSlide,
  },
  setup() {
    const fdnProjectList = ref([]);
    const fetchFdnProjectList = () => {
      projectService.getRandomSixProjects().then((response) => {
        fdnProjectList.value = response.data;
      });
    };
    fetchFdnProjectList();

    return { fdnProjectList };
  },
};
</script>
