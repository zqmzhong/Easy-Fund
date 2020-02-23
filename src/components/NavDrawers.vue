<script>
export default {
    name: "NavDrawers",
    data: () => ({
        categories: [
            ["optional", "steady", "theme", "research", "compare", "income", "manager", "fundBar"],
            ["price", "ranking", "rating", "company", "estimation", "investRanking", "dividend", "private"],
            ["currentPo", "indexPo", "buy", "steady", "ranking", "regularPo", "privatePo", "incomeRanking", "vip"],
            ["currentPo", "regularPo", "indexPo", "privatePo", "incomeList", "steady", "vip", "insurance"],
            ["help", "education", "advice", "safe"],
        ],
        categoryNames: ["hot", "data", "trade", "buy", "guide"],
        icons: [],
    }),
};
</script>

<template>
    <v-list>
        <v-list-item>
            <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group
            v-for="(category, index) in categories"
            :key="index"
            prepend-icon="account_circle"
            value="true"
        >
            <template v-slot:activator>
                <v-list-item-title class="font-face">
                    {{ $t(`labels.${categoryNames[index]}`) }}
                </v-list-item-title>
            </template>

            <v-list-item
                v-for="(item, i) in category"
                :key="i"
                link
            >
                <v-list-item-title class="font-face" v-text="$t(`labels.${item}`)" />
<!--                <v-list-item-icon>-->
<!--                    <v-icon v-text="item" />-->
<!--                </v-list-item-icon>-->
            </v-list-item>
        </v-list-group>
    </v-list>
</template>

<style scoped>

</style>
