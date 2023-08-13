module.exports = {
	publicPath: "/cashflow-balance-sheet",
	configureWebpack: {
		devtool: "source-map"
	},
	css: {
		loaderOptions: {
			sass: {
			prependData: `@import "@/palette.scss";`
			}
		}
	}
};
