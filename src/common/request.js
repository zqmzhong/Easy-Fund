import { isEmpty, forIn } from "lodash";

const baseResource = "/fundApi";

const requestSettings = {
    search_fund_detail: {
        url: "/pingzhongdata/[symbol].js",
        method: "GET",
    },
    get_all_funds: {
        url: "/js/fundcode_search.js",
        method: "GET",
    },
    get_market_value: {
        url: "?page=[page]&pagesize=[pageSize]&type=[type]&key=6cd8df35cc89cf8bf6bfcc5cf197d3d4",
        method: "GET",
    },
};

function getRequestInfo(requestName, params, baseUrl) {
    const requestInfo = { ...requestSettings[requestName] };
    let { url } = requestInfo;

    if (!isEmpty(params)) {
        forIn(params, (value, key) => {
            url = url.replace(`[${key}]`, value);
        });
    }

    if (baseUrl) {
        requestInfo.url = baseUrl + url;
    } else {
        requestInfo.url = baseResource + url;
    }

    return requestInfo;
}

export default getRequestInfo;
