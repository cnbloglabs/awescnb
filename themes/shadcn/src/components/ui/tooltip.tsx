'use client'

import { Tooltip as TooltipPrimitive } from '@base-ui-components/react'
import type * as React from 'react'

import { cn } from '@/lib/utils'

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width='20' height='10' viewBox='0 0 20 10' fill='none' {...props}>
      <path
        d='M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z'
        className='fill-foreground'
      />
    </svg>
  )
}

function TooltipProvider({
  delay = 200,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delay={delay} {...props} />
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger className={cn(className)} {...props} />
}

function TooltipContent({
  className,
  sideOffset = 10,
  children,
  side = 'top',
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Popup> &
  Pick<React.ComponentProps<typeof TooltipPrimitive.Positioner>, 'side'> & {
    sideOffset?: number
  }) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner side={side} sideOffset={sideOffset}>
        <TooltipPrimitive.Popup
          className={cn(
            'fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-ending-style:fade-out-0 data-ending-style:zoom-out-95 flex animate-in flex-col rounded-sm bg-foreground px-2 py-1 text-background text-sm shadow-gray-200 shadow-lg data-ending-style:animate-out dark:shadow-none',
            className,
          )}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow className='data-[side=bottom]:-top-2 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 flex data-[side=left]:right-[-13px] data-[side=right]:left-[-13px] data-[side=bottom]:rotate-0 data-[side=left]:rotate-90 data-[side=top]:rotate-180'>
            <ArrowSvg />
          </TooltipPrimitive.Arrow>
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
