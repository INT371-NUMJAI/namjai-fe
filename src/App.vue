<template>
	<w-app>
		<div>
			<nav-bar />
			<div class="mt-[120px]">
				<table class="table-auto mx-auto">
					<thead class="bg-namjaibrown text-namjaiwhite">
						<tr class="space-x-7">
							<th class="py-2 px-2 text-center">ลำดับ</th>
							<th class="text-center">มูลนิธิ</th>
							<th>ชื่อ-สกุล</th>
							<th>วันที่สมัคร</th>
							<th>สถานะ</th>
							<th>ผู้อนุมัติ</th>
						</tr>
					</thead>
				</table>
				<base-list />
			</div>
			<!-- <router-view /> -->
		</div>
	</w-app>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import BaseList from "./components/BaseList.vue";
export default defineComponent({
	components: {
		NavBar,
		BaseList,
	},
});
</script>
<style scoped>
.table {
	border-spacing: 0 15px;
}

.table tr {
	border-radius: 20px;
}

tr td:nth-child(n + 6),
tr th:nth-child(n + 6) {
	border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
	border-radius: 0.625rem 0 0 0.625rem;
}
</style>
