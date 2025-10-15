/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: RichText component is designed to render HTML content safely from trusted source */

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  html: string
}

export function RichText({ html, ...rest }: Props) {
  return <div {...rest} dangerouslySetInnerHTML={{ __html: html }} />
}
