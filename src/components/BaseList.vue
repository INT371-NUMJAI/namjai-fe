<template>
	<table class="table-auto mx-auto">
		<tbody class="bg-namjaiwhite text-namjaiblack">
			<tr>
				<td class="text-center py-3 px-4">1</td>
				<td>
					<p class="overflow-hidden truncate w-[415px] py-2 px-4">
						เยอร์บีร่าคอลัมน์บาร์บีคิวครูเสดซีดาaslvkamdflkvm;lfkv;slfbn
					</p>
				</td>
				<td class="text-center px-4 w-[150px]">ศุภานัน โชติธีรทัต</td>
				<td class="text-center px-4 w-[150px]">00/00/0000</td>
				<verification-status class="mt-2 -ml-2" />
				<!-- <td class="text-center px-4">สถานะ</td> -->
				<td class="text-center px-4 w-[150px]">ศุภานัน โชติธีรทัต</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import { defineComponent } from "vue";
import VerificationStatus from "./VerificationStatus.vue";

export default defineComponent({
	components: {
		NavBar,
		VerificationStatus,
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
