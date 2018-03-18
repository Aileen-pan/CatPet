3.14
项目进度
  头部下载APP广告
  搜索框栏
  底部标签栏

问题
  1.横向滑动
    使用：overflow-x scroll;
         overflow-y hidden;
  2.位置标识写不好

3.15
项目进度
  首页静态页面完成
  首页数据传输完成

面临问题
  数据交互不熟练
  swiper传送数据时出问题，传送数据以后样式会出现问题，正在修改中

3.16
  在主路由里面传子路由时要在router里面给父路由添加children属性传子路由
   {
        path: '/class',
        component: Class,
        children:[
          {
            path: 'brand',
            component: Brand,
          },
          {
            path: 'classify',
            component: Classify,
          },
          {
            path: '/',
            redirect: 'classify'
          },
        ]
      },
  table切换交互可以使用router-link（当a标签使用），写样式时使用&.router-link-active

3.17
项目进度
  首页页面组件化修改
  分类页静态页面完成
  分类页开始传数据交互


3.18
项目进度
  首页数据交互完成
  分类页数据交互完成
  登录页静态页面完成80%

问题
  使用i标签传iconfont图标时，加载数据过慢，需要刷新页面才能出现，正在使用@font-face，但是需要试验
  使用router-link标签时样式无效

