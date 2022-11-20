<template>
	<div class="lg:mt-[120px] mt-[60px] lg:mx-[177px] md:mx-[40px] mx-[30px]">
        <h1 class="lg:text-5xl text-2xl md:text-3xl">แก้ไขข้อมูลส่วนตัว</h1>
        <div class="mt-2">
			<div class="w-16 border-4 border-t border-namjaired"></div>
		</div>
		<w-form class="py-7 lg:py-10">
			<div class="space-y-8 lg:space-y-10">
				<div class="space-y-8 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:gap-8 lg:space-y-0">
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">ชื่อ</label>
						<w-input color="black" placeholder="ชื่อ"></w-input>
					</div>
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">นามสกุล</label>
						<w-input color="black" placeholder="นามสกุล"></w-input>
					</div>
				</div>
				<div class="space-y-8 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:gap-8 lg:space-y-0">
                    <div class="space-y-2 lg:space-y-4">
					<label class="text-sm lg:text-base font-medium">อีเมล</label>
					<w-input  type="email" color="black" placeholder="อีเมล" ></w-input>
				</div>
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">ชื่อผู้ใช้</label>
						<w-input color="black" placeholder="ชื่อผู้ใช้"></w-input>
					</div>
				</div>
                <div class="space-y-8 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:gap-8 lg:space-y-0">
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">รหัสผ่าน</label>
						<w-input type="password" color="black" placeholder="รหัสผ่าน" ></w-input>
					</div>
					<div class="space-y-2 lg:space-y-4">
						<label class="text-sm lg:text-base font-medium">ยืนยันรหัสผ่าน</label>
						<w-input  type="password" color="black" placeholder="รหัสผ่าน"></w-input>
						<span class="text-namjaired text-base">Password incorrect</span>
					</div>
                </div>
			</div>
			<div class="mt-10 flex justify-center">
				<base-button class="px-10 py-3" buttonLabel="ยืนยัน"></base-button>		
			</div>
		</w-form>
    </div>
</template>

<script>
import BaseButton from '../_Bases/BaseButton.vue';

export default {
    components: {
        BaseButton,
    }
}
</script>
