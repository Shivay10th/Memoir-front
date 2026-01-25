import { RenderElementProps } from 'slate-react'

const Element = (props: RenderElementProps) => {
  const { attributes, children, element } = props

  switch (element.type) {
    case 'paragraph':
      return <p {...attributes}>{children}</p>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'code-line':
      return <code>{children}</code>
    case 'code-block':
      return (
        <pre>
          <code>{children}</code>
        </pre>
      )
    default:
      return <p {...attributes}>{children}</p>
  }
}

export default Element
