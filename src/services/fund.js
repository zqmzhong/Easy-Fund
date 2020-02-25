import axios from "axios";
import getRequestInfo from "../common/request";

function search(fundId) {
    const requestConfig = getRequestInfo("search_fund_detail", { fundId });
    axios.request(requestConfig).then((response) => {
        console.log(response);
    });
}

function getAll() {
    const requestConfig = getRequestInfo("get_all_funds");

    return axios.request(requestConfig).then((response) => {
        if (response.status !== 200) {
            throw new Error("");
        }

        return JSON.parse(response.data.replace("var r = ", "").replace(";", ""));
    }).catch((e) => {
        throw e;
    });
}

export default { search, getAll };
