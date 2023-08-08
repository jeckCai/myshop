export default [
  // 商城首页
  {
    path: "/",
    name: "index",
    component: () => import('@/views/UserInex.vue'),
  },
   //商品集合
   {
    path: "/u/shoppinglist",
    name: "shoppinglist",
    component: () => import('@/views/UserInfoShopping.vue'),
  },
  /**
   * 购买页面
   */
  {
    path: "/shop/gobuy",
    name: "gobuy",
    component: () => import('@/views/Gobuy.vue'),
  },
  /**
   *  查看商品信息
   */
  {
    path: "/shop/view",
    name: "viewshop",
    component: () => import('@/views/ViewGoods.vue'),
  },
  /**
   * 购物车列表
   */
  {
    path: "/shopcar/list",
    name: "usershop",
    component: () => import('@/views/UserShopCar.vue'),
  },
];
