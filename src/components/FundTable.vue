<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="funds"
            :page.sync="page"
            :items-per-page="pageSize"
            :sort-by="['calories', 'fat']"
            :sort-desc="[false, true]"
            hide-default-footer
            class="elevation-1"
        />
        <div class="text-center">
            <v-pagination
                :value="page"
                :length="Math.ceil(total/pageSize)"
                :total-visible="10"
                @input="page = parseInt($event, 10)"
                @next="page"
                @previous="page"
            />
        </div>
    </div>
</template>

<script>
import { toNumber, round } from "lodash";
import Fund from "../services/fund";

export default {
    name: "FundTable",
    data: () => ({
        page: 1,
        pageSize: 20,
        total: 0,
        type: "netvalue",
        headers: [
            {
                text: "index",
                align: "left",
                sortable: false,
                value: "index",
            },
            { text: "symbol", value: "symbol" },
            { text: "shortName", value: "shortName" },
            { text: "perPrice", value: "perPrice" },
            { text: "totalPrice", value: "totalPrice" },
            { text: "return", value: "return" },
            { text: "returnRate", value: "returnRate" },
            { text: "status", value: "status" },
            { text: "fee", value: "fee" },
            { text: "operate", value: "operate" },
        ],
        funds: [],
    }),
    watch: {
        page(newPage) {
            this.getData(newPage, this.pageSize, this.type);
        },
    },
    mounted() {
        this.headers.forEach((item) => {
            // eslint-disable-next-line no-param-reassign
            item.text = this.$t(`labels.headers.${item.text}`);
        });
        this.getData(this.page, this.pageSize, this.type);
    },
    methods: {
        getData(page, pageSize, type) {
            const params = { page, pageSize, type };
            Fund.getMarketValues(params).then((res) => {
                const { total, result } = res;
                this.total = total;
                this.funds = result.map((item, index) => {
                    /* eslint-disable camelcase */
                    const {
                        symbol, sname, per_nav, total_nav, nav_a, nav_rate, sg_states,
                    } = item;
                    /* eslint-enable camelcase */
                    return {
                        index: index + 1,
                        symbol,
                        shortName: sname,
                        perPrice: round(toNumber(per_nav), 4),
                        totalPrice: round(toNumber(total_nav), 4),
                        return: round(toNumber(nav_a), 4),
                        returnRate: `${round(toNumber(nav_rate), 2)}%`,
                        status: sg_states,
                        operate: this.$t("action.collect"),
                    };
                });
            });
        },
    },
};
</script>

<style scoped>

</style>
