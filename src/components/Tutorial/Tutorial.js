import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import Flashcard from '../Flashcard/Flashcard'
import FlashcardHover from '../FlashcardHover/FlashcardHover'
import Story from '../Story/Story'


import './Tutorial.css'

class Tutorial extends Component {
  state = {
    selectedTutorial: null
  }
  componentDidMount() {
    this.setState({
      selectedTutorial: this.props.tutorials[0]
    })
  }
  onTutorialSelect = (tutorial) => {
    this.setState({
      selectedTutorial: tutorial
    })
  }
  render() {
    const {  tutorials } = this.props
    // console.log(this.props.tutorials)
    if(this.state.selectedTutorial){
    console.log(this.state.selectedTutorial.flashcards)

    }
    
    return (
        <>
           {/* <div className="l-heading uppercase margin-top-bottom-small">Know your teacher  <span role="img" aria-label="">🚀</span></div> */}
            {/* <div class="tutor">
              <img className="tutor__image" src={imageTwo} alt=""/>
            </div> */}

            <div className="margin-top-bottom-small"></div>
            <div className="margin-top-bottom-small"></div>


         <div className="tags">
            <div className="tags__heading l-heading uppercase">
                tags
            </div>
          <div className="tags-item">
            {tutorials.map((tutorial) => (
                <article className="tag"
                    onClick={() => { this.onTutorialSelect(tutorial)}}>
                    <img src={tutorial.icon} alt="🚀"/>
                    <div className="tag__line"> {tutorial.title}</div>
                </article>
            ))}
            </div>
         </div>

       <div className="lecture__container">
        <div className="l-heading uppercase margin-top-bottom-small">Lecture</div>
        <div className="lecture">
       {this.state.selectedTutorial && ( <iframe  src={`https://www.youtube.com/embed/${this.state.selectedTutorial.video}`} title="l" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)}
        </div>
       </div>




         <div className="margin-top-bottom-small"></div>     

         <div className="margin-top-bottom-small"></div>     
         <div class="flashcard__header l-heading uppercase margin-top-bottom-small">
          Story
         </div>
         <div className="storybooks">
            {this.state.selectedTutorial &&
            this.state.selectedTutorial.flashcards.map((flashcard) => (
              <Story
                question={flashcard.question}
                meaningOne={flashcard.meaningOne}
                meaningTwo={flashcard.meaningTwo}
                explanation={flashcard.explanation}
                exampleOne={flashcard.exampleOne}
                exampleTwo={flashcard.exampleTwo}
              />
            ))}
         </div>







      <div class="flashcards__container">


        <div class="flashcard__header l-heading uppercase margin-top-bottom-small">
          flashcards
        </div>

     
        <div className="m-heading margin-top-bottom-small uppercase">{this.state.selectedTutorial && this.state.selectedTutorial.title}</div> 

          <div class="flashcards">   
            {this.state.selectedTutorial &&
            this.state.selectedTutorial.flashcards.map((flashcard) => (
              <Flashcard
                question={flashcard.question}
                meaningOne={flashcard.meaningOne}
              />
            ))}
         </div>     

         
         <div className="margin-top-bottom-small"></div>     
         <div class="flashcard__header l-heading uppercase margin-top-bottom-small">
          Hover
        </div>
         
         <div class="flashcards">   
            {this.state.selectedTutorial &&
            this.state.selectedTutorial.flashcards.map((flashcard) => (
              <FlashcardHover
                question={flashcard.question}
                meaningOne={flashcard.meaningOne}
              />
            ))}
         </div>


        </div>
    </>

    )
  }
}

export default Tutorial