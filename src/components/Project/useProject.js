import { reactive, ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function useProjects() {
	const project = reactive([]);

	const getProjectByID = async (id) => {
		let response = await http.get(`/view/foundationprojects/${id}`);
		project[0] = response.data;
		console.log(project[0]);
	};

	return { project, getProjectByID };
}
