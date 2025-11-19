import type { PropsWithChildren } from 'preact/compat'
import { cn } from '@/lib/utils'

export function DotGrid({ children }: PropsWithChildren) {
  return (
    <div
      className={cn(
        'flex items-center justify-center text-black dark:text-white',
        'bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-black/0.75 bg-center bg-size-[10px_10px] [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5',
      )}
    >
      {children}
    </div>
  )
}
