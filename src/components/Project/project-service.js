import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class FoundationProjectService {
    async getProjectListInShort() {
        return http.get("/view/short/foundationprojects");
    }
    async getProjectById(id) {
        return http.get(`/view/foundationprojects/${id}` );
    }
}

export default new FoundationProjectService();
