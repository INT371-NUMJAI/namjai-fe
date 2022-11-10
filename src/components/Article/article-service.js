import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class VolunteerService {
    createArticle(payload) {
        return http.post("/view/article/create", payload);
    }

}

export default new VolunteerService();

