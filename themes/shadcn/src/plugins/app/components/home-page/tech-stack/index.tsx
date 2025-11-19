import { BasicTooltip } from '../../basic-tooltip'
import { Panel, PanelContent, PanelHeader, PanelTitle } from '../../panel'
import { TECH_STACK } from './constants'

export function TechStack() {
  return (
    <Panel id='stack'>
      <PanelHeader>
        <PanelTitle>技术栈</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <ul className='flex select-none flex-wrap gap-4'>
          {TECH_STACK.map((tech) => (
            <li key={tech.title} className='flex'>
              <BasicTooltip title={tech.title}>
                <a
                  href={tech.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={tech.title}
                  className='block size-8'
                >
                  <img
                    src={tech.lightIcon}
                    alt={`${tech.title} light icon`}
                    width={32}
                    height={32}
                    className='!size-8 hidden [html.light_&]:block'
                  />
                  <img
                    src={tech.darkIcon ?? tech.lightIcon}
                    alt={`${tech.title} dark icon`}
                    width={32}
                    height={32}
                    className='!size-8 hidden [html.dark_&]:block'
                  />
                  <span className='sr-only'>{tech.title}</span>
                </a>
              </BasicTooltip>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  )
}
