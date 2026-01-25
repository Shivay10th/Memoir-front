import { Descendant } from 'slate'
import { Editor, ReactEditor } from 'slate-react'

export type HeadingElement = {
  type: 'heading-one'
  children: Descendant[]
}

export type CodeBlockElement = {
  type: 'code-block'
  children: Descendant[]
}

export type CodeLineElement = {
  type: 'code-line'
  children: Descendant[]
}

export type ParagraphElement = {
  type: 'paragraph'
  children: Descendant[]
}

export type LinkElement = {
  type: 'link'
  url: string
  children: Descendant[]
}

export type CustomElement =
  | HeadingElement
  | CodeBlockElement
  | CodeLineElement
  | ParagraphElement
  | LinkElement

export type CustomElementType = CustomElement['type']

export type CustomText = {
  bold?: boolean
  italic?: boolean
  code?: boolean
  underline?: boolean
  text: string
}

export type CustomTextKey = keyof Omit<CustomText, 'text'>

export type CustomTextLeaf = keyof Omit<CustomText, 'text'>

export type CustomEditor = Editor & ReactEditor

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor
    Element: CustomElement
    Text: CustomText
  }
}
