import http from "../http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class AuthService {
	login(user) {
		return http.post("/auth/login", user).then((response) => {
			if (response.data.accessToken) {
				localStorage.setItem("user", JSON.stringify(response.data));
				// console.log(localStorage.getItem("user"));
			}
			return response.data;
		});
	}

	logout() {
		window.localStorage.removeItem("user");
	}

	register(user) {
		return http.post("/auth/signup", user);
	}

	registerFoundation(fdn) {
		return http.post("/auth/signup/fdn", fdn);
	}

	uploadFDNDocument(data) {
		http.defaults.headers["Content-type"] = "multipart/form-data";
		return http.post("/auth/fdn/upload-doc", data);
	}

	getUsernameList() {
		return http.get("/view/userlist");
	}

	getUUID(email) {
		return http.get(`/view/getName?email=${email}`).then((response) => {
			if (response.data) {
				localStorage.setItem("uuid", JSON.stringify(response.data));
				// console.log(localStorage.getItem("user"));
			}
			return response.data;
		});
	}

	createUserSuggestion(payload) {
		return http.post("/auth/user-suggestion/add", payload);
	}
}

export default new AuthService();
