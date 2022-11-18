<template>
  <div class="mx-[30px] md:mx-24 lg:mx-44 lg:grid lg:grid-cols-12 lg:gap-[30px] my-10 lg:my-0">
    <div class="lg:col-span-8 lg:mt-[120px]">
      <div class="grid grid-flow-col mb-[20px] text-sm lg:text-base font-medium">
        <div class="flex space-x-2">
          <p>หมวดหมู่:</p>
          <p class="text-namjaigreen" v-for="fdnProjectProp in project.targetCategoriesSet" :key="fdnProjectProp">
            {{ fdnProjectProp.targetCategoriesName }}
          </p>
        </div>
        <!-- {{ project.picturePath }} -->
      </div>
      <h1 class="text-xl lg:text-3xl">{{ project.foundationProjectName }} ({{ project.status }})</h1>
      <img v-if="project.picturePath != null" class="w-full aspect-video object-cover my-5 lg:my-[30px]" :src="getImage(project.picturePath)" />
      <img v-else-if="project.picturePath === null" class="w-full aspect-video object-cover my-5 lg:my-[30px]" src="@/assets/image-unavailable.jpeg" />
      <div class="bg-white mt-[30px] lg:mt-[40px]">
        <div class="flex justify-center md:justify-start lg:justify-start space-x-8 md:space-x-12 lg:space-x-12 text-sm lg:text-base md:px-8 lg:px-10">
          <div class="flex-wrap space-y-3 pt-4 lg:pt-6 h-[54px] lg:h-[66px]" @click="(selectedDetail = true), (selectedProgression = false), (selectedFinancialPlan = false)">
            <h2 class="cursor-pointer select-all selection:text-namjaigreen">รายละเอียด</h2>
            <div class="h-1.5 bg-emerald-600" v-if="selectedDetail === true"></div>
          </div>
          <div class="flex-wrap space-y-3 pt-4 lg:pt-6 h-[54px] lg:h-[66px]" @click="(selectedProgression = true), (selectedDetail = false), (selectedFinancialPlan = false)">
            <h2 class="cursor-pointer select-all selection:text-namjaigreen">ความคืบหน้า</h2>
            <div class="h-1.5 bg-emerald-600" v-if="selectedProgression === true"></div>
          </div>
          <div class="flex-wrap space-y-3 pt-4 lg:pt-6 h-[54px] lg:h-[66px]" @click="(selectedFinancialPlan = true), (selectedDetail = false), (selectedProgression = false)">
            <h2 class="cursor-pointer select-all selection:text-namjaigreen">แผนการใช้เงิน</h2>
            <div class="h-1.5 bg-emerald-600" v-if="selectedFinancialPlan === true"></div>
          </div>
        </div>
      </div>

      <div name="content" class="bg-white text-sm lg:text-base rounded-b-md mb-[30px] lg:mt-0 lg:mb-[40px]">
        <hr class="bg-slate-600 w-full mx-auto" />
        <div class="p-5 md:px-8 lg:px-10 md:py-6 lg:py-7 space-y-10">
          <div name="projectDetail" class="space-y-[30px]" v-if="selectedDetail === true">
            <div class="space-y-2">
              <h1>รายละเอียด</h1>
              <hr class="bg-black h-0.5" />
              <p>
                {{ project.foundationProjectDetail }}
              </p>
            </div>

            <div class="space-y-2">
              <h1>สถานที่และเวลาดำเนินโครงการ</h1>
              <hr class="bg-black h-0.5" />
              <p>
                {{ project.foundationProjectDetailPlace }}
              </p>
            </div>

            <div class="space-y-2" v-if="project.picturePath">
              <h1>ติดต่อ</h1>
              <hr class="bg-black h-0.5" />
              <p class="mb-2.5">
                {{ formatFdnAddress }}
                <!-- {{ project.foundationContactDTO.addressDetail }} -->
              </p>
              <p class="pt-2">
                {{ project.foundationContactDTO.contactNumber }}
              </p>
            </div>
          </div>

          <project-progression :foundationProjectUUIDProp="project.foundationProjectUUID" :fdnOwnerProjectProp="project.foundationContactDTO.email" v-if="selectedProgression === true" />
          <project-financial-plan :foundationProjectUUIDProp="project.foundationProjectUUID" :fdnOwnerProjectProp="project.foundationContactDTO.email" v-if="selectedFinancialPlan === true" />

          <div class="bg-white space-y-3 lg:hidden">
            <div class="grid grid-rows-2 grid-cols-2">
              <h2>แชร์ต่อ</h2>
              <h2 class="justify-self-end">ถูกใจโครงการ</h2>
              <div name="shareMbTb" class="flex space-x-4">
                <svg class="w-8 h-8 lg:w-[38px] lg:h-[38px] fill-current hover:text-[#0165E1] active:text-[#0165E1] cursor-pointer" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38ZM20.1971 19.1689V26H17.359V19.1639H15V16.4893H17.3539V14.5265C17.3539 12.2437 18.7918 11.0001 20.886 11.0001C21.5922 10.9975 22.2979 11.0328 23 11.106V13.4905H21.557C20.4182 13.4905 20.1971 14.0189 20.1971 14.7907V16.4943H22.9186L22.5664 19.1689H20.1971Z" />
                </svg>

                <svg class="w-8 h-8 lg:w-[38px] lg:h-[38px] fill-current hover:text-[#17A9FD] active:text-[#17A9FD] cursor-pointer" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38ZM25.9972 14.2166C26.7033 14.1309 27.3748 13.9413 28 13.6607L27.9985 13.6629C27.5305 14.372 26.9416 14.991 26.2593 15.4908C26.266 15.6425 26.2698 15.7957 26.2698 15.9474C26.2698 20.6165 22.7621 26 16.3457 26C14.4503 26.0021 12.5943 25.451 11 24.4125C11.2763 24.4455 11.5543 24.4619 11.8326 24.4618C13.4032 24.4642 14.9291 23.9312 16.1645 22.9487C15.4367 22.9352 14.7313 22.6915 14.1471 22.2516C13.5628 21.8118 13.1289 21.1979 12.9062 20.4959C13.429 20.5968 13.9677 20.5761 14.4815 20.4352C13.692 20.2736 12.9821 19.8403 12.4721 19.2088C11.9621 18.5773 11.6835 17.7865 11.6836 16.9706V16.9251C12.1679 17.1978 12.7095 17.3494 13.2633 17.3672C12.7858 17.0442 12.3943 16.6067 12.1237 16.0936C11.8531 15.5805 11.7117 15.0077 11.712 14.4259C11.712 13.7797 11.8842 13.173 12.1837 12.6496C13.0596 13.7412 14.1522 14.634 15.3907 15.27C16.6292 15.9061 17.9859 16.2713 19.3727 16.3418C19.1972 15.5839 19.2735 14.7885 19.59 14.0791C19.9064 13.3697 20.4451 12.7859 21.1226 12.4185C21.8001 12.0511 22.5784 11.9205 23.3366 12.047C24.0948 12.1736 24.7906 12.5502 25.3159 13.1184C26.0971 12.963 26.8461 12.6731 27.5306 12.2613C27.2707 13.08 26.7257 13.775 25.9972 14.2166Z" />
                </svg>

                <svg class="w-8 h-8 lg:w-[38px] lg:h-[38px] fill-current hover:text-[#10A88D] active:text-[#10A88D] cursor-pointer" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38ZM15.5858 11.5858C15.9609 11.2107 16.4696 11 17 11H23C23.5304 11 24.0391 11.2107 24.4142 11.5858C24.7893 11.9609 25 12.4696 25 13V23C25 23.5304 24.7893 24.0391 24.4142 24.4142C24.0391 24.7893 23.5304 25 23 25H17C16.4696 25 15.9609 24.7893 15.5858 24.4142C15.2107 24.0391 15 23.5304 15 23V13C15 12.4696 15.2107 11.9609 15.5858 11.5858ZM16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13V23C16 23.2652 16.1054 23.5196 16.2929 23.7071C16.4804 23.8946 16.7348 24 17 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23V13C24 12.7348 23.8946 12.4804 23.7071 12.2929C23.5196 12.1054 23.2652 12 23 12H17C16.7348 12 16.4804 12.1054 16.2929 12.2929ZM13.268 14C13.0924 14.3041 13 14.6489 13 15V23.5C13 24.4283 13.3687 25.3185 14.0251 25.9749C14.6815 26.6313 15.5717 27 16.5 27H21C21.3511 27 21.6959 26.9076 22 26.732C22.304 26.5565 22.5565 26.304 22.732 26H16.5C15.837 26 15.2011 25.7366 14.7322 25.2678C14.2634 24.7989 14 24.163 14 23.5V13.268C13.696 13.4435 13.4435 13.696 13.268 14Z" />
                </svg>
              </div>
              <div class="justify-self-end mr-7">
                <svg v-if="isFav" @click="isFav = false" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.58317 1.25C4.59209 1.25 2.1665 3.65067 2.1665 6.6125C2.1665 9.00342 3.11442 14.6779 12.4452 20.4142C12.6123 20.5159 12.8042 20.5697 12.9998 20.5697C13.1955 20.5697 13.3874 20.5159 13.5545 20.4142C22.8853 14.6779 23.8332 9.00342 23.8332 6.6125C23.8332 3.65067 21.4076 1.25 18.4165 1.25C15.4254 1.25 12.9998 4.5 12.9998 4.5C12.9998 4.5 10.5743 1.25 7.58317 1.25Z" stroke="#D45343" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg v-if="!isFav" @click="isFav = true" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.58317 1.25C4.59209 1.25 2.1665 3.65067 2.1665 6.6125C2.1665 9.00342 3.11442 14.6779 12.4452 20.4142C12.6123 20.5159 12.8042 20.5697 12.9998 20.5697C13.1955 20.5697 13.3874 20.5159 13.5545 20.4142C22.8853 14.6779 23.8332 9.00342 23.8332 6.6125C23.8332 3.65067 21.4076 1.25 18.4165 1.25C15.4254 1.25 12.9998 4.5 12.9998 4.5C12.9998 4.5 10.5743 1.25 7.58317 1.25Z" stroke="#D45343" fill="#D45343" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div name="donate" class="lg:col-span-4 lg:h-fit lg:mt-0 bg-white text-sm lg:text-base rounded-md lg:rounded-none block lg:flex lg:justify-center">
      <div class="p-5 lg:mx-auto md:p-8 lg:mt-[140px] lg:mb-10 lg:py-0 lg:px-0 ">
        <div class="hidden lg:block">
          <div class="grid grid-flow-col text-sm lg:text-base font-medium">
            <h1 class="text-base mb-5" v-if="project.foundationProjectName">
              {{ project.foundationContactDTO.fdnName }}
            </h1>
            <div class="justify-self-end">
              <div v-if="(use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && use_auth.store_auth.user.role != 'ROLE_FDN') || use_auth.store_auth.status.loggedIn === false">
                <svg
                  v-if="!checkFav"
                  @click="
                    clickToFav(project.foundationProjectUUID, project.foundationProjectName);
                    checkFav = !checkFav;
                  "
                  class="cursor-pointer"
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.58317 1.25C4.59209 1.25 2.1665 3.65067 2.1665 6.6125C2.1665 9.00342 3.11442 14.6779 12.4452 20.4142C12.6123 20.5159 12.8042 20.5697 12.9998 20.5697C13.1955 20.5697 13.3874 20.5159 13.5545 20.4142C22.8853 14.6779 23.8332 9.00342 23.8332 6.6125C23.8332 3.65067 21.4076 1.25 18.4165 1.25C15.4254 1.25 12.9998 4.5 12.9998 4.5C12.9998 4.5 10.5743 1.25 7.58317 1.25Z" stroke="#D45343" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg
                  v-if="checkFav"
                  @click="
                    clickToUnFav(project.foundationProjectUUID);
                    checkFav = !checkFav;
                  "
                  class="cursor-pointer"
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.58317 1.25C4.59209 1.25 2.1665 3.65067 2.1665 6.6125C2.1665 9.00342 3.11442 14.6779 12.4452 20.4142C12.6123 20.5159 12.8042 20.5697 12.9998 20.5697C13.1955 20.5697 13.3874 20.5159 13.5545 20.4142C22.8853 14.6779 23.8332 9.00342 23.8332 6.6125C23.8332 3.65067 21.4076 1.25 18.4165 1.25C15.4254 1.25 12.9998 4.5 12.9998 4.5C12.9998 4.5 10.5743 1.25 7.58317 1.25Z" stroke="#D45343" fill="#D45343" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <w-icon
                v-if="use_auth.store_auth.status.loggedIn && project.foundationProjectName != undefined && use_auth.store_auth.user.email === project.foundationContactDTO.email"
                class="justify-self-end cursor-pointer"
                @click="
                  showDialogStatus = true;
                  setFDNProjectUUID(project.foundationProjectUUID);
                "
                >fa fa-pencil-square-o</w-icon
              >
              <w-dialog width="450" v-model="showDialogStatus">
                <div class="pb-[20px] mx-4">
                  <div class="grid grid-cols-2">
                    <h1 class="my-4 text-xl">สถานะโครงการ</h1>
                    <w-icon @click="showDialogStatus = false" class="cursor-pointer mt-[19px] justify-self-end">fa fa-times</w-icon>
                  </div>
                  <w-radio v-model="editFDNStatusOBJ.newStatus" color="black" label-color="black" :return-value="'OPEN'">
                    <p class="ml-1">Open</p>
                  </w-radio>
                  <w-radio v-model="editFDNStatusOBJ.newStatus" :return-value="'NOT_SHOWING'" label-color="black" color="black" class="mx-[20px]">
                    <p class="ml-1">Not showing</p>
                  </w-radio>
                  <w-radio v-model="editFDNStatusOBJ.newStatus" :return-value="'CLOSED'" label-color="black" color="black">
                    <p class="ml-1">Closed</p>
                  </w-radio>
                  <br />
                </div>
                <base-button class="px-[40px] lg:h-[45px] lg:pt-2" buttonLabel="ยืนยัน" @click="saveNewFDNProjectStatus"></base-button>
              </w-dialog>
            </div>
          </div>
          <h1 class="text-xl mb-[30px] lg:w-[300px]">{{ project.foundationProjectName }} ({{ project.status }})</h1>
        </div>
        <div class="grid grid-flow-col mb-5 lg:mb-[30px]">
          <p>ระยะเวลา:</p>
          <p class="text-right">{{ project.startDate }} - {{ project.endDate }}</p>
        </div>
        <!-- <p class="text-sm mb-[20px]">ระยะเวลา: 12/12/2022 - 02/01/2023</p> -->
        <div class="grid grid-cols-2 mb-5">
          <p>ยอดบริจาคปัจจุบัน</p>
          <h1 class="text-2xl text-namjaigreen text-right">
            {{ project.received }}
          </h1>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-3 mb-5">
          <w-progress :model-value="project.percentage" size="1em" bg-color="grey-light4" color="namjaigreen" round round-cap> </w-progress>
        </div>
        <div class="grid grid-cols-2 mb-5">
          <p>เป้าหมาย</p>
          <h1 class="text-lg text-namjaired text-right">
            {{ project.goal }}
          </h1>
        </div>
        <!-- <base-button class="w-[140px] md:w-[356px] mb-[30px]" buttonLabel="บริจาค"></base-button> -->
        <div v-if="project.status === `OPEN`">
          <w-form v-model="valid">
            <div class="flex mt-[30px] lg:mt-0 mx-auto">
              <h1 class="my-auto pr-[15px]">จำนวนเงิน</h1>
              <w-input :validators="[validators.required, validators.negativeNumber]" v-model="amount" class="my-auto text-center" type="number" bg-color="white" color="black"></w-input>
              <h1 class="pl-[15px] my-auto">บาท</h1>
            </div>
            <!-- <base-button :isValid="valid === false" @click="showQR = true" class="mt-[30px] w-[150px] py-3" buttonLabel="บริจาค"></base-button> -->
            <base-button :isValid="valid === false" @click="showDialog = true" class="mt-[30px] w-[150px] py-3" buttonLabel="บริจาค"></base-button>
            <w-dialog v-if="showDialog" :width="400">
              <w-button name="closeButton" @click="showDialog = false" class="m-2" sm outline round absolute color="black" icon="wi-cross"></w-button>
              <credit-card @closeThisComp="close" :amountProp="Number(amount)" :projectName="project.foundationProjectName" :foundationProject="project.foundationProjectUUID" :validForShow="valid" />
            </w-dialog>
          </w-form>
        </div>
        <div name="shareDt" class="hidden lg:block pt-16 space-y-3">
          <h2 class="text-[14px]">แชร์ต่อ</h2>
          <div class="flex space-x-3">
            <a :href="linkShare">
              <svg class="fill-current hover:text-[#0165E1] active:text-[#0165E1] cursor-pointer" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38ZM20.1971 19.1689V26H17.359V19.1639H15V16.4893H17.3539V14.5265C17.3539 12.2437 18.7918 11.0001 20.886 11.0001C21.5922 10.9975 22.2979 11.0328 23 11.106V13.4905H21.557C20.4182 13.4905 20.1971 14.0189 20.1971 14.7907V16.4943H22.9186L22.5664 19.1689H20.1971Z" />
              </svg>
            </a>
            <a :href="linkShareTwitter">
              <svg class="fill-current hover:text-[#17A9FD] active:text-[#17A9FD] cursor-pointer" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38ZM25.9972 14.2166C26.7033 14.1309 27.3748 13.9413 28 13.6607L27.9985 13.6629C27.5305 14.372 26.9416 14.991 26.2593 15.4908C26.266 15.6425 26.2698 15.7957 26.2698 15.9474C26.2698 20.6165 22.7621 26 16.3457 26C14.4503 26.0021 12.5943 25.451 11 24.4125C11.2763 24.4455 11.5543 24.4619 11.8326 24.4618C13.4032 24.4642 14.9291 23.9312 16.1645 22.9487C15.4367 22.9352 14.7313 22.6915 14.1471 22.2516C13.5628 21.8118 13.1289 21.1979 12.9062 20.4959C13.429 20.5968 13.9677 20.5761 14.4815 20.4352C13.692 20.2736 12.9821 19.8403 12.4721 19.2088C11.9621 18.5773 11.6835 17.7865 11.6836 16.9706V16.9251C12.1679 17.1978 12.7095 17.3494 13.2633 17.3672C12.7858 17.0442 12.3943 16.6067 12.1237 16.0936C11.8531 15.5805 11.7117 15.0077 11.712 14.4259C11.712 13.7797 11.8842 13.173 12.1837 12.6496C13.0596 13.7412 14.1522 14.634 15.3907 15.27C16.6292 15.9061 17.9859 16.2713 19.3727 16.3418C19.1972 15.5839 19.2735 14.7885 19.59 14.0791C19.9064 13.3697 20.4451 12.7859 21.1226 12.4185C21.8001 12.0511 22.5784 11.9205 23.3366 12.047C24.0948 12.1736 24.7906 12.5502 25.3159 13.1184C26.0971 12.963 26.8461 12.6731 27.5306 12.2613C27.2707 13.08 26.7257 13.775 25.9972 14.2166Z" />
              </svg>
            </a>
            <w-tooltip show-on-click top @click="copyToClipboard()">
              <template #activator="{ on }">
                <svg v-on="on" class="w-8 h-8 lg:w-[38px] lg:h-[38px] fill-current hover:text-[#10A88D] active:text-[#10A88D] cursor-pointer" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38ZM15.5858 11.5858C15.9609 11.2107 16.4696 11 17 11H23C23.5304 11 24.0391 11.2107 24.4142 11.5858C24.7893 11.9609 25 12.4696 25 13V23C25 23.5304 24.7893 24.0391 24.4142 24.4142C24.0391 24.7893 23.5304 25 23 25H17C16.4696 25 15.9609 24.7893 15.5858 24.4142C15.2107 24.0391 15 23.5304 15 23V13C15 12.4696 15.2107 11.9609 15.5858 11.5858ZM16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13V23C16 23.2652 16.1054 23.5196 16.2929 23.7071C16.4804 23.8946 16.7348 24 17 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23V13C24 12.7348 23.8946 12.4804 23.7071 12.2929C23.5196 12.1054 23.2652 12 23 12H17C16.7348 12 16.4804 12.1054 16.2929 12.2929ZM13.268 14C13.0924 14.3041 13 14.6489 13 15V23.5C13 24.4283 13.3687 25.3185 14.0251 25.9749C14.6815 26.6313 15.5717 27 16.5 27H21C21.3511 27 21.6959 26.9076 22 26.732C22.304 26.5565 22.5565 26.304 22.732 26H16.5C15.837 26 15.2011 25.7366 14.7322 25.2678C14.2634 24.7989 14 24.163 14 23.5V13.268C13.696 13.4435 13.4435 13.696 13.268 14Z" />
                </svg>
              </template>
              Copied link!
            </w-tooltip>
          </div>
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
import { computed, ref, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useValidation } from "../Account/validator";
import useProjects from "./useProject";
import ProjectProgression from "./ProjectProgression.vue";
import ProjectFinancialPlan from "./ProjectFinancialPlan.vue";
import CreditCard from "../Transaction/CreditCard.vue";
import projectService from "./project-service";
import { useAuth } from "../../services/auth-middleware";
import profileService from "../Profile/profile-service";
import { useUtil } from "../../services/useUtil";

