import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class FoundationService {
    async getFoundationById(id) {
        return http.get(`/view/foundation/${id}`);
    }
}


export default new FoundationService();