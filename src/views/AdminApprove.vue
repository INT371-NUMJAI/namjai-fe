<template>
	<div class="mt-[120px]">
		<div class="mx-[177px]">
			<h1 class="text-namjaiblack font-semibold text-5xl">มูลนิธิ</h1>
			<div class="mt-4">
				<div class="w-16 border-4 border-t border-namjaired"></div>
			</div>
		</div>
		<base-table />
		<router-link to="/fdn"> <base-list /></router-link>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import BaseList from "../components/Bases/BaseList.vue";
import BaseTable from "../components/Bases/BaseTable.vue";

export default defineComponent({
	components: {
		BaseList,
		BaseTable,
	},
});
</script>
