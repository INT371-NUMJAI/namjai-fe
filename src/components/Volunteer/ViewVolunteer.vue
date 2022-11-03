<template>
	<div class="mx-[30px] md:mx-[40px] lg:mx-44">
		<div class="my-10">
			<h1 class="mt-10 text-2xl md:text-4xl lg:text-[48px] lg:mt-[120px] font-semibold">จิตอาสา</h1>
			<div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4"></div>
		</div>
		<!-- <router-link to="/volunteerdetail"> -->
		<div class="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-5 md:gap-6">
		<volunteer-activity-card :volunteerProps="volunteerShortList" />
	    </div>
		<!-- </router-link> -->
		<div class="flex justify-center py-[60px]">
			<button class="bg-transparent hover:bg-namjaigreen text-namjaigreen font-medium hover:text-white py-2 px-10 border-2 border-namjaigreen hover:border-transparent rounded">เพิ่มเติม</button>
		</div>
	</div>
</template>

<script>
import VolunteerActivityCard from "./VolunteerActivityCard.vue";
import useVolunteer from "./useVolunteer";

export default {
	components: {
		"volunteer-activity-card": VolunteerActivityCard,
	},
	setup() {
		const { volunteerShortList, getVolunteerShortList } = useVolunteer();

		getVolunteerShortList();

		return { volunteerShortList }
	}
};
</script>
