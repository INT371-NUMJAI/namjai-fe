<template>
	<div>
		<view-volunteer-detail ></view-volunteer-detail>
		<!-- <div class="my-10">
			<h1 class="mt-10 text-2xl lg:text-[48px] lg:mt-[120px] font-semibold">จิตอาสา</h1>
			<div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4"></div>
		</div> -->
		<!-- <router-link to="/volunteerdetail"> -->
		<!-- <div class="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-5 md:gap-6">
		<volunteer-activity-card :volunteerProps="volunteerShortList" />
	    </div> -->
		<!-- </router-link> -->
	</div>
</template>

<script>
import useVolunteer from "./useVolunteer";
import ViewVolunteerDetail from './ViewVolunteerDetail.vue';

export default {
	components: {
		ViewVolunteerDetail,
	},
	setup() {
		const { volunteerShortList, getVolunteerShortList } = useVolunteer();

		getVolunteerShortList();

		return { volunteerShortList }
	}
};
</script>
