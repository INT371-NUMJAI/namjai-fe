<template>
	<div class="mx-[30px] md:mx-24 lg:mx-44">
		<div class="my-10 cursor-pointer" @click="routeToProjects">
			<h1 class="mt-10 text-2xl lg:text-[48px] lg:mt-[120px] font-semibold">โครงการ</h1>
			<div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4"></div>
		</div>
		<div class="w-full flex overflow-x-auto space-x-3 cursor-pointer">
		<div v-for="target in targetList" :key="target.targetCategoriesID">
			<div @click="routeToCategories(target.targetCategoriesID)" class="bg-white hover:text-white hover:bg-namjaigreen w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
				<div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
					<img :src="`src/assets/${target.icon}`" />
					<!-- <img src="@/assets/medical.svg" /> -->
				</div>
				<h1 class="text-center pt-[10px]">{{ target.targetCategoriesName }}</h1>
			</div>
		</div>
		</div>
		<router-view :key="$route.path" />
		<!-- <router-view :key="$route.fullPath"></router-view> -->
	</div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import projectService from "./project-service";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
	components: {
		ProjectCard,
	},
	setup() {
		const fdnProjectList = ref([]);
		const fetchFdnProjectList = () => {
			projectService.getProjectListInShort().then((response) => {
				fdnProjectList.value = response.data;
			});
		};
		fetchFdnProjectList();

		const targetList = ref([
			{
				targetCategoriesID: "1",
				targetCategoriesName: "การแพทย์",
				icon: "medical.svg",
			},
			{
				targetCategoriesID: "2",
				targetCategoriesName: "การศึกษา",
				icon: "education.svg",
			},
			{
				targetCategoriesID: "3",
				targetCategoriesName: "เด็กและสตรี",
				icon: "children.svg",
			},
			{
				targetCategoriesID: "4",
				targetCategoriesName: "บรรเทาสาธารณะภัย",
				icon: "disaster.svg",
			},
			{
				targetCategoriesID: "5",
				targetCategoriesName: "ผู้พิการ",
				icon: "handicapped.svg",
			},
			{
				targetCategoriesID: "6",
				targetCategoriesName: "ผู้สูงอายุ",
				icon: "elder.svg",
			},
			{
				targetCategoriesID: "7",
				targetCategoriesName: "พัฒนาชุมชน",
				icon: "valley.svg",
			},
			{
				targetCategoriesID: "8",
				targetCategoriesName: "ศิลปะและวัฒนธรรม",
				icon: "art.svg",
			},
			{
				targetCategoriesID: "9",
				targetCategoriesName: "สัตว์",
				icon: "animal.svg",
			},
			{
				targetCategoriesID: "10",
				targetCategoriesName: "สิ่งแวดล้อม",
				icon: "environment.svg",
			},
			{
				targetCategoriesID: "11",
				targetCategoriesName: "สิทธิมนุษยชน",
				icon: "human.svg",
			},
		]);

		const router = useRouter();
		const routeToCategories = (id) => {
			router.push(`/project/catergories/${id}`);
		};

		const routeToProjects = () => {
			router.push(`/project`);
		};

		return { fdnProjectList, targetList, routeToCategories, routeToProjects };
	},
};
</script>
<style scoped>
/* .namjai-active-link {
	color: white;
} */

::-webkit-scrollbar {
	display: none;
}
</style>
