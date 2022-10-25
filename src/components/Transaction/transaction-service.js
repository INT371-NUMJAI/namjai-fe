import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class TransactionService {
    addFDNBankAccount(payload) {
        return http.post("/view/bank-account/create", payload);
    }

}

export default new TransactionService();

