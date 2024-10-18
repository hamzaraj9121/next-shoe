



// export default function Home() {
//    return <div>

  
//    </div>
    
// }


"use client"
import React from 'react'
import { Provider } from 'react-redux'
// import { merastore } from '../store/store'
import { merastore } from './store/store'
// import ShowAbout from '../components/showshoes/showshoes'
import ShowAbout from './components/showshoes/showshoes'

const About = () => {
  return <div>
    <h2 style={{textAlign:'center' , color:'darkgray', marginTop:'10px'}}>Add Product that You Want</h2>
    <Provider store={merastore}>
  <ShowAbout/>
    </Provider>
    
    </div>
}

export default About
