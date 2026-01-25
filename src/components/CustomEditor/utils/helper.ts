import { Editor } from 'slate'
import { CustomEditor, CustomTextKey } from '../slate'

export const helper = {
  isMarkActive(editor: CustomEditor, format: CustomTextKey) {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
  },

  toggleMark(editor: CustomEditor, format: CustomTextKey) {
    const isActive = this.isMarkActive(editor, format)
    if (isActive) {
      Editor.removeMark(editor, format)
    } else {
      Editor.addMark(editor, format, true)
    }
  },
}
