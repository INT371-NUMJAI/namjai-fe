import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class TransactionService {
    addFDNBankAccount(payload) {
        return http.post("/view/bank-account/create", payload);
    }

    createWithdrawRequest(payload) {
        return http.post("/view/request-withdrawal/create", payload);
    }

    approveWithdrawRequest(payload) {
        return http.post("/view/request-withdrawal/approve", payload);
    }
}

export default new TransactionService();

