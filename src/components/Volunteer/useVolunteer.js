import { ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function volunteerService() {
	const volunteer = ref([]);
	const volunteerUUID = ref("");

	const getVolunteerDetailByID = async (id) => {
		let response = await http.get(`/view/volunteer-projects-detail/${id}`);
		volunteer.value = response.data;
		volunteerUUID.value = response.data.volunteerProjectsUUID;
	};

	const volunteerList = ref([]);
	const getEnrolledVolunteerList = async (id) => {
		let response = await http.get(`/view/volunteer/${id}/enrolledlist`);
		volunteerList.value = response.data;
	}

	return { volunteer, getVolunteerDetailByID, volunteerList, volunteerUUID, getEnrolledVolunteerList };
}
