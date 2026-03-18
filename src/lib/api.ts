import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';

/**
 * API 响应格式
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error?: string;
  message?: string;
}

/**
 * 分页响应
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/**
 * API 客户端配置
 */
const DEFAULT_BASE_URL = '/api';

class ApiClient {
  private instance: AxiosInstance;

  constructor(baseUrl: string = DEFAULT_BASE_URL) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 可在此添加认证 token
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // 统一错误处理
        const message = error.response?.status === 401
          ? 'Unauthorized'
          : error.message;
        return Promise.reject(new Error(message));
      }
    );
  }

  private async request<T>(
    endpoint: string,
    options: { method: string; data?: unknown } = { method: 'GET' }
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.request<T>({
        url: endpoint,
        method: options.method,
        data: options.data,
      });
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T, U>(endpoint: string, body: U): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'POST', data: body });
  }

  async put<T, U>(endpoint: string, body: U): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'PUT', data: body });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export const api = new ApiClient();