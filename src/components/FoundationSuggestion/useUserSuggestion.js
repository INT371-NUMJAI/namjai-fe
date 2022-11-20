import { ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function useUserSuggestion() {
	
    const userSuggestionFDN = ref([]);
    const userSuggestionVolunteer = ref([]);
	const getVolunteerSuggestion = async (email) => {
		let response = await http.get(`/view/volunteer-projects/user-suggestion/${email}`);
		userSuggestionVolunteer.value = response.data;
	};

    const getSuggestionFoundation = async (email) => {
        let response = await http.get(`/view/projects/user-suggestion/${email}`);
        userSuggestionFDN.value = response.data;
    }

	return { userSuggestionFDN, userSuggestionVolunteer, getVolunteerSuggestion, getSuggestionFoundation };
}
