import React from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'
import { addIntro } from '../actions'


const IntroInput = ({ addIntro }, { intro }) => {
  const tracker = {
    name: 'Enter website name',
    introText: 'Enter Description',
    introImage: 'Add an Image',

  } 
  const [state, setState] = React.useState({
    name: '',
    introText: '',
    introImage: '',
  })

  const updateinputs = e => {
    const { target } = e
    const { value } = target
    setState({
      ...state,
      [e.target.name]: value,
    })

    console.log(tracker)
  }

  const submitinputs = e => {
    e.preventDefault()
    addIntro(state.name, state.introText, state.introImage)
    tracker.name = state.name
    tracker.introText = state.introText
    tracker.introImage = state.introImage
    setState({
      name: '',
      introText: '',
      introImage: '',
    })
    console.log(tracker)
    document.getElementsByName('name')[0].placeholder = `${tracker.name}`
    document.getElementsByName('introText')[0].placeholder = `${tracker.introText}`
    document.getElementsByName('introImage')[0].placeholder = `${tracker.introImage}`
  }

  const clickhandle = e => {
    console.log('canceled')
    setState({
      name: '',
      introText: '',
      introImage: '',
    })
  }

  return (
    <Wrapper>
    <form
      onSubmit={submitinputs}

    >
      <input
        type="text"
        name="name"
        value={state.name}
        placeholder={tracker.name}
        onChange={updateinputs}
      />
      <br />
      <input
        type="text"
        name="introText"
        value={state.introText}
        placeholder={tracker.introText}
        onChange={updateinputs}

      />
      <br />
      <input
        type="text"
        name="introImage"
        value={state.introImage}
        placeholder={tracker.introImage}
        onChange={updateinputs}

      />
      <br />
      <input type="submit" disabled={!state.name || !state.introText} value="Submit" />
      <button onClick={() => clickhandle()}> Cancel </button>
    </form>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  addIntro: (name, introText, introImage) => dispatch(addIntro(name, introText, introImage)),
})

export default connect(null, mapDispatchToProps)(IntroInput)

const Wrapper = s.div`
  border: 10px solid red;
  padding: 5;
`
