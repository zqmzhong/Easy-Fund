<script>
import NavDrawers from "./components/NavDrawers.vue";
import NavTab from "./components/Tab.vue";
import FundTable from "./components/FundTable.vue";

export default {
    components: {
        NavDrawers,
        NavTab,
        FundTable,
    },
    data: () => ({
        funds: [],
        drawer: null,
        tabList: [
            // {
            //     label: "price",
            //     icon: "chart-bar",
            // },
            {
                label: "price",
                icon: "chart-line",
            }, {
                label: "fundBar",
                icon: "comment-text-outline",
            }, {
                label: "account",
                icon: "account-check-outline",
            }, {
                label: "ranking",
                icon: "format-list-numbered",
            }, {
                label: "optional",
                icon: "clipboard-plus-outline",
            },
            // {
            //     label: "trade",
            //     icon: "currency-cny",
            // }, {
            //     label: "buy",
            //     icon: "cart-outline",
            // }, {
            //     label: "currentPo",
            //     icon: "home-currency-usd",
            // }, {
            //     label: "vip",
            //     icon: "credit-card-outline",
            // },
        ],
    }),
    created() {
        this.$vuetify.theme.light = true;
    },
};
</script>

<template>
    <v-app id="found-fund">
        <v-navigation-drawer
            v-model="drawer"
            app
            clipped
        >
            <nav-drawers />
        </v-navigation-drawer>

        <v-app-bar
            app
            clipped-left
            color="amber"
            dense
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <!--            <v-icon class="mx-4">-->
            <!--                mdi-chart-timeline-variant-->
            <!--            </v-icon>-->
            <v-toolbar-title class="mr-12 align-center">
                <span class="title font-face">
                    {{ $t("title") }}
                </span>
            </v-toolbar-title>
            <v-spacer />
            <v-row
                align="center"
                style="max-width: 650px"
            >
                <v-text-field
                    class="font-face"
                    :append-icon-cb="() => {}"
                    :placeholder="$t('placeholder.search')"
                    single-line
                    append-icon="mdi-magnify"
                    color="white"
                    hide-details
                />
            </v-row>
        </v-app-bar>

        <v-content>
            <v-img src="./assets/images/home.jpg" />
            <div>
                <nav-tab
                    v-for="(item, index) in tabList"
                    :key="index"
                    :icon="item.icon"
                    :text="item.label"
                />
            </div>
            <v-container class="main-content fill-height">
                <fund-table />
            </v-container>
        </v-content>
    </v-app>
</template>

<style lang="scss">
/*.theme--light.v-sheet {*/
/*    color: azure;*/
/*}*/

#found-fund {
    .font-face {
        font-family: "Noto Sans SC" !important;
    }
    .main-content {
        align-items: normal;
    }
}

</style>
