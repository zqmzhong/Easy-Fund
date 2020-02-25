<script>
export default {
    name: "NavDrawers",
    data: () => ({
        expand: true,
        categories: [
            ["optional", "steady", "theme", "research", "compare", "income", "manager", "fundBar"],
            ["price", "ranking", "rating", "company", "estimation", "investRanking", "dividend", "private"],
            ["currentPo", "indexPo", "buy", "steady", "ranking", "regularPo", "privatePo", "incomeRanking", "vip"],
            ["currentPo", "regularPo", "indexPo", "privatePo", "incomeList", "steady", "vip", "insurance"],
            ["help", "education", "advice", "safe"],
        ],
        categoryNames: ["hot", "data", "trade", "buy", "guide"],
        icons: ["fire", "database", "currency-cny", "cart-outline", "account-group"],
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
            :prepend-icon="`mdi-${icons[index]}`"
            :value="index === 0"
        >
            <template v-slot:activator>
                <v-list-item-title class="font-face">
                    {{ $t(`labels.${categoryNames[index]}`) }}
                </v-list-item-title>
            </template>

            <v-list-item
                v-for="(item, i) in category"
                :key="i"
                class="category-list"
                link
            >
                <v-list-item-title
                    class="font-face subtitle-2"
                    v-text="$t(`labels.${item}`)"
                />
            </v-list-item>
        </v-list-group>
    </v-list>
</template>

<style lang="scss" scoped>
.category-list {
    padding-left: 72px;
    min-height: 38px;
}
</style>
