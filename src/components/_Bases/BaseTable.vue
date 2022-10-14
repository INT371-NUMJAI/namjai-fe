<template>
	<div class="mt-[40px] mb-[10px]">
		<table class="text-center mx-auto">
			<thead class="text-white bg-namjaibrown">
				<tr>
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
