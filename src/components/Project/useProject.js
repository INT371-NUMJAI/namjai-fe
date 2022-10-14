import { ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function useProjects() {
	const project = ref([]);
	// const omise = require("omise")({
	// 	secretKey: process.env.SECRET_KEY_OMISE,
	// 	publicKey: process.env.PUBLIC_KEY_OMISE,
	//   });
	// OmiseCard.configure({
	// 	publicKey: "OMISE_PUBLIC_KEY"
	//   });

	const getProjectByID = async (id) => {
		let response = await http.get(`/view/foundationprojects/${id}`);
		project.value = response.data;
	};
	return { project, getProjectByID };
}
