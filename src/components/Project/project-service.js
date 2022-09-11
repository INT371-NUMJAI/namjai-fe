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
    async addProject(payload) {
        return http.post("/view/project/create", payload);
    }
    uploadQRCodePicture(payload) {
        http.defaults.headers["Content-type"] = "multipart/form-data";
        return http.post("/view/foundation/upload/qr", payload);
    } 
    uploadPicturePathFoundationProject(payload) {
        http.defaults.headers["Content-type"] = "multipart/form-data";
        return http.post("/view/foundation/project/upload-pic", payload);
    }
    async getPicturePath(path) {
        return http.get(`/view/img?imagePath=${path}`);
    }
}

export default new FoundationProjectService();
