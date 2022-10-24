<template>
	<div v-for="volunteerProp in volunteerProps" :key="volunteerProp.volunteerProjectUUID">
		<div class="lg:max-w-sm md:max-w-md rounded-lg overflow-hidden bg-namjaiwhite drop-shadow-md hover:shadow-md cursor-pointer">
			<img class="w-full" src="@/assets/pic1.png" @click="routeToVolunteerProjectDetail(volunteerProp.volunteerProjectUUID)" />
			<div class="lg:px-6 lg:py-4 px-4 py-3 md:py-5">
				<div class="flex justify-between items-center">
					<h2 class="font-medium text-xl mb-1 overflow-hidden truncate w-[180px] md:[20px]">{{ volunteerProp.volunteerProjectName }}</h2>
					<div class="items-end bg-green-500 text-namjaiwhite text-center rounded-md py-1 px-4">เปิดอยู่</div>
				</div>
				<div class="mb-4">{{ volunteerProp.foundationName }}</div>	
				<div class="space-y-3">
					<div class="flex space-x-1">
						<w-icon color="namjaigreen">fa fa-map-marker</w-icon>
						<p>{{ volunteerProp.locationProvince }}</p>
					</div>
					<div class="flex space-x-1">
						<w-icon color="namjaigreen">fa fa-calendar-o</w-icon>
						<p>{{ volunteerProp.activityStartDate.slice(0, 10) }} ถึง {{ volunteerProp.activityEndDate.slice(0, 10) }}</p>
					</div>
						<div class="flex space-x-1">
							<w-icon class="" color="namjaigreen">fa fa-user-o</w-icon>
							<p>{{ volunteerProp.peopleRegistered }}/{{ volunteerProp.peopleNeeded }}</p>
						</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
	props: {
		volunteerProps: {
			type: Array,
		}
	},
	setup() {
		const route = useRouter();
		const routeToVolunteerProjectDetail = (id) => {
			route.push(`/volunteer-detail/${id}`);
		};
		const testV = ref("<li>quick brown fox jumps</li> <li>quick brown fox jumpsfdf</li>");
		//  เป็นคนสัญชาติไทย,อายุไม่เกิน22ปี,
		return {
			routeToVolunteerProjectDetail,
			testV,
		};
	},
};
</script>

<style scoped>
.namjaigreen {
	color: #00715d;
}
</style>
