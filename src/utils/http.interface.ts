/**
 * 定义一个泛型接口，用于规范API响应的结构
 * @template T 表示响应体的具体类型，使得这个接口可以适用于不同类型的响应数据
 */
export interface ApiResponse<T> {
  // HTTP状态码，用于表示API请求的HTTP响应状态
  statusCode: number;
  // 响应体，具体的数据类型由T指定，可以是任意类型的数据
  response: T;
  // 消息，通常用于提供额外的信息，例如错误消息或操作结果的描述
  message: string;
}