<template>
	<div>
		<w-button @click="showDrawer = true" bg-color="transparent">
			<w-icon color="white">fa fa-bars</w-icon>
		</w-button>
		<w-drawer v-model="showDrawer" bg-color="namjaigreen" width="187">
			<w-button
				class="button--close"
				@click="showDrawer = false"
				sm
				outline
				round
				absolute
				color="black"
				icon="wi-cross"
			></w-button>
			<div class="space-y-6 mx-5 mt-10 w-96">
				<div class="flex justify-center">
					<w-button bg-color="transparent" outline round class="text-black py-1">เข้าสู่ระบบ</w-button>
				</div>
				<div class="flex justify-center">
					<w-button bg-color="transparent" outline round class="text-black py-1">สมัครสมาชิก</w-button>
				</div>
				<w-divider class="w-36" color="grey" />
				<div class="space-y-7 -ml-2">
					<div class="flex justify-end">
						<w-button bg-color="transparent" color="info-light1" class="block w-auto">มูลนิธิ </w-button>
					</div>
					<div class="flex justify-end">
						<w-button bg-color="transparent" color="info-light1" class="block w-auto">โครงการ </w-button>
					</div>
					<div class="flex justify-end">
						<w-button bg-color="transparent" color="info-light1" class="block w-auto">จิตอาสา </w-button>
					</div>
					<div class="flex justify-end">
						<w-button bg-color="transparent" color="info-light1" class="block w-auto">เกี่ยวกับเรา </w-button>
					</div>
					<div class="flex justify-end">
						<w-accordion :items="1" expand-icon-left>
			<template #item-title>
				<div>บัญชี</div>
			</template>
			<template #item-content>
				<div class="space-y-2">
				<button class="block ml-6 "
					@click="showDropDown = false"
				>บัญชี</button>
				<button class="block ml-1"
					@click="showDropDown = false"
				>ข้อความ</button>
				<button class="block ml-7"
					@click="showDropDown = false"
				>สถิติ</button>
				</div>
			</template>
		</w-accordion>
					</div>
				</div>
				<div class="flex justify-center">
					<w-button outline round bg-color="transparent" color="black" class="block w-auto mt-10">ออกจากระบบ </w-button>
				</div>
			</div>
		</w-drawer>
	</div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
	data() {
		return {
			showDrawer: false,
			showDropDown: false,
		};
	},
});
</script>
<style scoped>
.namjaigreen--bg {
	background-color: #00715d;
}

.navy-blue--bg {
	background-color: #345276;
}
</style>
