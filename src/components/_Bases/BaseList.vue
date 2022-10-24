<template>
	<table>
		<thead class="text-black bg-white" >
			<!-- v-for="(objectProp, index) in objectProps" :key="index" -->
			<!-- <router-link to="objectProp.uuid"> -->
			<!-- <router-link :to="'/view-customer/' + customer.ID"></router-link> -->

			<tr>
				<!-- <router-link :to="'/verify/fdn/' + objectProp.fdnUUID">
					<th class="py-3 w-[83px]">{{ index + 1 }}</th> -->
					<!-- <th class="py-3 w-[83px]">{{ objectProp.fdnUUID }}</th> -->
					<!-- <th>
						<p class="overflow-hidden truncate py-3 w-[300px]">{{ objectProp.fdnName }}</p>
					</th>
					<th class="py-3 w-[260px]">-</th>
					<th class="py-3 w-[185px]">{{ objectProp.createDate }}</th>
					<th class="py-3 w-[95px]"><verification-status :statusText="objectProp.status" /></th>
				</router-link>
				<th class="py-3 w-[250px]">{{ objectProp.approval }}</th> -->
				<slot></slot>
			</tr>

			<!-- </router-link> -->
		</thead>
	</table>
</template>

<script>
// import VerificationStatus from "@/components/Verification/VerificationStatus.vue";

export default {
	// components: {
	// 	VerificationStatus,
	// },
	// props: {
	// 	objectProps: {
	// 		type: Array,
	// 	},
	// },
};
</script>

<style scoped>
.table {
	border-spacing: 0 15px;
}

.table tr {
	border-radius: 20px;
}

/* tr td:nth-child(n + 6),
tr th:nth-child(n + 6) {
	border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
	border-radius: 0.625rem 0 0 0.625rem;
} */


</style>
