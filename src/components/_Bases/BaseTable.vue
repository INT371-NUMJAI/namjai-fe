<template>
	<div class="mt-[40px] mb-[10px]">
		<table class="text-center mx-[177px]">
			<thead class="text-white bg-namjaibrown">
				<tr>
					<th class="py-3 w-[75px]">ลำดับ</th>
					<th>
						<p class="py-3 w-[300px]">มูลนิธิ</p>
					</th>
					<th class="py-3 w-[250px]">ชื่อ-สกุล</th>
					<th class="py-3 w-[200px]">วันที่สมัคร</th>
					<th class="py-3 w-[100px]">สถานะ</th>
					<th class="py-3 w-[250px]">ผู้อนุมัติ</th>
					<slot></slot>
				</tr>
			</thead>
		</table>
	</div>
</template>

<!-- <style scoped> -->
<style>
.table {
	border-spacing: 0 15px;
}

.table tr {
	border-radius: 20px;
}

/* tr td:nth-child(n + 6), */
tr td:nth-child(n+7),
/* tr th:nth-child(n + 6) { */
tr th:nth-child(n+7) {
	border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
	border-radius: 0.625rem 0 0 0.625rem;
}
</style>
