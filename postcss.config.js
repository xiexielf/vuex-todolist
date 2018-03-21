/*
	postcss-loader的配置文件
*/ 
module.exports = {
	// "plugins": {
	// 	"postcss-import": {},
	// 	"autoprefixer": {}
	// }
	// 	两种都可以，没有postcss-import不会自动添加前缀
	plugins :[
		require('postcss-import'),
		require('autoprefixer')
	]
}