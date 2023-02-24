const CracoLessPlugin = require("craco-less");
const path = require("path")

module.exports = {
    webpack: {
        // 配置别名
        alias: {
            // 约定：使用 @ 表示 src 文件所在路径
            '@': path.resolve(__dirname, 'src'),
        },
    },
    //按需引入
    babel: {
        plugins: [
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    //可以设置为true即是less,注意！！！！此时不需要加引号
                    //也可以设置为css,css需要加引号
                    "style": true
                }
            ]
        ]
    },
    //自定义主题
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        //颜色即为自定义颜色
                        modifyVars: { '@primary-color': '#579ef9' },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
}
