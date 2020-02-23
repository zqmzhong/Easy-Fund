<script>
export default {
    name: "NavTab",
    props: {
        icon: { type: String, require: true },
        text: { type: String, require: true },
    },
    computed: {
        iconName() {
            return `mdi-${this.icon}`;
        },
        displayText() {
            return this.$t(`labels.${this.text}`);
        },
    },
};
</script>

<template>
    <div class="card-tab ma-2">
        <v-card hover>
            <v-icon
                color="red lighten-1"
                size="60"
            >
                {{ iconName }}
            </v-icon>
        </v-card>
        <v-sheet class="font-face text-center pa-0">
            {{ displayText }}
        </v-sheet>
    </div>
</template>

<style lang="scss" scoped>
    .card-tab {
        float: left;
        align-items: center;
    }
</style>
