module.exports = {
    transpileDependencies: ["vuetify"],
    devServer: {
        proxy: {
            "/fundapi": {
                target: "http://fund.eastmoney.com",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/fundapi": "",
                },
            },
        },
    },
};
