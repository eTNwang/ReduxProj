import React from 'react'
import { connect } from 'react-redux'
import { removePost } from '../actions'

const PostDelete = ({
  postid, removePost,
}) => {
  const [state, setState] = React.useState({
    postid,
    name: '',
    postText: '',
    postImage: '', 
  })

  const clickhandle = e => {
    console.log('clicked')
    removePost(postid, state.name, state.postText, state.postImage)
  }

  return (
    <button onClick={() => clickhandle()}> Delete Post </button>
  )
}

const mapDispatchToProps = dispatch => ({
  removePost: (postid, name, postText, postImage) => dispatch(removePost(postid, name, postText, postImage)),
})

export default connect(null, mapDispatchToProps)(PostDelete)
