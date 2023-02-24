配置antd的按需加载：
 一、使用第三方库craco安装yarn add @craco/craco,新建craco.config.js文件配置按需加载以及配置主题。
 二、使用安装plugin（按需引入的主要插件yarn add babel-plugin-import）进行antd的按需引入。如下配置：
    export将配置的babel包进行样式以及组件的加入(如果是antd-mobile的话直接改掉libraryName对应的value)
    babel:{
        plugins:[
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
        ]
    }
 三、配置主题要使用craco-less插件，yarn add craco-less
    主要还是在craco.config.js里面配置 主要是通过modifyVars中进行更改antd中的default.less的配置的更改。  
    //自定义主题
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                  		 //颜色即为自定义颜色
                        modifyVars: { '@primary-color': 'rgb(16, 69, 182)' },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]  
 四、配置路径使用@进行全路径的解析主要是配置webpack
    主要还是在craco.config.js里面配置webpack的import引入的路径，可以使用@替代../../这样的。
    配置alias进行@的路径配置。
    webpack: {
        // 配置别名
        alias: {
            // 约定：使用 @ 表示 src 文件所在路径
            '@': path.resolve(__dirname, 'src'),
        },
    },

 五、配置路由：
  1、router是配置整体的路由   （使用的是BrowserRouter）
    1.底层原理不一样：
        BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
        HashRouter使用的是URL的哈希值。
    2.path表现形式不一样
        BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
        HashRouter的路径包含#,例如：localhost:3000/#/demo/test
    3.刷新后对路由state参数的影响
        (1).BrowserRouter没有任何影响，因为state保存在history对象中。
        (2).HashRouter刷新后会导致路由state参数的丢失！！！
    4.备注：HashRouter可以用于解决一些路径错误相关的问题。
  2、在app.jsx里面配置路由的跳转使用switch方式(还没有写完)
 
 六、登录中验证码的实现
  1、四个重要的角色（服务器、浏览器、短信运营商、短信服务商），在这个里面浏览器通过调取服务器的接口将服务器要的数据传递给后台服务器那边，然后服务器会自己生成一个UID或者唯一的key，将这个值给短信服务商，然后短信服务商就会把手机号码给运营商（电信等），最后通过运营商给你发信息（服务器生成的key值）然后登录的时候就会验证成功直接就进入主页。

 七、二维码登录的实现
  1、 首先是pc端的验证的会生成一个ID的然后依据这个ID生成一个二维码（这个地方会定时的去刷新一下这个二维码Redis里面更新），随后手机端去扫码的时候就会获取对应的ID，之后就会信息转到服务器端生成一个临时的token，然后跳转到你的微信或者输入密码账户啥的会携带token，如果手机端登录以后在服务器端会生成一个全新的token给与pc端进行使用，pc端拿着这些东西去访问服务端验证通过就直接登录成功了。

 八、redux使用
  1、state、自身组件、action、reducers四个api 
 
 九、mock的使用
 
 十、axios的使用

 十一、MD5的使用（base64加密、res加密需要使用jsencrypt.js库要公钥和私钥）
    MD5目前是不可逆的直接安装yarn add js-md5直接使用就行import md5 from 'js-md5',直接使用方法md5(参数)
    base64是可逆的,使用encode进行加密，通过decode进行解密
    res加密待研究？

 十二、无状态组件和有状态组件

 十三、hooks的钩子函数 
    useState:进行数据的初始化，使用setState进行更新操作，后续的重新渲染中，useState返回的第一个值始终是更新后最新的state，如果你更新返回的值和当前的state相同，重新渲染会直接跳过。和class不同的是setState，useState不会自动合并更新对象
    useRef:
    useEffect:
    useContext:
    useCallback:
    useReducer:
    useMemo:
    useImperativeHandle:
    useLayoutEffect:
    useDebugValue:
    useTransition:
    useId:
    useDeferredValue:
    useInsertionEffect:
    useSyncExternalStore:

 注意点：如果给别人的话版本对应不上的话可以使用这段代码  yarn config set ignore-engines true 忽略校验版本




