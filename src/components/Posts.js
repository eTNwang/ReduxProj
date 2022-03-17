import React from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'
import PostDelete from './PostDelete'
import PostEdit from './PostEdit'

const Posts = ({ posts }) => (
  <>
  
    <div>
      {posts.map(post => (
        <Wrapper>
        <div key={post.postid}>
          <div style={{fontSize: '15px' }}> Post #{post.postid}</div>
          <div style={{fontSize: '30px' }}> Title: {post.name}</div>
          <div style={{color: 'gray', fontSize: '20px' }}> {post.postText}</div>
          <div>{post.postImage}</div>
          <br/> 
          <PostEdit postid={post.postid} />
          <PostDelete postid={post.postid} />
        </div>
        </Wrapper>
      ))}
    </div>
  </>
)

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps, null)(Posts)

const Wrapper = s.div`
  border: 10px solid blue;
  padding: 5;
`
