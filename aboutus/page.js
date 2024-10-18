"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { merastore } from '../store/store'
import ShowAbout from '../components/showshoes/showshoes'

const About = () => {
  return <Provider store={merastore}>
  <ShowAbout/>
    </Provider>
  
}

export default About
