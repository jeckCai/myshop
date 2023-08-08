<template>
  <div class="Top">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item :index="item.index" :route="{ path: item.href }" v-for="item in menu" :key="item.index"
        ><span>{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { synRequestPost } from '@/static/request';
export default {
  name: 'Top',
  data() {
    return {
      activeIndex2: '1',
      username: '',
      password: '',
      menu: [
        {
          href: '',
          index:'1',
          name: '首页',
        },
        {
          href: '/u/shoppinglist',
          name: '商品信息',
          index:'2',
        },
        {
          href: '/user/activity',
          name: '活动公告',
          index:'3',
        },
        {
          href: '/user/blog',
          name: '论坛信息',
          index:'4',
        },
        {
          href: '/user/info',
          name: '我的',
          index:'5',
        },
        {
          href: '/user/shop',
          name: '订单记录',
          index:'6',
        },
        {
          href: '/shopcar/list',
          name: '购物车',
          index:'7',
        },
        {
          href: '/user/chat',
          name: '客服',
          index:'8',
        },
      ],
    };
  },

  mounted() {
    this.check();
  },

  methods: {
    handleSelect(key) {
      const r = this.menu[key].href;
      if (r) {
        this.$router.push({ path: r });
      }
      console.log(key);
    },
    //确认是否为管理员
    async check() {
      var obj = await synRequestPost('/admin/login?username=' + this.username + '&password=' + this.password);
      console.log(obj[0]);
      if (obj.length == 0) {
      } else {
      }
    },
  },
};
</script>
