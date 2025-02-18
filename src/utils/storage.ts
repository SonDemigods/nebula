// 定义localStorage工具函数
export const localStorageUtil = {
  /**
   * @functionName setItem
   * @param {string} key - 存储的键名
   * @param {any} value - 存储的值
   * @return {void}
   * @description 将值存储到localStorage中
   * @author 张航
   * @date 2025-02-18 15:50:30
   * @version V1.0.0
   */
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * @functionName getItem
   * @param {string} key - 获取的键名
   * @return {any} 获取的值
   * @description 从localStorage中获取值
   * @author 张航
   * @date 2025-02-18 15:50:30
   * @version V1.0.0
   */
  getItem(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },

  /**
   * @functionName removeItem
   * @param {string} key - 移除的键名
   * @return {void}
   * @description 从localStorage中移除指定键名的值
   * @author 张航
   * @date 2025-02-18 15:50:30
   * @version V1.0.0
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  },

  /**
   * @functionName clear
   * @param {void}
   * @return {void}
   * @description 清空localStorage中的所有数据
   * @author 张航
   * @date 2025-02-18 15:50:30
   * @version V1.0.0
   */
  clear(): void {
    localStorage.clear();
  }
};

// 定义sessionStorage工具函数
export const sessionStorageUtil = {
  /**
   * @functionName setItem
   * @param {string} key - 存储的键名
   * @param {any} value - 存储的值
   * @return {void}
   * @description 将值存储到sessionStorage中
   * @author 张航
   * @date 2025-02-18 15:50:30
   * @version V1.0.0
   */
  setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * @functionName getItem
   * @param {string} key - 获取的键名
   * @return {any} 获取的值
   * @description 从sessionStorage中获取值
   * @author 张航
   * @date 2025-02-18 15:50:30
   * @version V1.0.0
   */
  getItem(key: string): any {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },

  /**
   * @functionName removeItem
   * @param {string} key - 移除的键名
   * @return {void}
   * @description 从sessionStorage中移除指定键名的值
   * @author 张航
   * @date 2025-02-18 15:50:30
   * @version V1.0.0
   */
  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  },

  /**
   * @functionName clear
   * @param {void}
   * @return {void}
   * @description 清空sessionStorage中的所有数据
   * @author 张航
   * @date 2025-02-18 15:50:30
   * @version V1.0.0
   */
  clear(): void {
    sessionStorage.clear();
  }
};