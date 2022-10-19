<template>
	<div class="mx-[30px] md:mx-24 lg:mx-44 lg:grid lg:grid-cols-12 lg:gap-[30px] my-10 lg:my-0">
		<div name="detail" class="lg:col-span-8 lg:mt-[120px]">
			<div class="grid grid-flow-col text-sm lg:text-base font-medium">
				<div class="flex space-x-2">
					<p>หมวดหมู่:</p>
					<p class="text-namjaigreen"></p>
				</div>
			</div>
			<h2 class="mt-5 text-xl lg:text-[30px] font-black">อาสาจัดเต็มช่วยขนย้ายสิ่งของและต้อนรับผู้บริจาค</h2>
			<!-- <img class="w-[330px] h-[186px] md:w-full lg:w-full md:h-[379px] lg:h-[402px] my-[30px] object-cover" src="@/assets/pic1.png" /> -->
			<div name="category" class="w-full h-full lg:h-[110px] bg-white py-[30px] md:py-5 lg:py-5 lg:px-5 md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 space-y-[30px] md:space-y-0 lg:space-y-0">
				<div class="grid grid-cols-2 gap-5 md:gap-0 lg:gap-0 text-center">
					<div class="space-y-5">
						<p class="text-[14px] lg:text-[16px] font-medium">จำนวน</p>
						<h1 class="text-[16px] lg:text-[20px] text-namjaigreen">
							<a href="">10</a>
						</h1>
					</div>
					<div class="space-y-5">
						<p class="text-[14px] lg:text-[16px] font-medium">ประเภทกิจกรรม</p>
						<h1 class="text-[16px] lg:text-[20px] text-namjaigreen">
							<a href="">On Site</a>
						</h1>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-5 lg:gap-0 text-center">
					<div class="space-y-5">
						<p class="text-[14px] lg:text-[16px] font-medium">ประเภทเวลา</p>
						<h1 class="text-[16px] lg:text-[20px] text-namjaigreen">
							<a href="">เลือกช่วงเวลาเอง</a>
						</h1>
					</div>
					<div class="space-y-5">
						<p class="text-[14px] lg:text-[16px] font-medium">หมวดหมู่</p>
						<h1 class="text-[16px] lg:text-[20px] text-namjaigreen">
							<a href="">ผู้สูงอายุ</a>
						</h1>
					</div>
				</div>
			</div>
			<div class="bg-white mt-[30px] py-[30px] lg:py-10 px-6 text-namjaidarkgray space-y-[30px] lg:space-y-10">
				<div class="space-y-2 lg:space-y-65 text-[14px] lg:text-[16px]">
					<p class="font-black">รายละเอียด</p>
					<hr class="bg-namjaidarkgray" />
					<p class="font-normal"></p>
				</div>
				<div class="space-y-2 lg:space-y-5 text-[14px] lg:text-[16px]">
					<p class="font-black">คุณสมบัติ</p>
					<hr class="bg-namjaidarkgray" />
					<p class="font-normal"></p>
				</div>
				<div class="space-y-2 lg:space-y-5 text-[14px] lg:text-[16px]">
					<p class="font-black">หน้าที่</p>
					<hr class="bg-namjaidarkgray" />
					<p class="font-normal"></p>
				</div>
				<div class="space-y-2 lg:space-y-5 text-[14px] lg:text-[16px]">
					<p class="font-black">สาถนที่จัดกิจกรรม</p>
					<hr class="bg-namjaidarkgray" />
					<p class="font-normal"></p>
				</div>
				<div class="space-y-2 lg:space-y-5 text-[14px] lg:text-[16px]">
					<p class="font-black">ติดต่อ</p>
					<hr class="bg-namjaidarkgray" />
					<p class="font-normal"></p>
				</div>
				<div class="space-y-3 mt-[60px] lg:hidden">
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
							<svg class="cursor-pointer" v-if="isFav" @click="isFav = false" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.58317 1.25C4.59209 1.25 2.1665 3.65067 2.1665 6.6125C2.1665 9.00342 3.11442 14.6779 12.4452 20.4142C12.6123 20.5159 12.8042 20.5697 12.9998 20.5697C13.1955 20.5697 13.3874 20.5159 13.5545 20.4142C22.8853 14.6779 23.8332 9.00342 23.8332 6.6125C23.8332 3.65067 21.4076 1.25 18.4165 1.25C15.4254 1.25 12.9998 4.5 12.9998 4.5C12.9998 4.5 10.5743 1.25 7.58317 1.25Z" stroke="#D45343" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<svg class="cursor-pointer" v-if="!isFav" @click="isFav = true" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.58317 1.25C4.59209 1.25 2.1665 3.65067 2.1665 6.6125C2.1665 9.00342 3.11442 14.6779 12.4452 20.4142C12.6123 20.5159 12.8042 20.5697 12.9998 20.5697C13.1955 20.5697 13.3874 20.5159 13.5545 20.4142C22.8853 14.6779 23.8332 9.00342 23.8332 6.6125C23.8332 3.65067 21.4076 1.25 18.4165 1.25C15.4254 1.25 12.9998 4.5 12.9998 4.5C12.9998 4.5 10.5743 1.25 7.58317 1.25Z" stroke="#D45343" fill="#D45343" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div name="regist" class="h-full lg:h-full lg:col-span-4 bg-white my-[30px] lg:my-0 py-[30px] px-6 text-namjaidarkgray">
			<div class="lg:my-24">
				<div class="flex justify-between text-[14px] lg:text-[16px]">
					<h1 class="">มูลนิธิกระจกเงา</h1>
					<div class="lg:block hidden">
						<svg v-if="isFav" @click="isFav = false" class="cursor-pointer" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.58317 1.25C4.59209 1.25 2.1665 3.65067 2.1665 6.6125C2.1665 9.00342 3.11442 14.6779 12.4452 20.4142C12.6123 20.5159 12.8042 20.5697 12.9998 20.5697C13.1955 20.5697 13.3874 20.5159 13.5545 20.4142C22.8853 14.6779 23.8332 9.00342 23.8332 6.6125C23.8332 3.65067 21.4076 1.25 18.4165 1.25C15.4254 1.25 12.9998 4.5 12.9998 4.5C12.9998 4.5 10.5743 1.25 7.58317 1.25Z" stroke="#D45343" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<svg v-if="!isFav" @click="isFav = true" class="cursor-pointer" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.58317 1.25C4.59209 1.25 2.1665 3.65067 2.1665 6.6125C2.1665 9.00342 3.11442 14.6779 12.4452 20.4142C12.6123 20.5159 12.8042 20.5697 12.9998 20.5697C13.1955 20.5697 13.3874 20.5159 13.5545 20.4142C22.8853 14.6779 23.8332 9.00342 23.8332 6.6125C23.8332 3.65067 21.4076 1.25 18.4165 1.25C15.4254 1.25 12.9998 4.5 12.9998 4.5C12.9998 4.5 10.5743 1.25 7.58317 1.25Z" stroke="#D45343" fill="#D45343" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
				</div>
				<h1 class="font-black py-[20px] text-[14px] lg:text-[20px]">อาสาจัดเต็มช่วยขนย้ายสิ่งของและต้อนรับผู้บริจาค</h1>
				<div class="w-[80px] mb-5 px-4 py-1 bg-green-500 text-center rounded-md text-white text-[14px]">เปิดอยู่</div>
				<div class="space-y-3 lg:space-y-4 text-[14px] lg:text-[16px]">
					<div class="flex space-x-2 lg:mt-[40px]">
						<w-icon color="green-dark3">fa fa-map-marker</w-icon>
						<p>กรุงเทพมหานคร</p>
					</div>
					<div class="flex space-x-2">
						<w-icon color="green-dark3">fa fa-calendar-o</w-icon>
						<p>00/00/0000 - 00/00/0000</p>
					</div>
					<div class="flex justify-between">
						<div class="flex space-x-2">
							<w-icon color="green-dark3">fa fa-clock-o</w-icon>
							<p>11:00 - 13:00</p>
						</div>
						<div class="flex space-x-2 justify-end">
							<w-icon class="" color="green-dark3n">fa fa-user-o</w-icon>
							<p>13</p>
						</div>
					</div>
				</div>
				<!-- <div class="mt-6 lg:ml-3 space-y-2 lg:flex lg:space-y-0 lg:space-x-3">
          <h2 class="text-sm">รายชื่อผู้สมัคร</h2>
          <button class="flex space-x-3 lg:space-x-2">
            <svg
              class="w-[16px] h-[14px] lg:w-[18px] lg:h-[16px]"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 13V1M11 13L7 9M11 13L15 9M1 15L1.621 17.485C1.72915 17.9177 1.97882 18.3018 2.33033 18.5763C2.68184 18.8508 3.11501 18.9999 3.561 19H18.439C18.885 18.9999 19.3182 18.8508 19.6697 18.5763C20.0212 18.3018 20.2708 17.9177 20.379 17.485L21 15"
                stroke="#5B5B5B"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h2 class="text-sm lg:text-base font-bold text-namjaigreen">
              ดาวน์โหลดรายชื่อผู้สมัคร
            </h2>
          </button>
        </div> -->
				<!-- <div
          class="w-[156px] h-[50px] border bg-namjaiyellow rounded-md py-3 text-center mx-auto mt-[30px] lg:mt-10"
        >
          <w-button class="ma1" bg-color="transparent" color="white"
            >สมัครเลย</w-button
          >
        </div> -->
				<base-button @click="showQR = false" class="w-[156px] py-3 mt-[30px] lg:mt-10" buttonLabel="สมัครเลย" buttonColor="bg-namjaiyellow" />
				<div class="space-y-3 mt-[60px] hidden lg:block">
					<h2>แชร์ต่อ</h2>
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
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
export default {
	setup() {
		const isFav = ref(true);

		return {
			isFav,
		};
	},
};
</script>
