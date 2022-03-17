import React from 'react'
import IntroInput from './components/IntroInput'
import Intro from './components/Intro'
import Posts from './components/Posts'
import PostInput from './components/PostInput'

export function App() {
  return (
    <>
      <IntroInput />
      <Intro />

      <PostInput />
      <Posts />
      <br />

    </>
  )
}

export default App
