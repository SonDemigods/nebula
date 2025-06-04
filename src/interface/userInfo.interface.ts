// 定义用户信息类型
export interface UserInfo {
  id: number;
  username: string;
  password: string;
  nickname?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  role?: string;
  status?: number;
}