<template>
	<div>
		<w-button @click="showDrawer = true" bg-color="transparent">
			<w-icon color="white">fa fa-bars</w-icon>
		</w-button>
		<w-drawer v-model="showDrawer" bg-color="namjaigreen" width="187" class="z-50 absolute">
			<w-button class="button--close m-2" @click="showDrawer = false" sm outline round absolute color="black" icon="wi-cross"></w-button>
			<div class="space-y-6 mx-5 mt-10 w-96">
				<div v-if="use_auth.store_auth.user === null" class="flex justify-center">
					<router-link to="/login">
						<w-button @click="showDrawer = !showDrawer" bg-color="transparent" outline round class="text-black py-1">เข้าสู่ระบบ</w-button>
					</router-link>
					<w-divider class="w-36" color="grey" />
				</div>
				<div class="space-y-7 -ml-2 mt-9">
					<div class="flex justify-end">
						<router-link to="/foundation">
							<w-button bg-color="transparent" color="black" class="block w-auto">มูลนิธิ </w-button>
						</router-link>
					</div>
					<div class="flex justify-end">
						<router-link to="/projects">
							<w-button bg-color="transparent" color="black" class="block w-auto">โครงการ </w-button>
						</router-link>
					</div>
					<div class="flex justify-end">
						<router-link to="/volunteer">
							<w-button @click="showDrawer = !showDrawer" bg-color="transparent" color="black" class="block w-auto">จิตอาสา </w-button>
						</router-link>
					</div>
					<div class="flex justify-end">
						<w-button bg-color="transparent" color="black" class="block w-auto">ข่าวสาร</w-button>
					</div>
					<div class="flex justify-end">
						<w-button bg-color="transparent" color="black" class="block w-auto">ข้อมูลส่วนตัว</w-button>
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
import { ref } from "vue";
import { useAuth } from '../../services/auth-middleware';
import { useRouter } from 'vue-router';


export default {
	setup() {
		const use_auth = useAuth();

		const showDrawer = ref(false);
		const showDropDown = ref(false);
		return { showDrawer, showDropDown, use_auth };
	},
};
</script>
<style scoped>
.namjaigreen--bg {
	background-color: #00715d;
}

.navy-blue--bg {
	background-color: #345276;
}
</style>
