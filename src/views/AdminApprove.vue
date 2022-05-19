<template>
 <div class="mt-[120px]">
				<table class="table-auto mx-auto mb-[10px]">
					<thead class="bg-namjaibrown text-namjaiwhite">
						<tr>
							<th class="py-3 px-4 text-center">ลำดับ</th>
							<th class="text-center w-96 px-4">มูลนิธิ</th>
							<th class="px-4 w-[150px] text-center">ชื่อ-สกุล</th>
							<th class="px-4 w-[150px] text-center">วันที่สมัคร</th>
							<th class="px-4 text-center">สถานะ</th>
							<th class="px-4 w-[150px] text-center">ผู้อนุมัติ</th>
						</tr>
					</thead>
				</table> 
				<base-list />
			</div>
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