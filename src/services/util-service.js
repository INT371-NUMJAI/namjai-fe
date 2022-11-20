import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

class UtilService {
    uploadImage (data) {
        http.defaults.headers["Content-type"] = "multipart/form-data";
		return http.post("/util/resource/upload-pic", data);
    }

    getImage(imgPath) {
        return http.get(`/util/img?path=${imgPath}`);
    }

    checkIfChooseSuggestion(email) {
        return http.get(`/auth/user/suggestion?id=${email}`);
    }

}


export default new UtilService();