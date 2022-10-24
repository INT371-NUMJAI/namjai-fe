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

<style scoped>
.table tr {
	border-radius: 20px;
}
</style>
