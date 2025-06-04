// 导入类型
import type { ViewMeta } from '@/interface/viewMeta.interface';

// 定义页面元数据配置
const config: ViewMeta = {
  user: { requiresAuth: true, title: '用户管理', icon: 'UserOutlined' },
}

export default config