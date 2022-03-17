import { connect } from 'react-redux'
import React, { useState } from 'react'
import s from 'styled-components'

const Intro = ({ intro }) => (
  <>
  
    <div>{ intro.name }</div>
    <div>{ intro.introText }</div>
    <div>{ intro.introImage }</div>
  </> 
)

const mapStateToProps = state => ({ intro: state.intro })

export default connect(mapStateToProps, null)(Intro)
