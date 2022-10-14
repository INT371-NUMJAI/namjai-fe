import { ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function useProjects() {
	const project = ref([]);

	const getProjectByID = async (id) => {
		let response = await http.get(`/view/foundationprojects/${id}`);
		project.value = response.data;
	};
	return { project, getProjectByID };
}
