import { ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function useProjects() {
	const project = ref([]);
	const projects = ref([]);

	const getProjectByID = async (id) => {
		let response = await http.get(`/view/foundationprojects/${id}`);
		project.value = response.data;
	};

	const getProjectByFDNEmail = async (email) => {
		let response = await http.get(`/view/project/user?email=${email}`);
		projects.value = response.data;
	};

	const getProjectByFDNEmailAndStatusOpen = async (email) => {
		let response = await http.get(`/view/projects/user-fdn?email=${email}`);
		projects.value = response.data;
	}

	const progresses = ref([]);
	const getProjectProgress = async (id) => {
		let response = await http.get(`/view/project/${id}/progress`);
		progresses.value = response.data;
	}

	const financials = ref([]);
	const getProjectFinancial = async (id) => {
		let response = await http.get(`/view/${id}/financial`);
		financials.value = response.data;
	}

	return { project, projects, getProjectByID, getProjectByFDNEmail, getProjectByFDNEmailAndStatusOpen, progresses, getProjectProgress, financials, getProjectFinancial };
}
