<template>
  <div class="my-[60px] lg:mt-[120px] mx-[30px] lg:mx-[177px]">
    <div class="space-y-[10px] lg:space-y-5">
      <h1 class="text-[25px] lg:text-[30px]">หมวดหมู่การทำบุญ</h1>
      <p class="leading-relaxed lg:text-[20px]">เลือกหมวดหมู่ที่คุณสนใจ เพื่อให้เรานำเสนอได้ตรงใจคุณมากขึ้น</p>
      {{ suggestBody }}
      <!-- {{ targetArray }} -->
    </div>
    <div class="flex justify-end">
      <base-button @click="suggestBody.targetCategoriesSuggestion.length = 0" class="py-3 px-4" buttonLabel="ล้างข้อมูล"></base-button>

    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] pt-[30px] lg:pt-[40px]">
      <div @click="pushTargetIntoArray(`medical`, `การแพทย์`, `1`)" class="bg-white space-y-4 lg:space-y-6 rounded-2xl px-4 py-4 drop-shadow-md hover:shadow-md" :class="{ 'bg-[#FDD65B]' : suggestBody.targetCategoriesSuggestion.find(el => el.targetCategoriesID === `1`) }">
        <div class="w-[85px] lg:w-1/3 h-[85px] lg:h-[120px] flex mx-auto">
          <img src="@/assets/medical.svg" class="object-cover object-top w-full" />
        </div>
        <h2 class="text-namjaidarkgray font-bold text-[14px] lg:text-[18px] text-center tracking-wide">การแพทย์</h2>
      </div>
      <div @click="pushTargetIntoArray(`education`, `การศึกษา`, `2`)" class="bg-white bg- space-y-4 lg:space-y-6 rounded-2xl px-4 py-4 drop-shadow-md hover:shadow-md" :class="{ 'bg-[#FDD65B]' : suggestBody.targetCategoriesSuggestion.find(el => el.targetCategoriesID === `2`) }">
        <div class="w-[85px] lg:w-1/3 h-[85px] lg:h-[120px] flex mx-auto">
          <img src="@/assets/education.svg" class="object-cover object-top w-full" />
        </div>
        <h2 class="text-namjaidarkgray font-bold text-[14px] lg:text-[18px] text-center tracking-wide">การศึกษา</h2>
      </div>
      <div @click="pushTargetIntoArray(`children`, `เด็กและสตรี`, `3`)" class="bg-white space-y-4 lg:space-y-6 rounded-2xl px-4 py-4 drop-shadow-md hover:shadow-md" :class="{ 'bg-[#FDD65B]' : suggestBody.targetCategoriesSuggestion.find(el => el.targetCategoriesID === `3`) }">
        <div class="w-[85px] lg:w-1/3 h-[85px] lg:h-[120px] flex mx-auto">
          <img src="@/assets/children.svg" class="object-cover object-top w-full" />
        </div>
        <h2 class="text-namjaidarkgray font-bold text-[14px] lg:text-[18px] text-center tracking-wide">เด็กและสตรี</h2>
      </div>
      <div @click="pushTargetIntoArray(`handicapped`, `ผู้พิการ`, `4`)" class="bg-white space-y-4 lg:space-y-6 rounded-2xl px-4 py-4 drop-shadow-md hover:shadow-md" :class="{ 'bg-[#FDD65B]' : suggestBody.targetCategoriesSuggestion.find(el => el.targetCategoriesID === `4`) }">
        <div class="w-[85px] lg:w-1/3 h-[85px] lg:h-[120px] flex mx-auto">
          <img src="@/assets/handicapped.svg" class="object-cover object-top w-full" />
        </div>
        <h2 class="text-namjaidarkgray font-bold text-[14px] lg:text-[18px] text-center tracking-wide">ผู้พิการ</h2>
      </div>
      <div @click="pushTargetIntoArray(`elder`, `ผู้สูงอายุ`, `5`)" class="bg-white space-y-4 lg:space-y-6 rounded-2xl px-4 py-4 drop-shadow-md hover:shadow-md" :class="{ 'bg-[#FDD65B]' : suggestBody.targetCategoriesSuggestion.find(el => el.targetCategoriesID === `5`) }">
        <div class="w-[85px] lg:w-1/3 h-[85px] lg:h-[120px] flex mx-auto">
          <img src="@/assets/elder.svg" class="object-cover object-top w-full" />
        </div>
        <h2 class="text-namjaidarkgray font-bold text-[14px] lg:text-[18px] text-center tracking-wide">ผู้สูงอายุ</h2>
      </div>
      <div @click="pushTargetIntoArray(`valley`, `พัฒนาชุมชน`, `6`)" class="bg-white space-y-4 lg:space-y-6 rounded-2xl px-4 py-4 drop-shadow-md hover:shadow-md" :class="{ 'bg-[#FDD65B]' : suggestBody.targetCategoriesSuggestion.find(el => el.targetCategoriesID === `6`) }">
        <div class="w-[85px] lg:w-1/3 h-[85px] lg:h-[120px] flex mx-auto">
          <img src="@/assets/valley.svg" class="object-cover object-top w-full" />
        </div>
        <h2 class="text-namjaidarkgray font-bold text-[14px] lg:text-[18px] text-center tracking-wide">พัฒนาชุมชน</h2>
      </div>
      <div @click="pushTargetIntoArray(`art`, `ศิลปะและวัฒนธรรม`, `7`)" class="bg-white space-y-4 lg:space-y-6 rounded-2xl px-4 py-4 drop-shadow-md hover:shadow-md" :class="{ 'bg-[#FDD65B]' : suggestBody.targetCategoriesSuggestion.find(el => el.targetCategoriesID === `7`) }">
        <div class="w-[85px] lg:w-1/3 h-[85px] lg:h-[120px] flex mx-auto">
          <img src="@/assets/art.svg" class="object-cover object-top w-full" />
        </div>
        <h2 class="text-namjaidarkgray font-bold text-[14px] lg:text-[18px] text-center tracking-wide">ศิลปะและวัฒนธรรม</h2>
      </div>
      <div @click="pushTargetIntoArray(`animal`, `สัตว์`, `8`)" class="bg-white space-y-4 lg:space-y-6 rounded-2xl px-4 py-4 drop-shadow-md hover:shadow-md" :class="{ 'bg-[#FDD65B]' : suggestBody.targetCategoriesSuggestion.find(el => el.targetCategoriesID === `8`) }">
        <div class="w-[85px] lg:w-1/3 h-[85px] lg:h-[120px] flex mx-auto">
          <img src="@/assets/animal.svg" class="object-cover object-top w-full" />
        </div>
        <h2 class="text-namjaidarkgray font-bold text-[14px] lg:text-[18px] text-center tracking-wide">สัตว์</h2>
      </div>
      <div @click="pushTargetIntoArray(`environment`, `สิ่งแวดล้อม`, `9`)" class="bg-white space-y-4 lg:space-y-6 rounded-2xl px-4 py-4 drop-shadow-md hover:shadow-md" :class="{ 'bg-[#FDD65B]' : suggestBody.targetCategoriesSuggestion.find(el => el.targetCategoriesID === `9`) }">
        <div class="w-[85px] lg:w-1/2 h-[85px] lg:h-[120px] flex mx-auto">
          <img src="@/assets/environment.svg" class="object-cover object-top w-full" />
        </div>
        <h2 class="text-namjaidarkgray font-bold text-[14px] lg:text-[18px] text-center tracking-wide">สิ่งแวดล้อม</h2>
      </div>
      <div @click="pushTargetIntoArray(`human`, `สิทธิมนุษยชน`, `10`)" class="bg-white space-y-4 lg:space-y-6 rounded-2xl px-4 py-4 drop-shadow-md hover:shadow-md" :class="{ 'bg-[#FDD65B]' : suggestBody.targetCategoriesSuggestion.find(el => el.targetCategoriesID === `10`) }">
        <div class="w-[85px] lg:w-1/3 h-[85px] lg:h-[120px] flex mx-auto">
          <img src="@/assets/human.svg" class="object-cover object-top w-full" />
        </div>
        <h2 class="text-namjaidarkgray font-bold text-[14px] lg:text-[18px] text-center tracking-wide">สิทธิมนุษยชน</h2>
      </div>
      <div @click="pushTargetIntoArray(`diaster`, `บรรเทาสาธารณภัย`, `11`)" class="bg-white space-y-4 lg:space-y-6 rounded-2xl px-4 py-4 drop-shadow-md hover:shadow-md" :class="{ 'bg-[#FDD65B]' : suggestBody.targetCategoriesSuggestion.find(el => el.targetCategoriesID === `11`) }">
        <div class="w-[85px] lg:w-1/3 h-[85px] lg:h-[120px] flex mx-auto">
          <img src="@/assets/disaster.svg" class="object-cover object-top w-full" />
        </div>
        <h2 class="text-namjaidarkgray font-bold text-[14px] lg:text-[18px] text-center tracking-wide">บรรเทาสาธารณภัย</h2>
      </div>
    </div>
    <div class="pt-[40px] lg:pt-[60px] flex justify-center gap-7">
      <router-link to="/main">
      <base-button class="px-9 py-3 text-gray-50 text-lg " buttonColor="bg-namjaibrown" buttonLabel="ภายหลัง" />
    </router-link>
      <base-button @click="submitSuggestion()" class="px-9 py-3 text-gray-50 text-lg" buttonLabel="เสร็จสิ้น" />
    </div>
  </div>
  <w-transition-slide left class="fixed right-[30px] top-[80px]">
      <w-alert class="w-[350px]" v-if="showAlert" v-model="showAlert" :success="checkSuccess" :error="checkError" border-right dismiss plain> {{ responseMessage }} </w-alert>
    </w-transition-slide>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import authService from "../../services/auth-service";
