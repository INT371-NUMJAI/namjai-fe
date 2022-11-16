<template>
      <Search v-if="hiddenProp" @update:modelValue="submitInputSearch" class="mb-[60px]" />
    <!-- <router-link to="/volunteerdetail"> -->
    <!-- </router-link> -->
	<div class="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-5 md:gap-6">
	<div v-for="volunteerProp in searchVolunteerList" :key="volunteerProp.volunteerProjectUUID">
		<div class="lg:max-w-sm md:max-w-md rounded-lg overflow-hidden bg-namjaiwhite drop-shadow-md hover:shadow-md cursor-pointer">
			<img v-if="volunteerProp.picturePath != null" class="w-full h-[250px] rounded-t-lg md:rounded-bl-none md:rounded-t-lg lg:rounded-bl-none lg:rounded-t-lg transition-all duration-500 ease-in-out transform bg-center object-cover" :src="getImage(volunteerProp.picturePath)" @click="routeToVolunteerProjectDetail(volunteerProp.volunteerProjectUUID)" />
			<!-- <img v-if=" projectCardProp.picturePath != null" class="w-full h-[250px] rounded-t-lg md:rounded-bl-none md:rounded-t-lg lg:rounded-bl-none lg:rounded-t-lg transition-all duration-500 ease-in-out transform bg-center object-cover" :src="getImage(projectCardProp.picturePath)" /> -->
        	<img v-else-if="volunteerProp.picturePath === null" class="w-full h-[250px] rounded-t-lg md:rounded-bl-none md:rounded-t-lg lg:rounded-bl-none lg:rounded-t-lg transition-all duration-500 ease-in-out transform bg-center object-cover" src="@/assets/image-unavailable.jpeg" @click="routeToVolunteerProjectDetail(volunteerProp.volunteerProjectUUID)" />
			<div class="lg:px-6 lg:py-4 px-4 py-3 md:py-5">
				<div class="flex justify-between items-center">
					<h2 class="font-medium text-xl mb-1 overflow-hidden truncate w-[180px] md:[20px]">{{ volunteerProp.volunteerProjectName }}</h2>
					<!-- <div class="items-end bg-green-500 text-namjaiwhite text-center rounded-md py-1 px-4">เปิดอยู่</div> -->
					<base-status-button :statusText="volunteerProp.status"></base-status-button>
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
</div>
</template>

<script>
import { computed, reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import Search from "../Verification/Search.vue";
import BaseFilter from "../_Bases/BaseFilter.vue";


export default {
	components: {
    Search,
    BaseFilter,
  },
	props: {
		volunteerProps: {
			type: Array,
		},
		hiddenProp: {
			type: Boolean,
		}
	},
	setup(props) {
		const route = useRouter();
		const routeToVolunteerProjectDetail = (id) => {
			route.push(`/volunteer/${id}`);
		};

		const getImage = (imagePath) => {
      		return `${import.meta.env.VITE_APP_BACKEND_URL}/util/img?path=${imagePath}`
    	}
		const searchText = ref("");

		const submitInputSearch = (value) => {
			searchText.value = value;
		}

		const isFound = ref(false);
		const searchVolunteerList = computed(() => {
			isFound.value = false;
			if (searchText.value === "") {
				return props.volunteerProps;
			} else {
				let foundVolunteerList = props.volunteerProps.filter((f) => f.volunteerProjectName.toLowerCase().includes(searchText.value.toLowerCase()))
				if (foundVolunteerList === "") {
					isFound.value = true;
					return ; 
				}
				return foundVolunteerList;
			}
		})
		return {
			routeToVolunteerProjectDetail,
			getImage,
			submitInputSearch,
			searchText,
			searchVolunteerList
		};
		}
};
</script>

<style scoped>
.namjaigreen {
	color: #00715d;
}
</style>
