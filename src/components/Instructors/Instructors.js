import React, { Component } from 'react'

import { connect } from 'react-redux'
import Instructor from '../Instructor/Instructor'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import './Instructors.css'

class Instructors extends Component {
     render() {

    const {instructors}=this.props

    return (
      <div className="instructors container">
        { instructors&&instructors.map((instructor) => (
          <Instructor
            key={instructor.name}
            name={instructor.name}
            imageOne={instructor.imageOne}
            tutorialNumbers={instructor.tutorials.length}            
            imageTwo={instructor.imageTwo}
              quote={instructor.quote}
              starkLine={instructor.starkLine}
              twitterAccount={instructor.twitterAccount}
              youtubeChannel={instructor.youtubeChannel}
              youtubeChannelName={instructor.youtubeChannelName}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps =  state  => {
  console.log(state)
    return {
      instructors: state.firestore.ordered.instructors,
    }
  }
  
  export default compose(
    connect(mapStateToProps,null),
    firestoreConnect([{ collection: 'instructors' }])
  )(Instructors)
  