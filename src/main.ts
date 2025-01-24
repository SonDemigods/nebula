// 导入vue
import { createApp } from 'vue'
// 导入UI库
import Antd from 'ant-design-vue';
// 导入根组件
import App from './App.vue'
// 导入路由配置
import router from './router'

// 导入样式文件
import 'ant-design-vue/dist/reset.css';

createApp(App)
.use(Antd)
.use(router)
.mount('#app')
