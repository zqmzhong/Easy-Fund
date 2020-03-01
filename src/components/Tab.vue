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
    <div class="card-tab float-left">
        <v-card
            hover
            tile
            outlined
            :flat="true"
        >
            <v-icon
                color="orange"
                size="200"
            >
                {{ iconName }}
            </v-icon>
            <v-card-text class="font-face display-1 text-center pa-0">
                {{ displayText }}
            </v-card-text>
        </v-card>
    </div>
</template>

<style lang="scss" scoped>
    @import '~vuetify/src/styles/main.sass';

    .card-tab {
        align-items: center;
        .v-card {
            border-color: rgba(255, 193, 7);
        }
    }
</style>
