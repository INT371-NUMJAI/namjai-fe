import http from "../http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class AuthService {
	login(user) {
		return http.post("/auth/login", user).then((response) => {
			if (response.data.jwt) {
				localStorage.setItem("user", JSON.stringify(response.data));
			}
			return response.data;
		});
	}

	logout() {
		localStorage.removeItem("user");
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
}

export default new AuthService();
