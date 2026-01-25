import { useCallback, useMemo } from 'react'
import { createEditor, Descendant } from 'slate'
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from 'slate-react'
import { Element, Leaf } from './components/'
import { helper } from './utils/helper'
import { CustomEditor } from './slate'

const CustomRichTextEditor = () => {
  const initialValue: Descendant[] = useMemo(() => {
    return [
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in paragraph' }],
      },
    ]
  }, [])

  const editor = useMemo(() => withReact<CustomEditor>(createEditor()), [])

  const renderElement = useCallback((props: RenderElementProps) => {
    return <Element {...props} />
  }, [])

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />
  }, [])

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <button onClick={() => helper.toggleMark(editor, 'bold')}>B</button>
      <button onClick={() => helper.toggleMark(editor, 'code')}>C</button>
      <button onClick={() => helper.toggleMark(editor, 'italic')}>I</button>
      <button onClick={() => helper.toggleMark(editor, 'underline')}>U</button>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        spellCheck
        autoFocus
      />
    </Slate>
  )
}

export default CustomRichTextEditor
