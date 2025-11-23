import { memo } from 'preact/compat'
import { BasicTooltip } from '../../basic-tooltip'
import { Panel, PanelContent, PanelHeader, PanelTitle } from '../../panel'
import { TOOLS } from './constants'

interface ToolIconProps {
  title: string
  lightIcon: string
  darkIcon?: string
}

const ToolIcon = memo(({ title, lightIcon, darkIcon }: ToolIconProps) => {
  return (
    <>
      <img
        src={lightIcon}
        alt={`${title} light icon`}
        width={32}
        height={32}
        loading='eager'
        decoding='async'
        className='!size-8 hidden [html.light_&]:block'
      />
      <img
        src={darkIcon ?? lightIcon}
        alt={`${title} dark icon`}
        width={32}
        height={32}
        loading='eager'
        decoding='async'
        className='!size-8 hidden [html.dark_&]:block'
      />
    </>
  )
})

export function Tools() {
  return (
    <Panel id='tools'>
      <PanelHeader>
        <PanelTitle>我喜爱的工具</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <ul className='flex select-none flex-wrap gap-4'>
          {TOOLS.map((tool) => (
            <li key={tool.title} className='flex'>
              <BasicTooltip title={tool.title}>
                <a
                  href={tool.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={tool.title}
                  className='block size-8'
                >
                  <ToolIcon
                    title={tool.title}
                    lightIcon={tool.lightIcon}
                    darkIcon={tool.darkIcon}
                  />
                  <span className='sr-only'>{tool.title}</span>
                </a>
              </BasicTooltip>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  )
}
