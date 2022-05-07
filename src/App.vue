<template>
	<w-app>
		<w-button @click="showDrawer = true" bg-color="transparent">
			<w-icon color="black">fa fa-bars</w-icon>
		</w-button>
		<w-drawer v-model="showDrawer" bg-color="namjaigreen" width="187">
			<w-button class="button--close" @click="showDrawer = false" sm outline round absolute color="black"
				icon="wi-cross"></w-button>
			<div class="space-y-6 mx-5 mt-10 w-96">
				<div class="flex justify-center">
					<w-button bg-color="transparent" outline round class="text-sm text-black">เข้าสู่ระบบ</w-button>
				</div>
				<div class="flex justify-center">
					<w-button bg-color="transparent" outline round class="text-sm text-black">สมัครสมาชิก</w-button>
				</div>
				<w-divider class="w-36" color="grey" />
				<div class="space-y-7 -ml-2">
					<div class="flex justify-end">
						<w-button bg-color="transparent" color="info-light1" class="block text-xl w-auto">มูลนิธิ
						</w-button>
					</div>
					<div class="flex justify-end">
						<w-button bg-color="transparent" color="info-light1" class="block text-xl w-auto">โครงการ
						</w-button>
					</div>
					<div class="flex justify-end">
						<w-button bg-color="transparent" color="info-light1" class="block text-xl w-auto">จิตอาสา
						</w-button>
					</div>
					<div class="flex justify-end">
						<w-button bg-color="transparent" color="info-light1" class="block text-xl w-auto">เกี่ยวกับเรา
						</w-button>
					</div>
				</div>
				<div class="flex justify-center">
					<w-button outline round bg-color="transparent" color="black" class="block w-auto">ออกจากระบบ
					</w-button>
				</div>
			</div>
		</w-drawer>
	</w-app>
</template>
<script>
export default {
	data() {
		return {
			showDrawer: false
		}
	}
}
</script>
<style scoped>
.namjaigreen--bg {
	background-color: #00715D;
}

.navy-blue--bg {
	background-color: #345276;
}
</style>