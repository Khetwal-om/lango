import React, { Component } from 'react'

import { connect } from 'react-redux'
import Tutorial from '../Tutorial/Tutorial'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'



class Tutorials extends Component {

  render() {
    console.log(this.props.match.params.instructor)
    const {instructors}=this.props
    // const searchTutorials = this.props.match.params.instructor
    if(instructors){
    const filterInstrutors = instructors.filter(
      (instructor) => instructor.name === this.props.match.params.instructor
    )
    console.log(filterInstrutors)

  }

    return (
      <div className="container">
        {instructors&&instructors
          .filter(
            (instructors) =>
              instructors.name === this.props.match.params.instructor
          )
          .map((instructor) => (
            <Tutorial
              key={instructor.id}
              tutorials={instructor.tutorials}
            />
          ))}
      </div>
    )
  }
}

const mapStateToProps =  state  => {
  return {
    instructors: state.firestore.ordered.instructors,
  }
}

export default compose(
  connect(mapStateToProps,null),
  firestoreConnect([{ collection: 'instructors' }])
)(Tutorials)