export default {
  components: {
    "project-progression": ProjectProgression,
    "project-financial-plan": ProjectFinancialPlan,
    "credit-card": CreditCard,
  },
  setup() {
    document.title = "Namjai - Project Detail";
    const showQR = ref(false);
    const isFav = ref(true);
    const { validators } = useValidation();
    const valid = ref(false);
    const showDialog = ref(false);
    const use_auth = useAuth();

    const route = useRoute();
    const router = useRouter();
    const { project, getProjectByID } = useProjects();

    const clicked = ref([false, false]);
    const selectedDetail = ref(true);
    const selectedProgression = ref(false);
    const selectedFinancialPlan = ref(false);
    const swapMenu = () => {
      if (true === selectedDetail) {
        selectedProgression.value = false;
        selectedFinancialPlan.value = false;
      }
      if (true === selectedProgression) {
        selectedDetail.value = false;
        selectedFinancialPlan.value = false;
      }
      if (true === selectedFinancialPlan) {
        selectedDetail.value = false;
        selectedProgression.value = false;
      }
    };

    // getProjectByID(route.params.id);
    getProjectByID(route.params.id).catch((error) => {
      router.push({name: 'not-found'})
    })

    const formatStringDate = computed(() => {
      return `${project.value.startDate} - ${project.value.endDate}`;
    });

    const formatFdnAddress = computed(() => {
      return `${project.value.foundationContactDTO.addressDetail} แขวง ${project.value.foundationContactDTO.subDistrict} เขต ${project.value.foundationContactDTO.district} ${project.value.foundationContactDTO.province} ${project.value.foundationContactDTO.postalCode} ${project.value.foundationContactDTO.email}`;
    });

    const amount = ref("");

    const close = () => {
      showDialog.value = false;
    };

    const linkShare = computed(() => {
      return `https://www.facebook.com/sharer.php?u=https://namjai.site/project/${route.params.id}`;
    });

    const linkShareTwitter = computed(() => {
      return `https://twitter.com/share?url=https://namjai.site/project/${route.params.id}`;
    });

    const copyToClipboard = () => {
      navigator.clipboard.writeText(`https://namjai.site/project/${route.params.id}`);
    };

    const showDialogStatus = ref(false);

    const editFDNStatusOBJ = reactive({ fdnProjectUUID: "", newStatus: "" });
    const setFDNProjectUUID = (id) => {
      editFDNStatusOBJ.fdnProjectUUID = id;
    };
    const saveNewFDNProjectStatus = () => {
      projectService.editFoundationProjectStatus(editFDNStatusOBJ);
      showDialogStatus.value = false;
    };

    const getImage = (imagePath) => {
      return `${import.meta.env.VITE_APP_BACKEND_URL}/util/img?path=${imagePath}`;
    };

    const checkUserEmail = use_auth.store_auth.status.loggedIn ? use_auth.store_auth.user.email : "";

    const { generateFiveDigitsUUID, checkFav, checkIfFavOrNot } = useUtil();
    const favoriteBody = reactive({
      userFavoriteUUID: generateFiveDigitsUUID(),
      userEmail: checkUserEmail,
      typeOfFavorite: "PROJECT",
      favoriteReferenceUUID: null,
      favoriteReferenceTitle: null,
    });

    checkIfFavOrNot("PROJECT", route.params.id, checkUserEmail);

    const clickToFav = (uuid, title) => {
      if (use_auth.store_auth.status.loggedIn) {
        favoriteBody.favoriteReferenceUUID = uuid;
        favoriteBody.favoriteReferenceTitle = title;
        profileService.fav(favoriteBody);
      } else if (use_auth.store_auth.status.loggedIn === false) {
        router.push("/login");
      }
      // checkFav.value = false;
    };

    const clickToUnFav = (refUUID) => {
      profileService.unFav("PROJECT", refUUID, checkUserEmail);
      // checkFav.value = true;
    };

    // === project.foundationContactDTO.email
    return {
      getImage,
      project,
      // getProjectByID,
      showQR,
      validators,
      valid,
      formatStringDate,
      formatFdnAddress,
      clicked,
      selectedDetail,
      selectedProgression,
      selectedFinancialPlan,
      swapMenu,
      isFav,
      showDialog,
      amount,
      close,
      linkShare,
      linkShareTwitter,
      editFDNStatusOBJ,
      showDialogStatus,
      use_auth,
      saveNewFDNProjectStatus,
      setFDNProjectUUID,
      copyToClipboard,
      favoriteBody,
      clickToFav,
      clickToUnFav,
      checkFav,
    };
  },
};
</script>

<style scoped>
.w-switch__track {
  color: #666;
}
.w-switch--on .w-switch__track {
  color: #fff;
}
.w-switch--wide .w-switch__input {
  width: 100px;
}
.w-switch--wide .w-switch__track {
  width: 150px;
  text-align: center;
}
.namjai-green {
  color: #00715d;
}

.namjai-red {
  color: #d45343;
}
</style>
