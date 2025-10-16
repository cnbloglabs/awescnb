import { Toaster as Sonner, type ToasterProps } from '@acnb/sonner'
import {
  CircleCheckIcon,
  InfoIcon,
  OctagonXIcon,
  TriangleAlertIcon,
  XIcon,
} from 'lucide-preact'

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className='toaster group'
      icons={{
        success: <CircleCheckIcon className='size-4' />,
        info: <InfoIcon className='size-4' />,
        warning: <TriangleAlertIcon className='size-4' />,
        error: <OctagonXIcon className='size-4' />,
        close: <XIcon className='size-4' />,
      }}
      style={
        {
          '--sonner-bg': 'var(--popover)',
          '--sonner-text': 'var(--popover-foreground)',
          '--sonner-border': 'var(--border)',
          '--sonner-radius': 'var(--radius)',
        } as Record<string, string>
      }
      {...props}
    />
  )
}

export { Toaster }
