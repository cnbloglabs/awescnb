import { BasicTooltip } from '../../basic-tooltip'
import { Panel, PanelContent, PanelHeader, PanelTitle } from '../../panel'
import { TOOLS } from './constants'

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
                  <img
                    src={tool.lightIcon}
                    alt={`${tool.title} light icon`}
                    width={32}
                    height={32}
                    className='!size-8 hidden [html.light_&]:block'
                  />
                  <img
                    src={tool.darkIcon ?? tool.lightIcon}
                    alt={`${tool.title} dark icon`}
                    width={32}
                    height={32}
                    className='!size-8 hidden [html.dark_&]:block'
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
