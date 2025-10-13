import { getRequestVerificationToken } from './utils'

interface RequestOptions {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  data?: any
  dataType?: 'json' | 'xml' | 'html' | 'text' | 'script'
  contentType?: string
  headers?: Record<string, string>
  timeout?: number
  beforeSend?: (xhr: JQuery.jqXHR) => void
  success?: (data: any, textStatus: string, xhr: JQuery.jqXHR) => void
  error?: (xhr: JQuery.jqXHR, textStatus: string, errorThrown: string) => void
  complete?: (xhr: JQuery.jqXHR, textStatus: string) => void
}

interface RequestResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: Record<string, string>
  xhr: JQuery.jqXHR
}

function request<T = any>(
  options: RequestOptions,
): Promise<RequestResponse<T>> {
  return new Promise((resolve, reject) => {
    const {
      url,
      method = 'GET',
      data,
      dataType = 'json',
      contentType = 'application/json; charset=UTF-8',
      headers = {},
      timeout = 30000,
      beforeSend,
      success,
      error,
      complete,
    } = options

    const ajaxHeaders: Record<string, string> = {
      ...headers,
    }

    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      ajaxHeaders.RequestVerificationToken = getRequestVerificationToken()
    }

    $.ajax({
      url,
      type: method,
      data: data ? JSON.stringify(data) : undefined,
      dataType,
      contentType:
        method === 'GET' ? 'application/x-www-form-urlencoded' : contentType,
      headers: ajaxHeaders,
      timeout,
      beforeSend,
      success: (data: T, textStatus: string, xhr: JQuery.jqXHR) => {
        const response: RequestResponse<T> = {
          data,
          status: xhr.status,
          statusText: xhr.statusText,
          headers: xhr
            .getAllResponseHeaders()
            .split('\r\n')
            .reduce((acc: Record<string, string>, line: string) => {
              const [key, value] = line.split(': ')
              if (key && value) {
                acc[key] = value
              }
              return acc
            }, {}),
          xhr,
        }

        if (success) {
          success(data, textStatus, xhr)
        }

        resolve(response)
      },
      error: (xhr: JQuery.jqXHR, textStatus: string, errorThrown: string) => {
        if (error) {
          error(xhr, textStatus, errorThrown)
        }

        reject({
          xhr,
          textStatus,
          errorThrown,
          status: xhr.status,
          statusText: xhr.statusText,
        })
      },
      complete,
    })
  })
}

export function get<T = any>(
  url: string,
  options?: Omit<RequestOptions, 'url' | 'method'>,
): Promise<RequestResponse<T>> {
  return request<T>({ ...options, url, method: 'GET' })
}

export function post<T = any>(
  url: string,
  data?: any,
  options?: Omit<RequestOptions, 'url' | 'method' | 'data'>,
): Promise<RequestResponse<T>> {
  return request<T>({ ...options, url, method: 'POST', data })
}

export function put<T = any>(
  url: string,
  data?: any,
  options?: Omit<RequestOptions, 'url' | 'method' | 'data'>,
): Promise<RequestResponse<T>> {
  return request<T>({ ...options, url, method: 'PUT', data })
}

export function del<T = any>(
  url: string,
  options?: Omit<RequestOptions, 'url' | 'method'>,
): Promise<RequestResponse<T>> {
  return request<T>({ ...options, url, method: 'DELETE' })
}

export function patch<T = any>(
  url: string,
  data?: any,
  options?: Omit<RequestOptions, 'url' | 'method' | 'data'>,
): Promise<RequestResponse<T>> {
  return request<T>({ ...options, url, method: 'PATCH', data })
}
