import { isEmpty } from "lodash";

const baseUrl = "/fundapi";

const requestSettings = {
    search_fund_detail: {
        url: "/pingzhongdata/[fundId].js",
        method: "GET",
    },
    get_all_funds: {
        url: "/js/fundcode_search.js",
        method: "GET",
    },
};

function getRequestInfo(requestName, params) {
    const requestInfo = requestSettings[requestName];
    let { url } = requestInfo;

    if (!isEmpty(params)) {
        Object.keys(params).forEach((key) => {
            url = url.replace(`[${key}]`, params.key);
        });
    }

    requestInfo.url = baseUrl + url;
    return requestInfo;
}

export default getRequestInfo;
