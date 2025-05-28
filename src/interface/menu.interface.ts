// 定义菜单项类型
export interface MenuItem {
  // 菜单项的标识
  key: string;
  // 菜单项的标题
  label: string;
  // 菜单项的图标
  icon?: string; 
  // 子菜单项
  children?: MenuItem[]; 
}