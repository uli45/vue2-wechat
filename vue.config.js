const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
    transpileDependencies: ['uview-ui', 'luch-request', '@dcloudio/uni-ui'],
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/uni.scss";`
            }
        }
    },
	//查看打包后的各项资源占比
	// ,configureWebpack: {	
	 // plugins: [
	 //    new BundleAnalyzerPlugin() , // 使用默认配置
	    // 默认配置的具体配置项
	    // new BundleAnalyzerPlugin({
	    //   analyzerMode: 'server',
	    //   analyzerHost: '127.0.0.1',
	    //   analyzerPort: '8888',
	    //   reportFilename: 'report.html',
	    //   defaultSizes: 'parsed',
	    //   openAnalyzer: true,
	    //   generateStatsFile: false,
	    //   statsFilename: 'stats.json',
	    //   statsOptions: null,
	    //   excludeAssets: null,
	    //   logLevel: info
	    // })
		// new CompressionWebpackPlugin(
		// 			{
		// 				filename: "[path][base].gz",
		// 				algorithm: "gzip",
		// 				test: /\.js$/,
		// 				threshold: 10240,
		// 				minRatio: 0.8,
		// 				exclude: /node_modules/,
		// 			}
		// 		)
	 //  ], 
	 
	 //  },
	   // chainWebpack: config => {
	   //    if (process.env.NODE_ENV === 'production') {
	   //      config.plugin('compressionPlugin')
	   //        .use(new CompressionPlugin({
	   //          filename: '[path].gz[query]',
	   //          algorithm: 'gzip',
	   //          test: productionGzipExtensions,
	   //          threshold: 10240,
	   //          minRatio: 0.8,
	   //          deleteOriginalAssets: true
	   //        }));
	   //    }
	   //  },
  // pluginOptions: {
  //     webpackBundleAnalyzer: {
  //       openAnalyzer: process.env.NODE_ENV === 'production'
  //     }
  //   },
}