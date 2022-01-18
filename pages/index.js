import ContainerBlock from "../components/ContainerBlock"
import Navbar from "../components/Navbar"

// Redux packages
import { useState } from 'react'
import { connect } from 'react-redux'

function Home() {
  return (
      <div>
        <Navbar />
        <ContainerBlock
          title="Welcome to David Zou's Portfolio Website"
          description="David Zou's Portfolio Website"
          >
        </ContainerBlock>
      </div>
      
      
  )
}

const mapStateToProps = state => {
  return { /* insert states here */ }
}

const mapDispatchToProps = {
  /* insert dispatches here */
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)