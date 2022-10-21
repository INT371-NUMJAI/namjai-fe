import { ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function volunteerService() {
	const volunteer = ref([]);

	const getVolunteerDetailByID = async (id) => {
		let response = await http.get(`/view/volunteer-projects-detail/${id}`);
		volunteer.value = response.data;
	};

	return { volunteer, getVolunteerDetailByID };
}
