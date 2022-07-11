<template>
	<div>
		<div class="h-56 md:h-72 lg:hidden">
			<div class="w-32 h-32 bg-namjaired rounded-full -ml-10 -mt-5"></div>
			<div class="w-32 h-32 border-2 border-namjaiyellow rounded-full"></div>
		</div>
		<div class="h-screen w-full md:h-[850px] bg-namjaiwhite rounded-2xl lg:bg-transparent">
			<div class="mx-8 mb-20 md:mx-20 lg:mx-44">
				<div class="flex justify-between">
					<h1 class="mt-10 text-2xl lg:text-5xl lg:mt-[120px] font-semibold">เริ่มต้นเปลี่ยนสังคม</h1>
					<div class="w-24 h-20 md:w-28 md:h-24 bg-namjaiyellow rounded-b-full lg:hidden"></div>
				</div>
				<hr class="w-16 border-4 border-t border-namjaired md:-mt-4 lg:mt-2" />
				<div class="lg:grid lg:grid-cols-4 lg:gap-8 lg:mt-3">
					<div name="formContent" class="lg:col-span-3 lg:mt-8 lg:space-y-4">
						<div class="hidden md:hidden lg:block lg:font-medium">ประเภทผู้ใช้</div>
						<div>
							<div class="hidden lg:block">
								<span>
									<w-checkbox color="amber" round v-model="clicked[0]" @click="clicked[1] = false" class="border border-amber-400 bg-white rounded-md py-2 px-3 text-center space-x-3">
										<p class="font-bold text-black"><router-link to="/signup/user">บุคคลทั่วไป</router-link></p>
									</w-checkbox></span
								>
								<span
									><w-checkbox color="amber" round v-model="clicked[1]" @click="clicked[0] = false" class="w-32 h-10 border border-amber-400 bg-white rounded-md py-2 pl-3 pr-8 space-x-3 ml-14">
										<router-link to="/signup/foundation"> <p class="font-bold text-black">มูลนิธิ</p></router-link></w-checkbox
									></span
								>

								<router-view></router-view>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			clicked: [false, false],
		};
	},
};
</script>
