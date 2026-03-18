/**
 * 通用类型定义
 */

/**
 * 状态类型
 */
export type Status = 'idle' | 'loading' | 'success' | 'error';

/**
 * 分页参数
 */
export interface PaginationParams {
  page: number;
  pageSize: number;
}

/**
 * ID 类型
 */
export type ID = string | number;

/**
 * 用户角色
 */
export type UserRole = 'admin' | 'user' | 'guest';

/**
 * 用户信息
 */
export interface User {
  id: ID;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

/**
 * 表单字段错误
 */
export interface FieldError {
  field: string;
  message: string;
}