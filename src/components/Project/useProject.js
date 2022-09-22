import { reactive, ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function useProjects() {
	const fdnProject = ref({});

	const getProjectByID = async (id) => {
		let response = await http.get(`/view/foundationprojects/${id}`);
		fdnProject.value = response.data;
		console.log(fdnProject.value);
	};

	return { fdnProject, getProjectByID };
}
