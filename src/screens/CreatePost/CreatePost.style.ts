import styled from 'styled-components'

export const CreatePostContainer = styled.div`
  width: 100%;
`

export const PostTitleTextArea = styled.textarea`
  height: 60px;
  font-size: 3rem;
  font-weight: 800;
  resize: none;
  border: none;
  outline: none;
  width: 100%;
`

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(4, 8)};
`

export const EditorHeader = styled.div``

export const EditorBody = styled.div``
