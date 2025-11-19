import { cn } from '@/lib/utils'

export function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-8 w-full border-edge border-x',
        'before:-left-[100vw] before:-z-1 before:absolute before:h-8 before:w-[200vw]',
        'before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56',
        className,
      )}
    />
  )
}
