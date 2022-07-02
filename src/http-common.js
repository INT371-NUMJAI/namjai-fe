import axios from "axios";

export default axios.create({
	baseURL: import.meta.env.VITE_APP_BACKEND_URL,
	// defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	// headers: {
	// 	"Content-type": "application/json",
	// 	// "common":
	// 	// "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
	// 	// "Access-Control-Allow-Headers": "Authorization",
	// 	// "Access-Control-Allow-Origin": "*",
	// },
	// headers: { "Access-Control-Allow-Origin": "*" },
});
