var path = require('path')

// 给出正确的绝对路径
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 配置webpack编译入口
    entry: {
        app: './src/main.js'
    },
    // 配置webpack输出路径和命名规则
    output：{
      // webpack输出的目标文件路径（例如：/dist）
        path: '/dist',
        filename: '[name].js',
        publicPath: '/'
     },
    // 配置模块resolve的规则
    resolve: {
        // 自动resolve的扩展名
        extensions: ['.js', '.vue', '.json'],
        // resolve模块的时候要搜索的文件夹
        module: [
           resolve('src'),
            resolve('node_modules')
        ],
        // 创建路劲别名，有了别名之后引用模块更方便，例如
        // import Vue from 'vue/dist/vue.common.js'可以写成 import Vue from 'vue'
        alias: {
            'src': resolve('src'),
        }
    },
    // 配置不同类型模块的处理规则
    module： {
       rules: [
           // {// 对src文件夹下的.js和.vue文件使用eslint-loader
           //     test: /\.(js|vue)$/,
           //     loader: 'eslint-loader',
           //     enforce: 'pre',// 在babel-loader对源码进行编译前进行lint的检查
           //     include: resolve(src)// src文件夹下的文件需要被lint
           //     options: {
           //         formatter: require('eslint-friendly-formatter')// 编译后错误报告格式
           //     }
           // },
           {// 对src文件夹下的.js文件使用babel-loader
             test: /\.js$/,
             loader: 'babel-loader',
             include: resolve(src)
           }
       ]
    }
}