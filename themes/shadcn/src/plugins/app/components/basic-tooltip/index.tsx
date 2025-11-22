import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function BasicTooltip({
  children,
  title,
}: {
  children: React.ReactNode
  title: React.ReactNode
}) {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent>{title}</TooltipContent>
      </TooltipPositioner>
    </Tooltip>
  )
}
