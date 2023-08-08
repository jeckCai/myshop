export default [
  // 商城首页
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/UserInex.vue'),
  },
  //商品集合
  {
    path: '/u/shoppinglist',
    name: 'shoppinglist',
    component: () => import('@/views/UserInfoShopping.vue'),
  },
  /**
   * 购买页面
   */
  {
    path: '/shop/gobuy',
    name: 'gobuy',
    component: () => import('@/views/Gobuy.vue'),
  },
  /**
   *  查看商品信息
   */
  {
    path: '/shop/view',
    name: 'viewshop',
    component: () => import('@/views/ViewGoods.vue'),
  },
  /**
   * 购物车列表
   */
  {
    path: '/shopcar/list',
    name: 'usershop',
    component: () => import('@/views/UserShopCar.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    children: [
      /**
       * 聊天主页
       */
      {
        path: '/admin/chat/index',
        name: 'adminchatindex',
        component: () => import('@/views/admin/AdminChatIndex.vue'),
      },
      /**
       * 管理聊天页面
       */
      {
        path: '/admin/chatlist',
        name: 'AdminChatList',
        component: () => import('@/views/admin/AdminChatList.vue'),
      },
      //添加轮播图
      {
        path: '/admin/addCarousel',
        name: 'tianjialunbotu',
        component: () => import('@/views/admin/AddImage.vue'),
      },
      //轮播图管理
      {
        path: '/admin/CarouselAdmin',
        name: 'CarouselAdmin1',
        component: () => import('@/views/admin/ImageAdmin.vue'),
      },
      //更新博客
      {
        path: '/admin/blog/update',
        name: 'UpdateBlog',
        component: () => import('@/views/admin/UpdateBlog.vue'),
      },
      //添加文章
      {
        path: '/admin/AdminBlogAdd',
        name: 'AdminBlogAdd',
        component: () => import('@/views/admin/AdminAddBlog.vue'),
      },
      //论坛list
      {
        path: '/admin/blog/list',
        name: 'zuilist',
        component: () => import('@/views/admin/AdminBlog.vue'),
      },
      //用户列表
      {
        path: '/admin/user/list',
        name: 'userList',
        component: () => import('@/views/admin/UserAdmin.vue'),
      },
      //修改活动
      {
        path: '/admin/UpdateActivity',
        name: 'UpdateActivity',
        component: () => import('@/views/admin/AdminUpdateActivity.vue'),
      },
      //添加活动
      {
        path: '/admin/addactivity',
        name: 'acitivity',
        
        component: () => import('@/views/admin/AddActivity.vue'),
      },
      //活动管理面板
      {
        path: '/admin/activity',
        name: 'activity',
        component: () => import('@/views/admin/Activity.vue'),
      },
      //修改商品与查看项目
      {
        path: '/admin/good/updateGoodsInfo',
        name: 'ADminGoddsUpdate',
        component: () => import('@/views/admin/ADminGoddsUpdate.vue'),
      },
      //添加商品
      {
        path: '/admin/push/good',
        name: 'pushgood',
        component: () => import('@/views/admin/AdminADdGood.vue'),
      },
      //商品信息
      {
        path: '/admin/goodinfo',
        name: 'goodInfo',
       
        component: () => import('@/views/admin/GoodInfo.vue'),
      },
      //商品分裂
      {
        path: '/admin/goodtype',
        name: 'goodtype',
        component: () => import('@/views/admin/GoodType.vue'),
      },
      //管理员信息
      {
        path: '/admin/info',
        name: 'admininfo',
        
        component: () => import('@/views/admin/AdminInfo.vue'),
      },
      //管理员面板主页
      {
        path: '/admin/AdminIndex',
        name: 'adminindex',
        component: () => import('@/views/admin/AdminIndex.vue'),
      },
      //头部
      {
        path: '/admin/Top',
        name: 'adminTop',
        component: () => import('@/views/frame/Top.vue'),
      },
      //管理员登入
      {
        path: '/admin/login',
        name: 'adminlogin',
        
        component: () => import('@/views/user/AdminLogin.vue'),
      },
      /**
       * 订单管理
       */
      {
        path: '/admin/order',
        name: 'orderadmin',
        component: () => import('@/views/admin/Orderadmin.vue'),
      },
    ],
  },
  {
    path: '/user',
    // redirect: '/user/userlogin',
    component: () => import('@/views/user/index.vue'),
    children: [
      /**
       * 用户商场
       */
      {
        path: '/user/shop',
        name: 'usershop',
        component: () => import('@/views/ShopCar.vue'),
      },
      //查看详细
      {
        path: '/user/blog/view',
        name: 'userblogview',
        component: () => import('@/views/ViewBlog.vue'),
      },
      {
        path: '/user/blog',
        name: 'userblog',
        component: () => import('@/views/UserBlog.vue'),
      },
      {
        path: '/user/activity',
        name: 'activity',
        component: () => import('@/views/UserActivity.vue'),
      },
      {
        path: '/user/info',
        name: 'userinfo',
        component: () => import('@/views/UserInfo.vue'),
      },
      {
        path: '/user/index1',
        name: 'UserIndex',
       
        component: () => import('@/views/user/UserIndex.vue'),
      },

      //用户修改
      {
        path: '/user/update',
        name: 'udpateuser',

        component: () => import('@/views/admin/UpdateUserAdmin.vue'),
      },

      //登入
      {
        path: '/user/userlogin',
        name: 'userlogin',
 
        component: () => import('@/views/user/Login.vue'),
      },
      //注册
      {
        path: '/user/user/reg',
        name: 'userreg',
        component: () => import('@/views/user/Regiter.vue'),
      },
      /**
       * 用户聊天
       */
      {
        path: '/user/user/chat',
        name: 'userChat',
        component: () => import('@/views/UserChat.vue'),
      },
    ],
  },
];
