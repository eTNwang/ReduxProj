import React from 'react'
import { connect } from 'react-redux'
import { updatePost } from '../actions'

const PostEdit = ({ postid }) => {
  const [state, setState] = React.useState({
    postid,
    name: '',
    postText: '',
    postImage: '',
  })

  const updateinputs = e => {
    const { target } = e
    const { value } = target
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  const submitinputs = e => {
    e.preventDefault()
    updatePost(postid, state.name, state.postText, state.postImage)
  }

  return (
    <form
      onSubmit={submitinputs}

    >
      <input
        type="text"
        name="name"
        defaultValue={state.name}
        placeholder="Edit your post title"
        onChange={updateinputs}
      />
      <br />
      <input
        type="text"
        name="postText"
        defaultValue={state.postText}
        placeholder="Edit your post content"
        onChange={updateinputs}

      />
      <br />
      <input
        type="text"
        name="postImage"
        defaultValue={state.postImage}
        placeholder="Edit your post image"
        onChange={updateinputs}

      />
      <br />
      <input type="submit" disabled={!state.name || !state.postText} value="Submit" />
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  updatePost: (postid, name, postText, postImage) => dispatch(updatePost(postid, name, postText, postImage)),
})

export default connect(null, mapDispatchToProps)(PostEdit)
