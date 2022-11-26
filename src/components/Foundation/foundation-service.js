import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class FoundationService {
    getFoundationList() {
        return http.get("/view/foundationlist/short");
    }
}


export default new FoundationService();