import { createElement, render } from 'preact'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'
import './styles.css'

// Types
export type ToastTypes = 'info' | 'success' | 'error' | 'warning'

export interface ToastT {
  id: string | number
  title?: string
  description?: string
  type?: ToastTypes
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

export interface ToasterProps {
  className?: string
  style?: Record<string, any>
  icons?: {
    success?: any
    error?: any
    warning?: any
    info?: any
    close?: any
  }
}

// Toast state management
class ToastState {
  private toasts: ToastT[] = []
  private listeners: Array<(toasts: ToastT[]) => void> = []
  private counter = 0

  subscribe(listener: (toasts: ToastT[]) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  private notify() {
    this.listeners.forEach((listener) => {
      listener([...this.toasts])
    })
  }

  add(toast: Omit<ToastT, 'id'>) {
    const id = ++this.counter
    const newToast: ToastT = { id, ...toast }
    this.toasts.push(newToast)
    this.notify()

    const duration = toast.duration || 3000
    if (duration > 0) {
      setTimeout(() => {
        this.remove(id)
      }, duration)
    }

    return id
  }

  remove(id: string | number) {
    this.toasts = this.toasts.filter((t) => t.id !== id)
    this.notify()
  }

  getToasts() {
    return [...this.toasts]
  }
}

const toastState = new ToastState()

// Toast API
export const toast = {
  success: (title: string, options?: Partial<ToastT>) =>
    toastState.add({ title, type: 'success', ...options }),
  error: (title: string, options?: Partial<ToastT>) =>
    toastState.add({ title, type: 'error', ...options }),
  warning: (title: string, options?: Partial<ToastT>) =>
    toastState.add({ title, type: 'warning', ...options }),
  info: (title: string, options?: Partial<ToastT>) =>
    toastState.add({ title, type: 'info', ...options }),
  dismiss: (id: string | number) => toastState.remove(id),
}

// Toast component
const Toast = ({
  toast,
  onRemove,
  icons,
}: {
  toast: ToastT
  onRemove: (id: string | number) => void
  icons?: {
    success?: any
    error?: any
    warning?: any
    info?: any
    close?: any
  }
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClose = useCallback(() => {
    onRemove(toast.id)
  }, [toast.id, onRemove])

  const handleAction = useCallback(() => {
    if (toast.action) {
      toast.action.onClick()
      onRemove(toast.id)
    }
  }, [toast.action, toast.id, onRemove])

  if (!mounted) return null

  return createElement(
    'div',
    {
      className: `sonner-toast sonner-toast-${toast.type}`,
      'data-mounted': mounted,
    },
    [
      toast.type &&
        icons?.[toast.type] &&
        createElement(
          'div',
          {
            className: 'sonner-toast-icon',
          },
          icons[toast.type],
        ),
      createElement(
        'div',
        {
          className: 'sonner-toast-content',
        },
        [
          toast.title &&
            createElement(
              'div',
              {
                className: 'sonner-toast-title',
              },
              toast.title,
            ),
          toast.description &&
            createElement(
              'div',
              {
                className: 'sonner-toast-description',
              },
              toast.description,
            ),
        ],
      ),
      toast.action &&
        createElement(
          'button',
          {
            className: 'sonner-toast-action',
            onClick: handleAction,
            type: 'button',
          },
          toast.action.label,
        ),
      icons?.close &&
        createElement(
          'button',
          {
            className: 'sonner-toast-close',
            onClick: handleClose,
            type: 'button',
            'aria-label': 'Close toast',
          },
          icons.close,
        ),
    ],
  )
}

// Toaster component
export const Toaster = (props: ToasterProps = {} as ToasterProps) => {
  const { className = '', style, icons } = props

  const [toasts, setToasts] = useState<ToastT[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const unsubscribe = toastState.subscribe(setToasts)
    return unsubscribe
  }, [])

  const handleRemove = useCallback((id: string | number) => {
    toastState.remove(id)
  }, [])

  const visibleToastsList = toasts.slice(0, 3) // Default 3 visible toasts

  return createElement(
    'div',
    {
      ref: containerRef,
      className: `sonner-toaster sonner-toaster-bottom-right ${className}`,
      style,
      'data-gap': 14, // Default gap
      'data-visible-toasts': 3, // Default visible toasts
      'aria-live': 'polite',
      'aria-label': 'Notifications',
    },
    visibleToastsList.map((toast) =>
      createElement(Toast, {
        key: toast.id,
        toast,
        onRemove: handleRemove,
        icons,
      }),
    ),
  )
}
