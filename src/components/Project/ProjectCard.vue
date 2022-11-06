<template>
	<div class="md:w-[300px] w-[330px] md:gap-5 lg:w-[342px] mb-[20px]" v-for="(projectCardProp, index) in projectCardProps" :key="index">
		<router-link :to="'/project/' + projectCardProp.projectUUID">
			<div class="bg-white rounded-lg drop-shadow-md hover:shadow-md">
				<div class="relative cursor-pointer">
					<img v-if=" projectCardProp.picturePath != null" class="w-full h-[250px] rounded-t-lg md:rounded-bl-none md:rounded-t-lg lg:rounded-bl-none lg:rounded-t-lg transition-all duration-500 ease-in-out transform bg-center object-cover" :src="getImage(projectCardProp.picturePath)" />
        			<img v-else-if=" projectCardProp.picturePath === null" class="rounded-t-lg object-center" src="@/assets/image-unavailable.jpeg" />
					<div class="absolute top-0 right-0 p-3">
						<h1 class="px-4 py-1.5 text-white rounded-lg font-bold text-[14px] lg:text-[20px]">{{ projectCardProp.status }}</h1>
					</div>
				</div>

				<div class="p-5">
					<h1 class="mb-2 h-[46px] lg:h-[52px] overflow-hidden text-gray-900 text-[14px] lg:text-[16px]">{{ projectCardProp.projectName }}</h1>
					<p class="mb-3 h-10 text-[12px] lg:text-[14px] overflow-hidden truncate text-namjaidarkgray tracking-wide">{{ projectCardProp.projectDetail }}</p>
					<div class="space-y-2.5">
						<div class="flex justify-between items-center">
							<h2 class="text-[12px] lg:text-[14px] font-black">ยอดบริจาคปัจจุบัน</h2>
							<h1 class="text-xl text-namjaigreen">{{ projectCardProp.received }}</h1>
						</div>

						<w-progress :model-value="projectCardProp.percentage" size="1em" bg-color="grey-light4" color="namjaigreen" round round-cap> </w-progress>

						<div class="flex justify-between items-center">
							<div class="space-y-1">
								<h2 class="text-[12px] font-black">เป้าหมาย</h2>
								<h1 class="text-xl text-namjaired">{{ projectCardProp.goal }}</h1>
							</div>
							<button class="px-7 py-2 bg-namjaigreen font-bold text-white rounded-lg">บริจาค</button>
						</div>
					</div>
					<!-- <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a> -->
				</div>
			</div>
		</router-link>
	</div>
</template>

<style scoped>
.namjaigreen {
	color: #00715d;
}
</style>
<script>
import { ref, computed } from 'vue';


export default {
	props: {
		projectCardProps: {
			type: Array,
		},
	},
	setup() {

		const getImage = (imagePath) => {
      return `${import.meta.env.VITE_APP_BACKEND_URL}/util/img?path=${imagePath}`
    }
		// const color = ref("");

		// console.log(props.projectCardProps.status)
		// const setStatus = computed(() => {
		// 	const message = ref("");
		// 	if ("OPEN" === props.statusProps) {
		// 		color.value = "bg-namjaigreen";
		// 		return (message.value = "OPEN");
		// 	}
		// 	if ("CLOSED" === props.statusProps) {
		// 		color.value = "bg-namjaigray";
		// 		return (message.value = "CLOSED");
		// 	}
		
		// 	return (message.value = "N/A");
		// });
		return { getImage }
	}
};
</script>
