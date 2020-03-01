import axios from "axios";
import getRequestInfo from "../common/request";

function search(symbol) {
    const requestConfig = getRequestInfo("search_fund_detail", { symbol });
    axios.request(requestConfig).then((response) => {
        console.log(response);
    });
}

function getAll() {
    const requestConfig = getRequestInfo("get_all_funds");

    return axios.request(requestConfig).then((response) => {
        if (response.status !== 200) {
            throw new Error("Get fund data failed.");
        }

        return JSON.parse(response.data.replace("var r = ", "").replace(";", ""));
    }).catch((e) => {
        throw e;
    });
}

function getMarketValues(params) {
    const requestConfig = getRequestInfo("get_market_value", params, "/juheApi");

    return axios.request(requestConfig).then((response) => {
        if (response.status !== 200 || response.data.error_code !== 0 || response.data.reason !== "success") {
            throw new Error("Get fund data failed.");
        }
        return response.data;
    }).catch((e) => {
        throw e;
    });
}

export default { search, getAll, getMarketValues };
