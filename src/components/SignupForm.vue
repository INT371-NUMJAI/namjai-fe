<template>
	<div class="h-56 md:h-72 lg:hidden">
		<div class="w-32 h-32 bg-namjaired rounded-full -ml-10 -mt-5"></div>
		<div class="w-32 h-32 border-2 border-namjaiyellow rounded-full"></div>
	</div>
	<div class="h-full w-full md:h-[850px] bg-namjaiwhite rounded-2xl lg:bg-transparent">
		<div class="mx-8 mb-20 md:mx-20 lg:mx-44">
			<div class="flex justify-between">
				<h1 class="mt-10 text-2xl lg:text-5xl lg:mt-[120px] font-semibold">เริ่มต้นเปลี่ยนสังคม</h1>
				<div class="w-24 h-20 md:w-28 md:h-24 bg-namjaiyellow rounded-b-full lg:hidden"></div>
			</div>
			<div class="w-16 border-4 border-t border-namjaired md:-mt-4 lg:mt-2"></div>
			<div class="lg:grid lg:grid-cols-4 lg:gap-8 lg:mt-10">
				<div name="formContent" class="lg:col-span-3">
					<div class="hidden lg:inline-flex lg:space-x-[60px] lg:mt-10">
						<div class="w-32 h-10 border border-namjaibrown rounded-md py-2 text-center space-x-3">
							<w-radio class="mr2" name="radio1" color="yellow"></w-radio>
							<span class="font-medium">บุคคลทั่วไป</span>
						</div>
						<div class="w-32 h-10 border border-namjaibrown rounded-md py-2 px-3 space-x-5">
							<w-radio class="mr2" name="radio1" color="yellow"></w-radio>
							<span class="font-medium">มูลนิธิ</span>
						</div>
					</div>
					<w-form name="donorForm" class="py-7 lg:py-10">
						<div class="space-y-8 lg:space-y-10">
							<div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
								<div class="space-y-2 lg:space-y-4">
									<label class="text-sm lg:text-base font-medium">ชื่อ</label>
									<w-input color="black" placeholder="ชื่อ"></w-input>
								</div>
								<div class="space-y-2 lg:space-y-4">
									<label class="text-sm lg:text-base font-medium">นามสกุล</label>
									<w-input color="black" placeholder="นามสกุล"></w-input>
								</div>
							</div>

							<div class="space-y-2 lg:space-y-4">
								<label class="text-sm lg:text-base font-medium">อีเมล</label>
								<w-input color="black" placeholder="อีเมล"></w-input>
							</div>

							<div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
								<div class="space-y-2 lg:space-y-4">
									<label class="text-sm lg:text-base font-medium">ชื่อผู้ใช้</label>
									<w-input color="black" placeholder="ชื่อผู้ใช้"></w-input>
								</div>
								<div class="space-y-2 lg:space-y-4 lg:pb-16">
									<label class="text-sm lg:text-base font-medium">รหัสผ่าน</label>
									<w-input color="black" placeholder="รหัสผ่าน"></w-input>
								</div>
							</div>
						</div>
					</w-form>

					<w-form name="foundationForm" class="hidden lg:inline">
						<div class="space-y-10">
							<div class="space-y-4">
								<div class="font-medium">ขนาดองค์กร</div>
								<div class="inline-flex space-x-10">
									<div class="w-32 h-10 border border-namjaibrown rounded-md py-2 text-center space-x-3">
										<w-radio class="mr2" name="radio1" color="yellow"></w-radio>
										<span class="font-medium">ขนาดเล็ก</span>
									</div>
									<div class="w-32 h-10 border border-namjaibrown rounded-md py-2 text-center space-x-3">
										<w-radio class="mr2" name="radio1" color="yellow"></w-radio>
										<span class="font-medium">ขนาดเล็ก</span>
									</div>
								</div>
							</div>
							<div class="space-y-4">
								<label class="font-medium">ชื่อองค์กร</label>
								<w-input color="black" placeholder="ชื่อองค์กร"></w-input>
							</div>
							<div class="space-y-4">
								<label class="font-medium">ที่ตั้ง</label>
								<w-input color="black" placeholder="เลขที่ หมู่ ซอย ถนน"></w-input>
							</div>
							<div class="grid grid-cols-2 gap-10">
								<div class="space-y-4">
									<label class="font-medium">แขวง</label>
									<w-input color="black" placeholder="ชื่อ"></w-input>
								</div>
								<div class="space-y-4">
									<label class="font-medium">เขต</label>
									<w-input color="black" placeholder="นามสกุล"></w-input>
								</div>
							</div>
							<div class="grid grid-cols-2 gap-10">
								<div class="space-y-2 lg:space-y-4">
									<label class="font-medium">จังหวัด</label>
									<w-input color="black" placeholder="จังหวัด"></w-input>
								</div>
								<div class="space-y-4">
									<label class="font-medium">รหัสไปรษณีย์</label>
									<w-input color="black" placeholder="รหัสไปรษณีย์"></w-input>
								</div>
							</div>
							<div class="space-y-4">
								<label class="font-medium">วันเดือนปี ที่จัดตั้งองค์กร</label>
								<w-input type="date" color="black"></w-input>
							</div>
							<div class="space-y-4">
								<label class="font-medium">ชื่อ-สกุล ผู้บริหาร</label>
								<w-input color="black" placeholder="เลขที่ หมู่ ซอย ถนน"></w-input>
							</div>
							<div class="grid grid-cols-2 gap-10">
								<div class="space-y-2 lg:space-y-4">
									<label class="font-medium">เบอร์โทรศัพท์</label>
									<w-input color="black" placeholder="เบอร์โทรศัพท์"></w-input>
								</div>
								<div class="space-y-4">
									<label class="font-medium">อีเมล</label>
									<w-input color="black" placeholder="อีเมล"></w-input>
								</div>
							</div>
							<div class="space-y-4">
								<label class="font-medium">รายละเอียด</label>
								<div class="h-full bg-namjaiwhite">
									<w-textarea placeholder="ใส่รายละเอียดขององค์กรในช่องนี้" class="font-normal p-4" color="black">
									</w-textarea>
								</div>
							</div>
							<div class="space-y-8 py-16">
								<div class="space-y-4">
									<label class="font-medium">หนังสือการจัดตั้งองค์กร</label>
									<div class="w-36 h-10 border bg-namjaibrown rounded-md py-2 text-center">
										<w-button class="ma1" bg-color="transparent" color="white">เลือกไฟล์</w-button>
									</div>
								</div>
								<div class="space-y-4">
									<label class="font-medium">สำเนาบัตรประชาชนผู้บริหาร</label>
									<div class="w-36 h-10 border bg-namjaibrown rounded-md py-2 text-center">
										<w-button class="ma1" bg-color="transparent" color="white">เลือกไฟล์</w-button>
									</div>
								</div>
								<div class="space-y-4">
									<label class="font-medium">สำเนาหน้าสมุดบัญชีองค์กร</label>
									<div class="w-36 h-10 border bg-namjaibrown rounded-md py-2 text-center">
										<w-button class="ma1" bg-color="transparent" color="white">เลือกไฟล์</w-button>
									</div>
								</div>
							</div>
						</div>
					</w-form>
					<div class="flex justify-center text-sm lg:text-base space-x-2 mx-10 lg:mb-10">
						<p>มีบัญชีแล้วใช่หรือไม่?</p>
						<button bg-color="transparent" class="ml-1 font-semibold">เข้าสู่ระบบ</button>
					</div>
				</div>
				<div name="process" class="hidden lg:inline lg:space-y-[50px] lg:fixed lg:right-44">
					<div class="space-y-3">
						<div class="w-20 h-20 rounded-full bg-namjaiwhite flex items-center mx-auto">
							<span class="mx-auto text-3xl font-semibold">1</span>
						</div>
						<span class="flex justify-center text-xl font-semibold">ข้อมูลผู้สมัคร</span>
					</div>
					<div class="space-y-3">
						<div class="w-20 h-20 rounded-full bg-namjaiwhite flex items-center mx-auto">
							<span class="mx-auto text-3xl font-semibold">2</span>
						</div>
						<span class="flex justify-center text-xl font-semibold">ข้อมูลองค์กร</span>
					</div>
					<div class="space-y-3">
						<div class="w-20 h-20 rounded-full bg-namjaiwhite flex items-center mx-auto">
							<span class="mx-auto text-3xl font-semibold">3</span>
						</div>
						<span class="flex justify-center text-xl font-semibold">เอกสารองค์กร</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
