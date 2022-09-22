<template>
	<div class="py-[30px] md:py-[32px] px-[30px] md:px-[34px] lg:px-[34px] bg-white rounded-lg space-y-5">
		<span class="font-black">ทุกวันปัญหาในสังคมเราควรเกิด"การเปลี่ยนแปลง" แม้การเปลี่ยนแปลงนั้น จะเกิดทีละน้อยนิดแต่เป็น การเปลี่ยนแปลงที่เกิดขึ้นต่อเนื่องเป็นลูกโซ่ เราจึงขออาสาเป็นเงาในการสะท้อนเรื่องราวปัญหา เพื่อขับเคลื่อนสังคมของเราสู่การเปลี่ยนแปลง “สร้างคน สร้างนวัตกรรม สร้างการเปลี่ยนแปลง”</span>
		<hr />
		<div class="pt-2 space-y-5">
		  <div class="grid grid-cols-7 md:grid-cols-none lg:grid-cols-none md:flex lg:flex md:space-x-6 lg:space-x-5 md:items-center lg:items-center">
			<w-icon xl color="red-dark2" class="justify-start">fa fa-map-marker</w-icon>
			<span class="col-span-6 text-[14px] text-neutral-500">เลขที่ 191 ซอย วิภาวดีรังสิต 62 แยก 4-7 แขวง ตลาดบางเขน เขต หลักสี่ กรุงเทพฯ 10210</span>
		  </div>
		  <div class="grid grid-cols-7 md:grid-cols-none lg:grid-cols-none md:flex lg:flex md:space-x-7 lg:space-x-6 md:items-center lg:items-center">
			<w-icon lg color="red-dark2" class="justify-start">fa fa-phone</w-icon>
			<span class="col-span-6 text-[14px] text-neutral-500">061-9091840</span>
		  </div>
		  <div class="grid grid-cols-7 md:grid-cols-none lg:grid-cols-none md:flex lg:flex md:space-x-8 lg:space-x-7 md:items-center lg:items-center">
			<w-icon md color="red-dark2" class="justify-start">fa fa-envelope</w-icon>
			<span class="col-span-6 text-[14px] text-neutral-500">donate@mirror.or.th</span>
		  </div>
		</div>
	  </div>
  </template>
  
  <script>
import BaseButton from '../_Bases/BaseButton.vue';
  export default {
	components: {
BaseButton
	  
	},
  };
  </script>