import { useAuth } from "../../services/auth-middleware";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const use_auth = useAuth();
    const router = useRouter();

    const suggestBody = reactive(
      {
        targetCategoriesSuggestion: [],
        userEmail: use_auth.store_auth.user.email,
      },
    );

    const pushTargetIntoArray = (nameEN, name, id) => {
      let newObj = { targetCategoriesNameEn: nameEN, targetCategoriesName: name, targetCategoriesID: id };
      if (!suggestBody.targetCategoriesSuggestion.some((el) => el.targetCategoriesID === id)) {
        suggestBody.targetCategoriesSuggestion.push(newObj);
      }
    };

    const showAlert = ref(false);
    const responseMessage = ref("");
    const checkSuccess = ref(false);
    const checkError = ref(false);


    const submitSuggestion = () => {
      authService.createUserSuggestion(suggestBody).then(() => {
            responseMessage.value = "Save your favourite target successfully"
            checkSuccess.value = true;
            showAlert.value = true;
            setTimeout(() => router.push("/main"), 2000);
        })
        .catch(() => {
          responseMessage.value = "Failed to save your favourite target"
          checkError.value = true;
          showAlert.value = true;
        });
    };
    return { suggestBody, pushTargetIntoArray, submitSuggestion, showAlert, checkSuccess, checkError, responseMessage };
  },
};
</script>
