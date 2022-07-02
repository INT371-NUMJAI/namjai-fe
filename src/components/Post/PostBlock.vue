<template>
	<div
		name="postblock"
		class="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-12 bg-namjaiwhite px-4 py-4 md:px-5 md:py-6 lg:px-6 lg:py-6 rounded-lg"
	>
		<img class="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full object-cover" src="../assets/pic1.png" />
		<div class="col-span-4 md:col-span-9 lg:col-span-11 grid-flow-row lg:px-1">
			<textarea
				name="postblock"
				class="w-full text-namjaiblack text-[14px] lg:text-[16px] pt-2 tracking-wide"
				placeholder="พิมพ์เนื้อหาประกาศที่นี่"
			>
			</textarea>
			<div class="flex justify-between -mt-1">
				<div class="flex space-x-4">
					<w-icon class="pt-1" md color="green-dark4">fa fa-circle-thin</w-icon>
					<h1 class="invisible lg:visible lg:text-[16px] lg:text-namjaigreen">เพิ่มรูปภาพ</h1>
				</div>
				<div class="border bg-namjaigreen rounded-lg text-xs md:text-sm lg:text-[16px] md:px-1 lg:px-2 py-1">
					<w-button color="white">ประกาศ</w-button>
				</div>
			</div>
		</div>
	</div>
</template>
