module.exports = {
    transpileDependencies: ["vuetify"],
    devServer: {
        proxy: {
            "/fundApi": {
                target: "http://fund.eastmoney.com",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/fundApi": "",
                },
            },
            "/juheApi": {
                target: "http://v.juhe.cn/jingzhi/query.php",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/juheApi": "",
                },
            },
        },
    },
};
