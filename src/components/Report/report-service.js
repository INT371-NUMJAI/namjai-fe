import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class ReportService {
    async getReportList() {
        return http.get("/report/view");
    }
    async addReport(payload) {
        return http.post("/report/add", payload);
    }
}

export default new ReportService();
