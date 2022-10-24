import { ref } from "vue";
import http from "@/http-common";
import { useAuth } from "../../services/auth-middleware";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function volunteerService() {
	const use_auth = useAuth();
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

	const checkEnrolled = ref(false);
	const getIsEnrolledOrNot = async (volunteerid, email) => {
		// http.defaults.headers["Content-type"] = "text/plain";
        let response = await http.get(`/view/volunteer/check-enrolled?volunteerid=${volunteerid}&email=${email}`);
		console.log(response.data)
		checkEnrolled.value = response.data;
		// console.log(checkEnrolled.value);
    }

	const volunteerShortList = ref([]);
	const getVolunteerShortList = async () => {
		let response = await http.get("/view/volunteer-projects");
		volunteerShortList.value = response.data;
	}

	return { volunteer, getVolunteerDetailByID, volunteerList, volunteerUUID, getEnrolledVolunteerList, checkEnrolled, getIsEnrolledOrNot, volunteerShortList, getVolunteerShortList };
}
