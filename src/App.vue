<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
	<w-app>
		<table class="table-auto mx-28">
			<thead>
				<tr>
					<th class="w-10">ลำดับ</th>
					<th class="w-96">มูลนิธิ</th>
					<th>ชื่อ-สกุล</th>
					<th>วันที่สมัคร</th>
					<th>สถานะ</th>
					<th>ผู้อนุมัติ</th>
				</tr>
			</thead>
			<tbody class="bg-namjaiwhite text-namjaiblack">
				<tr>
					<td class="text-center py-2">1</td>
					<td>
						<p class="overflow-hidden truncate w-96 py-2 px-8">เยอร์บีร่าคอลัมน์บาร์บีคิวครูเสดซีดาaslvkamdflkvm;lfkv;slfbn</p>
					</td>
					<td class="text-center">
						ศุภานัน โชติธีรทัต
					</td>
					<td class="text-center">00/00/0000</td>
					<td class="text-center">สถานะ</td>
					<td class="text-center">ศุภานัน โชติธีรทัต</td>
				</tr>
			</tbody>
		</table>
	</w-app>
</template>
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