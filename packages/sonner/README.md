# @acnb/sonner

Preact toast notification component inspired by sonner.

## Features

- 🎨 Beautiful and customizable toast notifications
- 📱 Mobile-friendly responsive design
- 🎯 Multiple toast types (success, error, warning, info)
- ⚡ Lightweight and performant
- 🎭 Smooth animations and transitions
- 🔧 Highly configurable
- 📦 TypeScript support
- 🌙 Dark mode support

## Installation

```bash
npm install @acnb/sonner
```

## Usage

```tsx
import { Toaster, toast } from '@acnb/sonner'

function App() {
  return (
    <div>
      <button onClick={() => toast.default('Hello World!')}>
        Show Toast
      </button>
      <Toaster />
    </div>
  )
}
```

## API

### toast()

Create a toast notification.

```tsx
// Different types
toast.success('Success!')
toast.error('Error!')
toast.warning('Warning!')
toast.info('Info!')

// Toast with description
toast.success('Success!', {
  description: 'Your action was completed successfully.'
})

// Toast with action
toast.error('Error occurred', {
  description: 'Something went wrong',
  action: {
    label: 'Retry',
    onClick: () => console.log('Retrying...')
  }
})

// Dismiss a toast
toast.dismiss(toastId)
```

### Toaster

The toast container component with fixed defaults:
- Position: bottom-right
- Gap: 14px
- Visible toasts: 3
- Duration: 3000ms
- Always shows close button
- Stacked by default, expands on hover

```tsx
<Toaster
  className="custom-toaster"  // Custom CSS class
  style={{ /* custom styles */ }}
  icons={{
    success: <SuccessIcon />,
    error: <ErrorIcon />,
    warning: <WarningIcon />,
    info: <InfoIcon />,
    close: <CloseIcon />,
  }}
/>
```

### Toast Types

```tsx
interface ToastT {
  id: string | number
  title?: string
  description?: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}
```

## Auto-mounting

The toaster will automatically mount to the document body when imported. You can also manually mount it:

```tsx
import { mountToaster } from '@acnb/sonner'

// Mount to document body
mountToaster()

// Mount to custom container
const container = document.getElementById('toast-container')
mountToaster(container)
```

## Styling

The component includes built-in styles that support:
- Light and dark themes
- Responsive design
- Smooth animations
- Custom positioning

You can override styles using CSS custom properties or by targeting the component classes.

## License

MIT
