<template>
  <a-dropdown>
    <div class="user-menu">
      <a-avatar
        class="user-avatar"
        size="large"
        :style="{ backgroundColor: color, verticalAlign: 'middle' }"
        :gap="4"
        :src="userInfo.avatar"
      >
        {{ userInfo.nickname }}
      </a-avatar>
      <span class="user-name">{{ userInfo.nickname }}</span>
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a @click="handleMenuClick('userCenter')"><dynamicIcon iconName="UserOutlined" /> 个人中心</a>
        </a-menu-item>
        <a-menu-item>
          <a @click="handleMenuClick('setting')"><dynamicIcon iconName="SettingOutlined" /> 设置</a>
        </a-menu-item>
         <a-menu-divider />
        <a-menu-item>
          <a @click="handleMenuClick('logout')"><dynamicIcon iconName="LogoutOutlined" /> 退出登录</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts" setup>
// 导入依赖
import { ref } from 'vue';

// 导入类型
import type { UserInfo } from '@/interface/userInfo.interface';

// 导入组件
import dynamicIcon from './dynamicIcon.vue';

// 定义用户信息
const userInfo = ref<UserInfo>({
  id: 0,
  username: 'admin',
  password: '',
  nickname: '',
  avatar: '',
  email: '',
  phone: '',
  role: '',
  status: 0
});
// 设置用户信息
userInfo.value.nickname = '管理员';
userInfo.value.avatar =
  'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';

// 定义背景颜色列表
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
// 定义头像背景颜色
const color = ref<string>('#f5f5f5');
// 如果头像图片不存在，则随机背景颜色
if (!userInfo.value.avatar) {
  color.value = colorList[Math.floor(Math.random() * colorList.length)];
}

// 处理菜单项点击事件
const handleMenuClick = (key: string) => {
  console.log(key);
};
</script>
<style lang="less" scoped>
.user-menu {
  display: inline-block;
  text-align: center;
  width: 160px;
  height: 64px;
  line-height: 64px;
  vertical-align: top;
}
.user-avatar {
  vertical-align: top !important;
  margin-top: 12px;
}
.user-name {
  display: inline-block;
  width: 100px;
  padding: 0 10px;
  font-size: 14px;
  line-height: 64px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
  vertical-align: top;
  text-align: left;
}
</style>
