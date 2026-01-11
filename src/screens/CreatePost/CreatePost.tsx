import {
  CreatePostContainer,
  EditorBody,
  EditorContainer,
  EditorHeader,
  PostTitleTextArea,
} from './CreatePost.style'

const CreatePost = () => {
  return (
    <CreatePostContainer>
      <h1>Create Post</h1>
      <EditorContainer>
        <EditorHeader>
          <PostTitleTextArea
            placeholder="New post title here..."
            autoComplete="off"
            autoFocus
            name="article-title"
          />
        </EditorHeader>
        <EditorBody></EditorBody>
      </EditorContainer>
    </CreatePostContainer>
  )
}

export default CreatePost
