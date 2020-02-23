import Vue from "vue";
import VueI18n from "vue-i18n";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import App from "./App.vue";
import en from "./assets/langs/en";
import zh from "./assets/langs/zh";

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: "zh",
    messages: { zh, en },
});

new Vue({
    vuetify,
    i18n,
    render: (h) => h(App),
}).$mount("#app");
