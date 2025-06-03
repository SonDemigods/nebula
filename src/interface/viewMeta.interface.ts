// 定义页面元数据类型
export interface  ViewMetaItem {
  requiresAuth: boolean;
  title: string;
  icon?: string;
  [key: string]: any;
  [key: number]: any;
  [key: symbol]: any;
}

// 定义页面元数据对象类型
export interface ViewMeta {
  [key: string]: ViewMetaItem;
}